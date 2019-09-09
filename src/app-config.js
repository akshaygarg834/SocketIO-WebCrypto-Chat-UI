const EVENTS_CONSTANTS = {
  JOIN_ROOM: "JOIN_ROOM",
  CREATE_ROOM: "CREATE_ROOM",
  SNED_MESSAGE: "SNED_MESSAGE",
  ERROR: "ERROR"
};

const options = ["Create Group", "Join Group"];
export default {
  socketUrl: "http://localhost:5000",
  EVENTS_CONSTANTS,
  options
};
