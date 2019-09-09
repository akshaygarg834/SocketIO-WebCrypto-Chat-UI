import React from "react";

export default () => {
  const [isConnectionSuccessful, setConnectionStatus] = React.useState(false);
  const [socket, setSocket] = React.useState(null);
  return {
    isConnectionSuccessful,
    setConnectionStatus,
    socket,
    setSocket
  };
};
