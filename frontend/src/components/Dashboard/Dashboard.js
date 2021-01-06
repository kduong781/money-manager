import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import useToken from '../../useToken';
import "./Dashboard.css";
import MenuAppBar from './MenuAppBar';
import TransactionSingle from '../Transactions/TransactionSingle';
import LabelBottomNavigation from './BottomNavigation';



export function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [token, setToken] = useState(false);
  useToken();
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return(
    <>
    {MenuAppBar()}
    {TransactionSingle()}
    {LabelBottomNavigation()}
    </>
  );
}


export default Dashboard
