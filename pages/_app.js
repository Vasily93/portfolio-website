import AppBar from '@mui/material/AppBar';
import App from 'next/app';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { ButtonGroup, Typography, Box, Tabs, Tab } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

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
    const [url, setUrl] = useState('/');
    const router = useRouter()
    console.log(router.pathname)
    const handleChange = (event, newUrl) => {
        event.preventDefault()
        setUrl(newUrl);
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar variant='dense'>
                        <Link href={url}>
                        <Tabs value={url} indicatorColor='secondary'
                            selectionFollowsFocus={true}
                            textColor='inherit'
                            onChange={handleChange}
                            >
                            <Tab value='/' label='Projects' />
                            <Tab value='/resume' label='Resume'/>
                            <Tab value='/contact' label='Email'/>
                            <Tab value='/about' label='About Me'/>
                        </Tabs>
                        </Link>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    )
  }
  
  export default MyApp;