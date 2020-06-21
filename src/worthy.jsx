import React from "react";
import Typography from "@material-ui/core/Typography";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Typography variant="h1" component="h2">
        {"You don't deserve this."}{" "}
        <span role="img" aria-label="middle-finger">
          &#128405;
        </span>
      </Typography>
    </React.Fragment>
  );
}
