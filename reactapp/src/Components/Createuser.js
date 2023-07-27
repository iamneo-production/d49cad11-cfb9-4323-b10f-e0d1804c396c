import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignUp() {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        age: '',
        gen: '',
        mob: '',
        econ: '',
        add: '',
        zip: '',
    });
    const { fname, lname, email, age, gen, mob, econ, add, zip } = formData;



    const [showModal, setShowModal] = useState(false); // State variable to control the modal

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const requestdata = {
            fname,
            lname,
            email,
            age,
            gen,
            mob,
            econ,
            add,
            zip,
        };

        try {
            const response = await axios.post("http://localhost:2023/api/v1/auth/cust/add", requestdata);
            console.log(response.data);

            setFormData({
                fname: "",
                email: "",
                age: "",
                gen: "",
                mob: "",
                add: "",
                zip: "",
            });

            // Close the modal after successful form submission
            setShowModal(false);
            navigate('/navbar2')
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setFormData({ ...formData, [event.target.name]: value });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Create User
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="given-name"
                                    name="fname"
                                    required
                                    fullWidth
                                    id="Fname"
                                    value={FormData.fname}
                                    onChange={(event) => handleChange(event)}
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    value={FormData.email}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Age"
                                    label="Age"
                                    name="age"
                                    value={FormData.age}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="Age"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="Gen"
                                    label="Gender"
                                    name="gen"
                                    value={FormData.gen}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="Gender"
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    fullWidth
                                    id="Mob"
                                    label="Mobile"
                                    name="mob"
                                    value={FormData.mob}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="Mobile"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="add"
                                    label="Query"
                                    id="Add"
                                    value={FormData.add}
                                    onChange={(event) => handleChange(event)}
                                    autoComplete="Address"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>

                        </Grid>
                        <Button
                            
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

