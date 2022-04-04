import { Container, Link, Button, Stack, Card, CardMedia } from "@mui/material";
import { useEffect } from "react";

export default function Resume() {
    useEffect(() => {

    })
    return (
        <>
        <Stack 
            justifyContent='center'
            direction="row"
            spacing={2}
            style={{marginTop: '20px'}}
            >
                <Link href='/'>
                        <Button variant="outlined">
                            Go back to Projects
                        </Button>
                </Link>
                <Button href='/NewResume.pdf' target='_blank' variant="contained">
                    Download / Print PDF
                </Button>
            </Stack>
        <Container sx={{ py: 2 }} maxWidth="sm">
            
            <Card style={{padding: '20px', backgroundColor: 'lightgrey', margin: '0px'}}>
                <CardMedia
                    component='img'
                    image='/resumeImage.png'
                    height='100%'
                />
            </Card>
        </Container>
        </>
    )
}

