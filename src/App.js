import React from "react";

import GroupCreateJoin from "./components/GroupCreateJoin";
import ChatWIndow from "components/ChatWIndow";

import submitButtonHooks from "customHooks/GroupCreateJoin/submitButtonHooks";
import formHooks from "customHooks/GroupCreateJoin/formHooks";
import connnectionHooks from "customHooks/GroupCreateJoin/main";

import socketUtils from "socketUtils";

export default props => {
  const {
    open,
    setOpen,
    selectedIndex,
    setSelectedIndex
  } = submitButtonHooks();

  const {
    password,
    setPassword,
    groupName,
    setGroupName,
    name,
    setName
  } = formHooks();

  const {
    isConnectionSuccessful,
    setConnectionStatus,
    socket,
    setSocket
  } = connnectionHooks();

  function createOrJoinRoom(event) {
    event.preventDefault();
    event.stopPropagation();
    const socket = socketUtils.createConnection();
    setSocket(socket);
    !selectedIndex
      ? socketUtils.createGroup(socket, groupName)
      : socketUtils.joinGroup(socket, groupName);
    socket.on("success", (...rest) => setConnectionStatus(true));
  }

  return !isConnectionSuccessful ? (
    <GroupCreateJoin
      open={open}
      setOpen={setOpen}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      password={password}
      setPassword={setPassword}
      groupName={groupName}
      setGroupName={setGroupName}
      name={name}
      setName={setName}
      isConnectionSuccessful={isConnectionSuccessful}
      setConnectionStatus={setConnectionStatus}
      handleClick={createOrJoinRoom}
    />
  ) : (
    <ChatWIndow
      socket={socket}
      setConnectionStatus={setConnectionStatus}
      room={groupName}
      whoami={name}
    />
  );
};
