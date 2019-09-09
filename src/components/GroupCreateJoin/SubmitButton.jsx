import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import configuration from "app-config";

const useStyles = makeStyles(theme => ({
  submitButton: {
    marginTop: theme.spacing(3)
  }
}));

const options = configuration.options;

export default function SubmitButton(props) {
  const classes = useStyles();
  const anchorRef = React.useRef(null);
  const { open, setOpen, selectedIndex, setSelectedIndex } = props;

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = event => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <Grid className={classes.submitButton} container>
      <Grid item xs={12} align="center">
        <ButtonGroup
          variant="outlined"
          color="primary"
          ref={anchorRef}
          type="button"
          aria-label="split button"
        >
          <Button fullWidth onClick={props.handleClick}>
            {options[selectedIndex]}
          </Button>
          <Button
            color="primary"
            size="small"
            aria-owns={open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            type="button"
            name="dropDown"
          >
            <ArrowDropDownIcon />
          </Button>
        </ButtonGroup>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === 2}
                        selected={index === selectedIndex}
                        onClick={event => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}
