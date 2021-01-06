import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import './css/userForm.css';
import axios from 'axios';
import useToken from '../../useToken';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));



export function UserForm() {
  useToken("dashboard");
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [open,setOpen] = useState(false);
  const config = {
    baseUrl: "http://localhost:5000/"
  }

  const navigate = useNavigate();

  function logIn() {

    axios.post(
      config.baseUrl+"user/login",
      {
        email : credentials.email,
        password: credentials.password
      }
    ).then((response)=>{
        if(response.data.status == "success") {
          localStorage.setItem('token', JSON.stringify({ token:"true"}));
          navigate("/dashboard");
        } else {
          setOpen(true);
        }

    }).catch((err)=>{
       console.log(err);
    })
  }


  function handleChange (event) {

    setCredentials({
      ...credentials,
      [event.target.name] : event.target.value
    });
  }

  const handleClose = (event, reason) => {
   if (reason === 'clickaway') {
     return;
   }

   setOpen(false);
 };

  return(
    <>
    <div className="centered">

      <h1 className="center">Money Manager</h1>
      <form  noValidate autoComplete="off">

          <TextField id="outlined-basic" label="Email" value={credentials.email} onChange={handleChange} name="email" variant="outlined" fullWidth margin="normal"/>


          <TextField id="outlined-basic" label="Password" value={credentials.password}  onChange={handleChange} name="password" type="password" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth  margin="normal" size="large" onClick={() => logIn()}>
            LOGIN
          </Button>
          <p className="center">
              Don't have an account? <Link to="register">Sign Up</Link>
          </p>

      </form>
    </div>

    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
       <Alert  onClose={handleClose} severity="error">
         Invalid Credentials! Try Again!
       </Alert>
     </Snackbar>
    </>
  );
}

export default UserForm;
