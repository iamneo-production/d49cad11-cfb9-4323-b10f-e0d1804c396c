import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { setUsername } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const theme = createTheme(); // Create an empty MUI theme

const Login = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        if (email.trim() === '' && password.trim() === '') {
            toast.error('Please enter email and password');
            return;
        }
        if (!isValidEmail(email)) {
            toast.error('Invalid email address');
            return;
        }
        const requestData = {
            email: email,
            password: password
        };
        try {
            const response = await axios.post('http://localhost:2023/api/v1/auth/authenticate', requestData);
            console.log(response.data);
            dispatch(setUsername(response.data.name));

            if (password !== null) {
                toast.success('Login successful!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000, // Toast will stay for 3 seconds
                    onClose: () => {
                        navigate("/Navbar2");
                    },
                });
            }
            else {
                navigate("/Home");
            }
        } catch (error) {
            console.error('Error registering user:', error);

        }

    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container
                component="main"
                maxWidth="xl"
                sx={{
                    backgroundImage: `url('/images/Login.jpg')`,
                    backgroundSize: 'cover',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 4,
                        py: 6,
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="Signup" variant="body2">
                                    {'Don\'t have an account? Sign Up'}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <ToastContainer position={toast.POSITION.TOP_RIGHT} />
            </Container>
        </ThemeProvider>
    );
};

export default Login;
