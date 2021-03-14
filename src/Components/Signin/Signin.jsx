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
import { NavLink, useHistory } from "react-router-dom";






const Signin = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [check,setCheck]=useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(check){
    try {
      setCheck(false)
      setError("");
      setLoading(true);
      await login(email, password);
      history.push('/');
      alert(" Successfully logged-in");
    } catch {
      setError("Failed to login");
      alert("Failed to login");

    }
  }

  }

  const classes = useStyles();

  return (
    <>
      <div style={{ backgroundColor: "#242F40", position: "absolute", height: "110vh", marginTop: "-145px", width: "100%" }}>
        <div className="container-xl" >
          <div className="row">
            <div className="col-sm-6">
              <img src="/sign-in.svg" alt="Sign in Pic" height="300px" style={{ margin: "250px 100px 0 0px" }} />
            </div>
            <div className="col-sm-6">
              <Container style={{ backgroundColor: "#f7f7f7", position: "relative", left: "100px", marginTop: "250px", boxShadow: "0 0 20px 0 black" }} component="main" maxWidth="xs" onSubmit={handleSubmit}>
                <CssBaseline />
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <form className={classes.form} noValidate>
                    <TextField
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
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={(ev) => setPassword(ev.target.value)}

                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}

                    >
                      Sign In
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <NavLink to="/Passwordreset" variant="body2">
                          Forgot password?
                        </NavLink>
                      </Grid>
                      <Grid item>
                        <NavLink to="/Signup" variant="body2">
                          <p>
                            "Don't have an account? Sign Up"
                          </p>
                        </NavLink>
                      </Grid>
                    </Grid>
                  </form>
                </div>
                <Box mt={8}>
                </Box>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
