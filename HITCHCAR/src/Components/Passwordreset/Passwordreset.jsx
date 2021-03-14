import React, { useRef } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from '../UseStyles/UseStyles';
import { useState, useEffect } from 'react';
import { fire } from '../FireBase/Fire';
import { useAuth } from "../Context/AuthContext";
import { NavLink, useHistory } from "react-router-dom"






const Signin = () => {


    const [email, setEmail] = useState("");
    const { resetPassword } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setError("")
            setLoading(true)
            await resetPassword(email)
            alert("Check your inbox for further instructions")
            history.push('/Signin');
        } catch {
            alert("Failed to reset password")
        }

        setLoading(false)

    }

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Password Reset
        </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        required
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(ev) => setEmail(ev.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}

                    >
                        Reset Password
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>

                            <NavLink to="/Signin" variant="body2">
                                Go back to Sign in.
              </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
            </Box>
        </Container>
    );
}

export default Signin;
