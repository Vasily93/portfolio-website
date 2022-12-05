import Link from 'next/link';
import Button from '@mui/material/Button';
import { Container, Box, Typography, Avatar, Fab } from '@mui/material';
import { Stack } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const AboutMe = () => {
    
  return(
    <Container maxWidth='md'>
      <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 2,
        pb: 4,
        pr: 2,
        margin: '20px'
      }}
    >
      <Container maxWidth='sm' sx={{ width: '150px', pb: 2 }}>
        <Avatar alt='avatar image' src='/avatar.jpeg' sx={{ width: 100, height: 100 , boxShadow: 5 }}/>
      </Container>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Vasily Markov
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
      I am Front-end Javascript Web Developer, React Oriented. 
      I am passionate to create solutions for businesses and automate processes. 
      Open for opportunities!
      </Typography>
      <Container sx={{ width: '185px' }}>
        <Stack direction='row' maxWidth='sm' spacing={2}>
          <Fab href='https://github.com/Vasily93' color='primary' size='large'>
            <GitHubIcon fontSize='large' />
          </Fab>
          <Fab href='https://www.linkedin.com/in/vasily-markov/' color='primary' size='large'>
            <LinkedInIcon fontSize='large' />
          </Fab>
        </Stack>
      </Container>

    </Box>
    </Container>
  )
}

export default AboutMe;