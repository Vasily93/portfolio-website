import Link from 'next/link';
import Button from '@mui/material/Button';
import { Card, CardContent, Container, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
    const [subject, setSubject] = useState('subject')
    const [email, setEmail] = useState('email')
    const [phone, setPhone] = useState('phone')
    const [message, setMessage] = useState('message')

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(subject, email, phone, message)
        let config = {
            method: 'post',
            url: 'http://localhost:3000/api/contact',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {subject, email, phone, message}
        }
        try {
            const response = await axios(config);
            console.log(response)
        } catch(err) {
            console.error(err)
        }
    }
    return(
        <Container>
            <Stack sx={{ pt: 4 }} justifyContent="center"> 
                {/* dont need to use Stack, need to find something else for sing component */}
                <Link href='/'>
                    <Button variant="contained" align="center">Go back to Projects</Button>
                </Link>
            </Stack>

            <Card sx={{ maxWidth: "%100" }}>
                <CardContent>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Stack sx={{ pt: 4 }} justifyContent="center" direction="column" spacing={2}>
                            <TextField onChange={(e) => setSubject(e.target.value)} id="outlined-basic" label="Subject" variant="outlined" />
                            <TextField onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
                            <TextField onChange={(e) => setPhone(e.target.value)} id="outlined-basic" label="Phone" variant="outlined" />
                            <TextField onChange={(e) => setMessage(e.target.value)} id="outlined-basic" label="Your message" variant="outlined" multiline rows={5} />
                            <Button variant="contained" align="center" onClick={handleSubmit}>Submit Form</Button>
                        </Stack>
                    </form>
                </CardContent>
            </Card>
        </Container>
    )
}

export default EmailForm;