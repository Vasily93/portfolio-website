import App from 'next/app';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Vasily Markov
                        </Typography>
                        <Button color="inherit">Github</Button>
                        <Button color="inherit">LinkedIn</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    )
  }
 
//   MyApp.getInitialProps = async (appContext) => {
//     const appProps = await App.getInitialProps(appContext);
  
//     return { ...appProps }
//   }
  
  export default MyApp;