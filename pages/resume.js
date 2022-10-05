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
            spacing={1}
            style={{marginTop: '5px'}}
        >
            </Stack>
        <Container sx={{ py: 0.1 }} maxWidth="sm">
            <Card style={{padding: '10px', margin: '0px'}}>
                <CardMedia
                    component='img'
                    image='/resumeImage.png'
                    height='50%'
                />
            {/* <Button href='/NewResume.pdf' target='_blank' variant="contained">
                Download / Print PDF
            </Button> */}
            </Card>
        </Container>
        </>
    )
}

