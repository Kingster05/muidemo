
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Wellmeadows Hospital
            </Typography>
            <Button color="inherit" component={Link} to="/signup">Sign Up</Button>
            <Button color="inherit" component={Link} to="/login">Log In</Button> {/* Modified */}
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-email"
          label="Email"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-password"
          label="Password"
          type="password"
          defaultValue=""
        />
        <Button variant="contained" sx={{ mt: 2 }}>Log In</Button>
      </Box>
    </>
  );
}

export default Login;
