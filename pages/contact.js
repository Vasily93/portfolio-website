import Link from 'next/link';
import Button from '@mui/material/Button';
import { Card, CardContent, Container, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

const EmailForm = () => {
    const [subject, setSubject] = useState('subject')
    const [email, setEmail] = useState('email')
    const [phone, setPhone] = useState('phone')
    const [message, setMessage] = useState('message')
    const [response, setResponse] = useState('response')
    const [severity, setSeverity] = useState('success')
    const [open, setOpen] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault();
        let config = {
            method: 'post',
            url: 'https://vasily-m.dev/api/contact',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {subject, email, phone, message}
        }
        try {
            await axios(config);
            setResponse('Thank you for your message! I will get back to you shortly :)')
            setSeverity('success')
            setOpen(true)
        } catch(err) {
            setResponse(`Sorry, something went wrong. Error: ${err.response.data}`)
            console.log(err)
            setSeverity('error')
            setOpen(true)
        }
    }
    return(
        <Container>
            <Box sx={{marginTop: '10px'}}>
                <Link href='/'>
                        <Button variant="outlined">
                            Go back to Projects
                        </Button>
                </Link>
            </Box>

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

            <Card sx={{ maxWidth: "%100" }}>
                <CardContent>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Stack sx={{ pt: 4 }} justifyContent="center" direction="column" spacing={2}>
                            <TextField onChange={(e) => setSubject(e.target.value)}
                                id="outlined-basic" label="Subject"
                                variant="outlined" type="text" 
                            />
                            <TextField onChange={(e) => setEmail(e.target.value)}
                                required={true} id="outlined-basic" label="Email"
                                type="email" variant="outlined"
                            />
                            <TextField onChange={(e) => setPhone(e.target.value)}
                                id="outlined-basic" label="Phone"
                                type="tel" variant="outlined"
                            />
                            <TextField onChange={(e) => setMessage(e.target.value)}
                                id="outlined-basic" label="Your message"
                                variant="outlined" multiline rows={5}
                                type="text" />
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