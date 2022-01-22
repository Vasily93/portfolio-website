import { Client } from '@notionhq/client';

export default (req, res) => {
    const {subject, email, phone, message} = req.body;
    const notion = new Client({ auth: process.env.NOTION_API_KEY})
    notion.pages.create({
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
    res.status(200).json(req.body)
}