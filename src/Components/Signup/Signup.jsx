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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import useStyles from '../UseStyles/UseStyles';
import { useState, useEffect } from 'react';
import { db, fire } from '../FireBase/Fire';
import { useAuth } from "../Context/AuthContext";
import { NavLink, useHistory } from 'react-router-dom';







const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();
  const [check,setCheck]=useState(true);




  const handleSubmit = async (event) => {
    event.preventDefault();
    const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    if (password !== confirmPassword) {
      alert("Password Didn't match");
      return setError("Passwords do not match");
    }
    if(check){
    try {
      setError("");
      setCheck(false);
      setLoading(true);
      await signup(email, password, fname, phone);
      await db.collection("Users").doc(key).set({
        Email: email,
        FirstName: fname,
        LastName: lname,
        Phone: phone
      })


      history.push('/');
      alert("Account Successfully created");
    } catch {
      setError("Failed to create an account");
      alert("Failed to create an account");

    }
  }
  }
  const classes = useStyles();

  return (

    <>
      <div style={{ backgroundColor: "#242F40", position: "absolute", height: "120vh", marginTop: "-145px", width: "100%" }}>
        <div className="container-xl" >
          <div className="row">
            <div className="col-sm-6">
              <Container style={{ backgroundColor: "#f7f7f7", position: "relative", right: "100px", marginTop: "160px", boxShadow: "0 0 20px 0 black" }} component="main" maxWidth="xs" onSubmit={handleSubmit} >
                <CssBaseline />
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign up
                  </Typography>
                  <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="fname"
                          name="firstName"
                          variant="outlined"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                          onChange={(ev) => setFname(ev.target.value)}

                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="lname"
                          onChange={(ev) => setLname(ev.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          ref={emailRef}
                          onChange={(ev) => setEmail(ev.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="number"
                          label="Number"
                          name="number"
                          autoComplete="number"
                          onChange={(ev) => setPhone(ev.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                          onChange={(ev) => setPassword(ev.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="confirmPassword"
                          label="Confirm Password"
                          type="password"
                          id="confirmPassword"
                          autoComplete="current-password"
                          onChange={(ev) => setConfirmPassword(ev.target.value)}
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
                      color="primary"
                      className={classes.submit}
                    >
                      Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                      <Grid item>

                        <NavLink to="/Signin" variant="body2">
                          Already have an account? Sign in
                        </NavLink>
                      </Grid>
                    </Grid>
                  </form>
                </div>
                <Box mt={5}>

                </Box>
              </Container>
            </div>
            <div className="col-sm-6">
              <img src="/sign-up.svg" alt="Sign up Pic" height="300px" style={{ margin: "250px 0 0 100px" }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;