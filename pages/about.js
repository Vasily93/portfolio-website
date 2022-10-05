import Link from 'next/link';
import Button from '@mui/material/Button';
import { Container, Box, Typography } from '@mui/material';

const AboutMe = () => {
    
  return(
    <Container maxWidth='md'>
      <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 46,
        margin: '20px'
      }}
    >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Vasily Markov
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          I am Front End Javascript Web Developer. React Oriented. Open for oppotunities!
          Check out my latest projects below.
        </Typography>
    </Box>
    </Container>
  )
}

export default AboutMe;