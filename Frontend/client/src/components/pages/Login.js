import React, { useContext, useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import Background from "../assets/Landscape1.jpg"
import Logo from "../assets/Logo.jpg"
import axios from 'axios';

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const Root = styled('div')(({ theme }) => ({
  backgroundImage: `url(${Background})`,
  height: '100vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledImg = styled('img')({
    width: '35%',
    borderRadius: '30%',
    objectFit: 'cover',
});

const StyledForm = styled(Form)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adjust as needed
    backdropFilter: 'blur(10px)', // Adjust as needed
    borderRadius: '10px', // Adjust as needed
    padding: '1rem', // Adjust as needed
});
  

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
  
    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            console.log(response.data);
            localStorage.setItem('isLoggedIn', 'true');
        } catch (error) {
            console.error(error);
            localStorage.setItem('isLoggedIn', 'false');
        }
    };
    return (
        <Root>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                xs={10}
                md={6}
            >
                <StyledForm>
                    <StyledImg src={Logo} alt="Logo" />
                    <TextField 
                        label="Username" 
                        variant="outlined" 
                        sx={{
                            color: '#FF8E00',
                            width: { xs: '80%', md: '50%' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#FF8E00',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FF8E00',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FF8E00',
                                },
                            },
                            '& .MuiFormLabel-root.Mui-focused': {
                                color: '#FF8E00',
                            },
                        }}
                        onChange={handleUsernameChange}
                    />
                    <TextField 
                        label="Password" 
                        variant="outlined" 
                        type="password" 
                        sx={{
                            color: '#FF8E00',
                            width: { xs: '80%', md: '50%' },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#FF8E00',
                                },
                                '&:hover fieldset': {
                                    borderColor: '#FF8E00',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#FF8E00',
                                },
                            },
                            '& .MuiFormLabel-root.Mui-focused': {
                                color: '#FF8E00',
                            },
                        }}
                        onChange={handlePasswordChange}
                    />
                    <Button 
                        variant="contained" 
                        type="submit" 
                        style={{ 
                            width: '50%', 
                            background: 'linear-gradient(45deg, #FF8E00 30%, #FF5003 90%)',
                            color: 'black',
                        }}
                        onClick={handleLogin}
                    >
                        Login
                    </Button >
                </StyledForm>            
            </Grid>
        </Root>
    );
};

export default Login;
