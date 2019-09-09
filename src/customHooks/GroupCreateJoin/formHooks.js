import React from "react";

export default () => {
  const [password, setPassword] = React.useState("");
  const [groupName, setGroupName] = React.useState("");
  const [name, setName] = React.useState("");

  return {
    password,
    setPassword,
    groupName,
    setGroupName,
    name,
    setName
  };
};
