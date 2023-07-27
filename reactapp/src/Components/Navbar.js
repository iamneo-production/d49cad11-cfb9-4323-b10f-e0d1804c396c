import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Slidebars from './Slidebars.tsx';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(2),
    width: 40,
    borderRadius: '100%',
  },
  navItem: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0,
    },
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  authContainer: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
  authItem: {
    marginRight: theme.spacing(2),
  },
  appBar: {
    backgroundColor: '#658E9C', // Change the background color here
  },
}));

const Navbar = () => {
  const handleSignupClick = () => {
    // Redirect to a different localhost for Signup
    window.location.href = 'http://localhost:3001/CLogin';
  };

  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appBar}>

      <Toolbar>
        {/* <Slidebars /> */}
        <div className={classes.navItem}>
          <Button color="inherit" component={ScrollLink} to="home">Home</Button>
        </div>
        <div className={classes.navItem}>
          <Button color="inherit" component={ScrollLink} to='page2' smooth={true}>Page2</Button>
        </div>
        <div className={classes.navItem}>
          <Button color="inherit" component={ScrollLink} to='Middle' smooth={true}>Middle</Button>
        </div>
        <div className={classes.navItem}>
          <Button color="inherit" component={ScrollLink} to='bottom' smooth={true}>Bottom</Button>
        </div>
        <div className={classes.authContainer}>
          <div className={classes.authItem}>
            <Button onClick={handleSignupClick} color="inherit">Customer Login</Button>
          </div>
          <div className={classes.authItem}>
            <Button component={Link} to="/Login" color="inherit">Admin Login</Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
