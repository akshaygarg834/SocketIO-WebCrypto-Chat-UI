const EVENTS_CONSTANTS = {
  JOIN_ROOM: "JOIN_ROOM",
  CREATE_ROOM: "CREATE_ROOM",
  SNED_MESSAGE: "SNED_MESSAGE",
  ERROR: "ERROR"
};

const options = ["Create Group", "Join Group"];
export default {
  socketUrl: "https://em0fw.sse.codesandbox.io/",
  EVENTS_CONSTANTS,
  options
};
