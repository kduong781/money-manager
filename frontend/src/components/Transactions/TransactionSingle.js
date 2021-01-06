import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';


import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
    width: "100%"
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },

}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export function TransactionSingle() {
  const classes = useStyles();


  return (
    <div className={classes.root}>





          <div className={classes.demo}>
            <List className={classes.listItem}>
              {generate(
                <ListItem >
                  <ListItemAvatar>
                    <ListItemText
                      secondary="Food"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Happy Lemon"
                    secondary="Chase"
                  />
                  <ListItemSecondaryAction>
                    <ListItemText
                      primary="$4.75"
                    />
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
            <Fab color="primary" aria-label="add" className={classes.fab}>
              <AddIcon />
            </Fab>
          </div>

    </div>
  );
}

export default TransactionSingle;
