import Link from 'next/link';
import Button from '@mui/material/Button';

const Resume = () => {
    return(
        <div>
            <Link href='/'>
                <Button variant="contained">Go back to Projects</Button>
              </Link>
            Here is my Resume
        </div>
    )
}

export default Resume;