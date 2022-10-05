import { Card, CardContent, Container, Stack, TextField, Button, Box, Alert, IconButton, Collapse } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser'
import handler from './api/contact';

const EmailForm = () => {
    const [subject, setSubject] = useState('subject')
    const [email, setEmail] = useState('email')
    const [phone, setPhone] = useState('phone')
    const [message, setMessage] = useState('message')
    const [response, setResponse] = useState('response')
    const [severity, setSeverity] = useState('success')
    const [open, setOpen] = useState(false);
    const contactEmail = 'markovv.dev@gmail.com';

    function emptyForm() {
        setEmail('')
        setSubject('')
        setPhone('')
        setMessage('')
    }
    async function handleSubmit(e) {     
        e.preventDefault();
        console.log('handling submit')
        handler({subject, email, phone, message})
            .then(result => {
                setResponse('Thank you for your message! I will get back to you shortly :)')
                setSeverity('success')
                setOpen(true)
                emptyForm()
            } , err => {
                console.log(err)
                setResponse(`Sorry, something went wrong... You can also contact me by email: ${contactEmail}`)
                setSeverity('error')
                setOpen(true)
            })
    }

    return(
        <Container maxWidth='md'>
            <Box sx={{ width: '100%' }}>
                <Collapse in={open}>
                    <Alert
                    severity={severity}
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                        >
                        X
                        </IconButton>
                    }
                    sx={{ mb: 2 }}
                    >
                    {response}
                    </Alert>
                </Collapse>
            </Box>

            <Card sx={{ margin: '20px'}}>
                <CardContent>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Stack sx={{ pt: 4 }} justifyContent="center" direction="column" spacing={2}>
                            <TextField onChange={(e) => setSubject(e.target.value)}
                                id="outlined-basic" label="Subject"
                                variant="outlined" type="text" 
                                value={subject}
                            />
                            <TextField onChange={(e) => setEmail(e.target.value)}
                                required={true} id="outlined-basic" label="Email"
                                type="email" variant="outlined"
                                value={email}
                            />
                            <TextField onChange={(e) => setPhone(e.target.value)}
                                id="outlined-basic" label="Phone"
                                type="tel" variant="outlined"
                                value={phone}
                            />
                            <TextField onChange={(e) => setMessage(e.target.value)}
                                id="outlined-basic" label="Your message"
                                variant="outlined" multiline rows={5}
                                type="text" value={message} />
                            <Button variant="contained" align="center" 
                            onClick={handleSubmit} 
                            >Submit Form</Button>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}

export default EmailForm;