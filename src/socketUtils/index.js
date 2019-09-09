import configuration from "app-config";
import io from "socket.io-client";

const EVENTS_CONSTANTS = configuration.EVENTS_CONSTANTS;

const createConnection = () => {
  const socket = io(configuration.socketUrl);
  socket.on("connect", (...rest) => console.info({ connect: rest }));
  socket.on("connect_error", (...rest) =>
    console.info({ connect_error: rest })
  );
  socket.on("connect_timeout", (...rest) =>
    console.info({ connect_timeout: rest })
  );
  socket.on("disconnect", (...rest) => console.info({ disconnect: rest }));
  socket.on("error", (...rest) => console.info({ error: rest }));
  socket.on("reconnect", (...rest) => console.info({ reconnect: rest }));
  socket.on("reconnect_attempt", (...rest) =>
    console.info({ reconnect_attempt: rest })
  );
  socket.on("reconnecting", (...rest) => console.info({ reconnecting: rest }));
  socket.on("reconnect_error", (...rest) =>
    console.info({ reconnect_error: rest })
  );
  socket.on("reconnect_failed", (...rest) =>
    console.info({ reconnect_failed: rest })
  );
  socket.on("ping", (...rest) => console.info({ ping: rest }));
  socket.on("pong", (...rest) => console.info({ pong: rest }));
  socket.on("message", (...rest) => console.info({ message: rest }));
  socket.on(EVENTS_CONSTANTS.ERROR, (...rest) =>
    console.error({ [EVENTS_CONSTANTS.ERROR]: rest })
  );
  return socket;
};

const createGroup = (socket, groupName) => {
  socket.emit(EVENTS_CONSTANTS.CREATE_ROOM, { room: groupName });
};

const joinGroup = (socket, groupName) => {
  socket.emit(EVENTS_CONSTANTS.JOIN_ROOM, { room: groupName });
};

const sendMessage = (socket, message, room) => {
  socket.emit(EVENTS_CONSTANTS.SNED_MESSAGE, { room, message });
};

export default {
  createConnection,
  joinGroup,
  createGroup,
  sendMessage
};
