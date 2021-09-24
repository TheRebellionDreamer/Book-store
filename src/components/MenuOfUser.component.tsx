import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import AdbIcon from "@material-ui/icons/Adb";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IMenuOfUserProps } from "../interfaces";

const useStyles = makeStyles({
  button: {
    color: "white",
    textDecoration: "none",
  },
});

export const MenuOfUser: React.FC<IMenuOfUserProps> = ({
  handleClickSignOut,
}): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const classes = useStyles();

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
      >
        <AdbIcon className={classes.button} />
      </IconButton>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
          <ListItemText primary="My orders" />
        </MenuItem>
        <MenuItem onClick={handleClickSignOut}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Exit" />
        </MenuItem>
      </Menu>
    </>
  );
};
