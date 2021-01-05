import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './css/userForm.css';

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

export function UserRegister() {

  const [passwordFlag, setPassFlag] = useState(false);


  function verifyPassword() {
    setPassFlag(true);
  }

  function renderVerify() {
    if(passwordFlag) {
      return(
        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" type="password" fullWidth margin="normal"/>
      );
    }
  }

  return(
    <>
    <div class="centered">

      <h1 class="center">Money Manager</h1>
      <form  noValidate autoComplete="off">

          <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth margin="normal"/>
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth margin="normal"/>

          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth margin="normal"  type="password" onChange={() => verifyPassword()}/>
          {
            renderVerify()
          }
          <Button variant="contained" color="primary" fullWidth  margin="normal" size="large">
            REGISTER
          </Button>
          <p class="center">
              Already have an account? <Link to="/">Sign In</Link>
          </p>

      </form>
    </div>
    </>
  );
}

export default UserRegister;
