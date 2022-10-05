import emailjs from '@emailjs/browser'


async function handler({subject, email, phone, message}) {
    console.log('in handler func', {subject, email, phone, message})
    return emailjs.send('service_f4batvo', 'template_s8hb4od', {subject, email, phone, message},'t_ZimR3kvgZrIp5g3')
}

export default handler;