import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "absolute",
    bottom: "0%",
    zIndex: "-1000"
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Trans." value="transactions" icon={<ReceiptIcon />} />
      <BottomNavigationAction label="Stats" value="statistics" icon={<AssessmentIcon />} />
      <BottomNavigationAction label="Accounts" value="accounts" icon={<AccountBalanceIcon />} />
      <BottomNavigationAction label="Settings" value="settings" icon={<SettingsIcon />} />
    </BottomNavigation>
  );
}
