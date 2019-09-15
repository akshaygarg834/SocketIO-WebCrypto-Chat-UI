const EVENTS_CONSTANTS = {
  JOIN_ROOM: "JOIN_ROOM",
  CREATE_ROOM: "CREATE_ROOM",
  SNED_MESSAGE: "SNED_MESSAGE",
  ERROR: "ERROR"
};

const options = ["Create Group", "Join Group"];

let SOCKET_URL = "https://socket-io-chat-backend.herokuapp.com/";
window.SOCKET_URL = SOCKET_URL;
export default {
  socketUrl: window.SOCKET_URL,
  EVENTS_CONSTANTS,
  options
};
