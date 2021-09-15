import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import AdbIcon from "@material-ui/icons/Adb";
import AssignmentIcon from "@material-ui/icons/Assignment";
// import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import { ListItemIcon, ListItemText } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

// const StyledMenu = withStyles({
//   paper: {
//     border: "1px solid #d3d4d5",
//   },
// })((props: MenuProps) => (
//   <Menu
//     elevation={0}
//     getContentAnchorEl={null}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "left",
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "left",
//     }}
//     {...props}
//   />
// ));

// const StyledMenuItem = withStyles((theme) => ({
//   root: {
//     "&:focus": {
//       backgroundColor: theme.palette.primary.main,
//       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
//         color: theme.palette.common.white,
//       },
//     },
//   },
// }))(MenuItem);

const useStyles = makeStyles({
  button: {
    color: "white",
    textDecoration: "none",
  },
});

interface IMenuOfUserProps {
  handleClickSignOut(): void;
}

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
