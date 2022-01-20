import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function PorjectCard(props) {
    const name = props.project.properties.title.title[0].plain_text;
    const description = props.project.properties.description.rich_text[0].plain_text;
    // const github;
    // const deploy;
    console.log(description)
    return (
        <Grid item key={props.project.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    <Typography>
                      {description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Github</Button>
                    <Button size="small">Deploy</Button>
                  </CardActions>
                </Card>
              </Grid>
    )
}