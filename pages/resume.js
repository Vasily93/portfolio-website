import { Container, Typography, Link, Button, Stack } from "@mui/material"
import PdfLoader from "../components/PdfLoader";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export default function Resume() {
    return (
        <Container sx={{ py: 2 }} maxWidth="md">
            <Stack 
            textAlign='center'
            direction="column"
            spacing={2}
            >
                <Link href='/'>
                        <Button variant="outlined">
                            Go back to Projects
                        </Button>
                </Link>
                <PdfLoader></PdfLoader>
            </Stack>
        </Container>
    )
}

