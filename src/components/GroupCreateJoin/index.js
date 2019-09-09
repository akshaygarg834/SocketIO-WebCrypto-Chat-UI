import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import GroupIcon from "@material-ui/icons/Group";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SubmitButton from "./SubmitButton";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(2),
    height: 60,
    width: 60,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function GroupCreateJoin(props) {
  const classes = useStyles();

  const {
    open,
    setOpen,
    selectedIndex,
    setSelectedIndex,
    password,
    setPassword,
    groupName,
    setGroupName,
    name,
    setName
  } = props;

  function handleFormChanges(event) {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "groupName":
        setGroupName(event.target.value);
        break;
      default:
        break;
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          {!selectedIndex ? <GroupAddIcon /> : <GroupIcon />}
        </Avatar>
        <form className={classes.form} noValidate onSubmit={props.handleClick}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={handleFormChanges}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="groupName"
            label="Group name"
            id="groupName"
            value={groupName}
            onChange={handleFormChanges}
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
            value={password}
            onChange={handleFormChanges}
          />
          <SubmitButton
            handleClick={props.handleClick}
            {...{
              open,
              setOpen,
              selectedIndex,
              setSelectedIndex
            }}
          />
        </form>
      </div>
    </Container>
  );
}

export default GroupCreateJoin;
