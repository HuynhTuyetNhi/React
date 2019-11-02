import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import classes from  '../Group/assets/style.css'
export default class Group extends Component {
  useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      height: 250,
    },
    inputRoot: {
      flexWrap: 'wrap',
    },
    inputInput: {
      width: 'auto',
      flexGrow: 1,
    },
    btn_search:{
      display: 'flex',
      marginLeft: theme.spacing(1),
    }
  }));
  
  render() {
    const classes = this.useStyles;
    return (
      <div>
         <TextField
          InputProps={{
            classes: {
              root: classes.inputRoot,
              input: classes.inputInput,
            },
          }}
        />
         
         <Button variant="outlined" color="secondary" className={classes.btn_search}>
            Search
          </Button>
         
        
      </div>
    )
  }
}
