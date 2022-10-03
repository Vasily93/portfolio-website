import AppBar from '@mui/material/AppBar';
import App from 'next/app';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#0c2033',
          light: '#296fb1',
        },
        secondary: {
          main: '#2c93b7',
        },
        background: {
          default: '#e0e2e8',
          paper: '#ffffff',
        },
      },
      typography: {
        fontWeightLight: 300,
        fontFamily: 'Droid Serif',
        button: {
          fontWeight: 500,
        },
      },
  });

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
                        <Stack 
                            sx={{ pt: 1 }}
                            direction="row"
                            spacing={2}>

                            <Button  size="small" color="inherit" variant="outlined"
                                target='_blank' href="https://github.com/Vasily93"
                                >GitHub
                            </Button>
                            <Button size="small" color="inherit" variant="outlined"
                                href='https://www.linkedin.com/in/vasily-markov/'
                                target='_blank'
                                >LinkedIn
                            </Button>
                        </Stack>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    )
  }
  
  export default MyApp;