import * as React from 'react';
import { Grid, Container} from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { Client } from '@notionhq/client';

export default function Album({ results, cv }) {
  return (
    <main>
    <Container sx={{ py: 8 }} maxWidth="lg">
      <Grid container spacing={4}>
        {results.map((project) => (
          <ProjectCard key={project.id} project={project}/>
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
        results: res.results,
    }}
}
