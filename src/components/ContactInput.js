import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic1" label="First Name" />
      <TextField id="standard-basic2" label="Last Name" />
      <TextField id="standard-basic3" label="Email Address" />
      <TextField
        id="standard-number"
        label="Queue Number"
        type="number"
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}
