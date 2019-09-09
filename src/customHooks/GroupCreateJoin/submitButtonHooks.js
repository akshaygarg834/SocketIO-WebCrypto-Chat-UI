import React from "react";

export default () => {
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return {
    open,
    setOpen,
    selectedIndex,
    setSelectedIndex
  };
};
