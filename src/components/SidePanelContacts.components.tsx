import React, { useState } from "react";
import { Box, Tooltip, Typography, Link, makeStyles, Zoom } from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { StyledIconButton } from "../custom/StyledIconButton.custom";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyle = makeStyles({
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRight: "1px solid rgba(0,0,0,.1)",
    paddingRight: "2rem",
  },
  icon: {
    fontSize: 45,
  },
  tooltipText: {
    fontSize: "2rem",
    whiteSpace: "nowrap",
  },
  iconCont: {
    margin: "2rem 0rem 2rem 0rem",
  },
});

export const SidePanelContacts: React.FC = (): JSX.Element => {
  const classes = useStyle();
  const [phoneTooltipOpen, setPhoneTooltipOpen] = useState<boolean>(false);
  const [emailTooltipOpen, setEmailTooltipOpen] = useState<boolean>(false);
  const [facebookTooltipOpen, setFacebookTooltipOpen] =
    useState<boolean>(false);
  return (
    <Box className={classes.iconContainer}>
      <Tooltip
        placement="right"
        TransitionComponent={Zoom}
        open={phoneTooltipOpen}
        onClose={() => setPhoneTooltipOpen(false)}
        onOpen={() => setPhoneTooltipOpen(true)}
        title={
          <Typography className={classes.tooltipText}>+79307033812</Typography>
        }
        enterDelay={500}
        leaveDelay={200}
      >
        <Link href="tel:+79307033812">
          <StyledIconButton size="medium">
            <PhoneIcon className={classes.icon} />
          </StyledIconButton>
        </Link>
      </Tooltip>
      <Tooltip
        className={classes.iconCont}
        placement="right"
        TransitionComponent={Zoom}
        open={emailTooltipOpen}
        onClose={() => setEmailTooltipOpen(false)}
        onOpen={() => setEmailTooltipOpen(true)}
        title={
          <Typography className={classes.tooltipText}>
            rebelliondreamer@gmail.com
          </Typography>
        }
        enterDelay={500}
        leaveDelay={200}
      >
        <Link href="mailto:rebelliondreamer@gmail.com">
          <StyledIconButton size="medium">
            <EmailIcon className={classes.icon} />
          </StyledIconButton>
        </Link>
      </Tooltip>
      <Tooltip
        className={classes.iconCont}
        placement="right"
        TransitionComponent={Zoom}
        open={facebookTooltipOpen}
        onClose={() => setFacebookTooltipOpen(false)}
        onOpen={() => setFacebookTooltipOpen(true)}
        title={
          <Typography className={classes.tooltipText}>
            www.facebook.com
          </Typography>
        }
        enterDelay={500}
        leaveDelay={200}
      >
        <Link href="https://www.facebook.com/" target="_blank">
          <StyledIconButton>
            <FacebookIcon className={classes.icon} />
          </StyledIconButton>
        </Link>
      </Tooltip>
    </Box>
  );
};
