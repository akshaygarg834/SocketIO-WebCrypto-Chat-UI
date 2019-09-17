import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SendIcon from "@material-ui/icons/Send";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import config from "app-config";
import update from "react-addons-update";
import socketUtils from "socketUtils";
import utils from "utils";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
    display: "flex",
    marginBottom: theme.spacing(8)
  },
  footer: {
    padding: theme.spacing(1),
    marginTop: "auto",
    backgroundColor: "white",
    position: "fixed",
    bottom: "0",
    width: "100%"
  },
  chip: {
    margin: theme.spacing(1)
  }
});
//WTF
const Message = props => {
  const message = props.message;
  const classes = props.classes;
  return (
    <Box
      display="flex"
      p={1}
      justifyContent={message.from === props.whoami ? "flex-end" : "flex-start"}
    >
      <Chip
        color={message.from === props.whoami ? "primary" : "secondary"}
        variant="outlined"
        size="medium"
        label={message.value}
        className={classes.chip}
      />
    </Box>
  );
};
class ChatWIndow extends React.Component {
  constructor(props) {
    super(props);

    if (!this.props.socket) this.props.setConnectionStatus(false);

    this.state = {
      messages: [],
      currentMessage: ""
    };

    this.props.socket.on(config.EVENTS_CONSTANTS.SNED_MESSAGE, message => {
      if (message && message.from && message.from !== props.whoami)
        utils.ding();
      this.setState(
        update(this.state, {
          messages: { $push: [message] }
        })
      );
    });
  }

  sendMessage = event => {
    event.preventDefault();
    if (!this.state.currentMessage.trim()) return;
    socketUtils.sendMessage(
      this.props.socket,
      { from: this.props.whoami, value: this.state.currentMessage },
      this.props.room
    );
    this.setState(
      update(this.state, {
        // messages: { $push: [{ value: this.state.currentMessage, from: "me" }] },
        currentMessage: { $set: "" }
      }),
      () => {}
    );
  };

  onMessageChange = event =>
    this.setState({ currentMessage: event.target.value });

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Container component="main" className={classes.main} fixed>
          <Box
            display="flex"
            flexDirection="column"
            p={1}
            justifyContent="flex-end"
            flexGrow={1}
            bgcolor="background.paper"
          >
            {this.state.messages.map((message, index) => (
              <Message
                key={index}
                classes={classes}
                message={message}
                whoami={this.props.whoami}
              />
            ))}
          </Box>
        </Container>

        <footer className={classes.footer}>
          <Container fixed>
            <form noValidate onSubmit={this.sendMessage}>
              <FormControl fullWidth>
                <Input
                  id="current-message"
                  type={"text"}
                  fullWidth
                  autoFocus
                  placeholder="Type a Message"
                  value={this.state.currentMessage}
                  onChange={this.onMessageChange}
                  // multiline
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="send message"
                        type="submit"
                        // onClick={handleClickShowPassword}
                      >
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </form>
          </Container>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(ChatWIndow);
