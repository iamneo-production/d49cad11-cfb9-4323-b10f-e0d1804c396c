import React, { useState } from 'react';
import { Grid, Paper, Typography, TextField, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Add this line to import Axios
axios.defaults.baseURL = 'http://localhost:2023';

const Signup = () => {
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: fieldValue,
        }));
    };

  
    const handleSubmit = async(event) => {
        event.preventDefault();
        const { name, email, gender, phoneNumber, password, confirmPassword, termsAccepted } = formData;

        const newErrors = {};
        const requestData = {
            email,
            name,
            password,
        };
        if (name.trim() === '') {
            newErrors.name = 'Name is required';
        }
        if (email.trim() === '') {
            newErrors.email = 'Email is required';
        }
        if (gender === '') {
            newErrors.gender = 'Please select a gender';
        }
        if (phoneNumber.trim() === '') {
            newErrors.phoneNumber = 'Phone number is required';
        }
        if (password.trim() === '') {
            newErrors.password = 'Password is required';
        }
        if (confirmPassword.trim() === '') {
            newErrors.confirmPassword = 'Confirm password is required';
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!termsAccepted) {
            newErrors.termsAccepted = 'Please accept the terms and conditions';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        try{
            const response = await axios.post('http://localhost:2023/api/v1/auth/register', requestData);
            console.log(response.data);

            setFormData({
                name: '',
                email: '',
                gender: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
                termsAccepted: false,
            });
            setErrors({});
        
        // Reset the form
        
        toast.success('Signup successful!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000, // Toast will stay for 3 seconds
            onClose: () => {
                // Redirect to another page
                navigate('/Login');
            },
        });
    }catch (error) {
        console.error('Error registering user:', error);
    }

    };

    return (
        <Grid
            container
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh', backgroundImage: `url('/images/Signup.jpg')`, backgroundSize: 'cover' }}
        >
            <Paper elevation={10} style={{ padding: '30px 20px', width: 300, opacity: 0.8 }}>
                <Grid align="center">
                    <h2 style={{ margin: 0 }}>Sign Up</h2>
                    <Typography variant="caption" gutterBottom>
                        Please fill this form to create an account!
                    </Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Name"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        error={!!errors.name}
                        helperText={errors.name}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        error={!!errors.email}
                        helperText={errors.email}
                    />
                    <FormControl component="fieldset" style={{ marginTop: 4 }}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            style={{ display: 'initial' }}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                        {errors.gender && (
                            <Typography variant="caption" color="error" style={{ marginTop: '5px' }}>
                                {errors.gender}
                            </Typography>
                        )}
                    </FormControl>
                    <TextField
                        fullWidth
                        label="Phone Number"
                        placeholder="Enter your phone number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        error={!!errors.phoneNumber}
                        helperText={errors.phoneNumber}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        placeholder="Enter your password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    <TextField
                        fullWidth
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                    />
                    <FormControlLabel
                        control={<Checkbox name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />}
                        label="I accept the terms and conditions."
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Sign up
                    </Button>
                </form>
            </Paper>
            <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        </Grid>
    );
};

export default Signup;
