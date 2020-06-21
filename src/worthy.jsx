import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Typography variant="h1" component="h2">
          {" "}
          You don't deserve this.{" "}
        </Typography>
      </Container>
    </React.Fragment>
  );
}
