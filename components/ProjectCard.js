import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function PorjectCard(props) {
    const id = props.project.id;
    const name = props.project.properties.title.title[0].plain_text;
    const description = props.project.properties.description.rich_text[0].plain_text;
    const github = props.project.properties.github.rich_text[0].plain_text;
    const deployLink = props.project.properties.deploy.rich_text[0].plain_text;
    // const cover = props.project.cover.file.url;
    return (
        <Grid item key={props.project.id}  xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345, minHeight: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={`/${id}.png`}
                    alt={`${name} image`}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="outlined"  
                        href={github} target='_blank'
                        >Github
                    </Button>
                    <Button size="small" variant="contained" 
                        href={deployLink} target='_blank'
                        >Live Deploy
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}