import AppBar from '@mui/material/AppBar';
import App from 'next/app';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { ButtonGroup, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';

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
                        <Toolbar variant='dense'>
                        <ButtonGroup>
                            <Link href='/'>
                            <Button size="small" variant="contained">Projects</Button>
                            </Link>
                            <Link href='/resume'>
                            <Button size="small" variant="contained">Resume</Button>
                            </Link>
                            <Link href='/contact'>
                            <Button size="small" variant="contained">Email</Button>
                            </Link>
                            <Link href='/about'>
                            <Button size="small" variant="contained">About Me</Button>
                            </Link>
                        </ButtonGroup>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    )
  }
  
  export default MyApp;