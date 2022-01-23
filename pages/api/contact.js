import { Client } from '@notionhq/client';
import Cors from 'cors';

const cors = Cors()

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
      fn(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
  
        return resolve(result)
      })
    })
  }

async function handler(req, res) {
    const {subject, email, phone, message} = req.body;
    await runMiddleware(req, res, cors)
    
    const notion = new Client({ auth: process.env.NOTION_API_KEY})
    const response = await notion.pages.create({
        parent: {
            database_id: process.env.contactsDB
        },
        properties: { 
            title: [
                {
                    type: 'text',
                    text: {
                        content: subject
                    }
                }
            ]
            ,
            [process.env.emailID]: email,
            [process.env.phoneID]: phone,
            [process.env.messageID]: [
                {
                    type: 'text',
                    text: {
                        content: message
                    }
                }
            ]
            
        }
    })

    res.status(200).json(response)
}

export default handler;