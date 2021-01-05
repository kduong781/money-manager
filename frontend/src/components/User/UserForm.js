import React, {useEffect} from 'react';
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

export function UserForm() {
  useEffect(()=> {

  }, []);


  return(
    <>
    <div class="centered">

      <h1 class="center">Money Manager</h1>
      <form  noValidate autoComplete="off">

          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth margin="normal"/>


          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth  margin="normal" size="large">
            LOGIN
          </Button>
          <p class="center">
              Don't have an account? <Link to="register">Sign Up</Link>
          </p>

      </form>
    </div>
    </>
  );
}

export default UserForm;
