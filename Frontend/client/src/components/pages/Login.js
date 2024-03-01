import React from 'react';
import { Box, Grid, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';
import Background from "../assets/Background.jpg"
import Logo from "../assets/Logo.jpg"

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
    width: '50%',
    borderRadius: '50%',
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
  return (
    <Root>
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            xs={6}
        >
            <StyledForm>
                <StyledImg src={Logo} alt="Logo" />
                <TextField 
                    label="Username" 
                    variant="outlined" 
                    sx={{
                        color: '#DAA520',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#DAA520',
                            },
                            '&:hover fieldset': {
                                borderColor: '#DAA520',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#DAA520',
                            },
                        },
                        '& .MuiFormLabel-root.Mui-focused': {
                            color: '#DAA520',
                        },
                    }}
                />
                <TextField 
                    label="Password" 
                    variant="outlined" 
                    type="password" 
                    sx={{
                        color: '#DAA520',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#DAA520',
                            },
                            '&:hover fieldset': {
                                borderColor: '#DAA520',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#DAA520',
                            },
                        },
                        '& .MuiFormLabel-root.Mui-focused': {
                            color: '#DAA520',
                        },
                    }}
                />
                <Button 
                    variant="contained" 
                    type="submit" 
                    style={{ 
                        width: '100%', 
                        background: 'linear-gradient(45deg, #DAA520 30%, #FFD700 90%)',
                        color: 'black',
                    }}
                >
                    Login
                </Button >
            </StyledForm>            
        </Grid>
    </Root>
  );
};

export default Login;
