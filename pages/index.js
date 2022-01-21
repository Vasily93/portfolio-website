import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ProjectCard from '../components/ProjectCard';
import { Client } from '@notionhq/client';
import Link from 'next/link';


export default function Album({ results}) {
  return (
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
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
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href='/resume'>
                <Button variant="contained">My Resume</Button>
              </Link>
              <Link href='/contact'>
                <Button variant="outlined">Send Me an Email</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {results.map((project) => (
              <ProjectCard project={project}/>
            ))}
          </Grid>
        </Container>
      </main>
  );
}

export async function getStaticProps() {
    require('dotenv').config();
    const notion = new Client({ auth: process.env.NOTION_API_KEY})
    const databaseID = process.env.NOTION_DATABASE_ID;
    const res = await notion.databases.query({
        database_id: databaseID,
    })
    return {props: {
        results: res.results
    }}
}
