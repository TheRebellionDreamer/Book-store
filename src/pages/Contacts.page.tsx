import {
  Container,
  Typography,
  makeStyles,
  Divider,
  Box,
  Tooltip,
  Zoom,
  Link,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { StyledAccordion } from "../custom/StyledAccordion.custom";
import { StyledAccordionDetails } from "../custom/StyledAccordionDetails";
import { StyledAccordionSummary } from "../custom/StyledAccordionSummary.custom";
import { StyledIconButton } from "../custom/StyledIconButton.custom";
import FacebookIcon from "@material-ui/icons/Facebook";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import { Faq } from "../components/Faq.component";

const useStyle = makeStyles((theme) => ({
  root: {
    margin: "5rem 0rem 5rem 0rem",
    animation: `$openEffect 2000ms ${theme.transitions.easing.easeInOut}`,
  },
  "@keyframes openEffect": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  header: {
    marginBottom: "3rem",
  },
  content: {
    marginTop: "3rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
  text: {
    maxWidth: "35rem",
    padding: "0rem 0rem 0rem 3rem",
    borderLeft: "1px solid rgba(0,0,0,.1)",
  },
  tooltipText: {
    fontSize: "2rem",
    whiteSpace: "nowrap",
  },
  iconCont: {
    margin: "2rem 0rem 2rem 0rem",
  },
  mapContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0rem 2rem 0rem 2rem",
  },
  map: {
    margin: "0rem 2rem 0rem 2rem",
  },
  mapText: {
    padding: "2rem 0rem 0rem 0rem",
  },
}));
export const Contacts: React.FC = (): JSX.Element => {
  const classes = useStyle();
  const [phoneTooltipOpen, setPhoneTooltipOpen] = useState<boolean>(false);
  const [emailTooltipOpen, setEmailTooltipOpen] = useState<boolean>(false);
  const [facebookTooltipOpen, setFacebookTooltipOpen] =
    useState<boolean>(false);

  const handleOpenPhone = () => {
    setPhoneTooltipOpen(true);
  };

  const handleClosePhone = () => {
    setPhoneTooltipOpen(false);
  };

  const handleOpenEmail = () => {
    setEmailTooltipOpen(true);
  };

  const handleCloseEmail = () => {
    setEmailTooltipOpen(false);
  };

  const handleCloseFacebook = () => {
    setFacebookTooltipOpen(false);
  };

  const handleOpenFacebook = () => {
    setFacebookTooltipOpen(true);
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        Contacts
      </Typography>
      <Divider />
      <Box className={classes.content}>
        <Box className={classes.iconContainer}>
          <Tooltip
            placement="right"
            TransitionComponent={Zoom}
            open={phoneTooltipOpen}
            onClose={handleClosePhone}
            onOpen={handleOpenPhone}
            title={
              <Typography className={classes.tooltipText}>
                +79307033812
              </Typography>
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
            onClose={handleCloseEmail}
            onOpen={handleOpenEmail}
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
            onClose={handleCloseFacebook}
            onOpen={handleOpenFacebook}
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
        <Box className={classes.mapContainer}>
          <StyledAccordion elevation={3}>
            <StyledAccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">We're on the map</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9501485846104!2d-122.43316008469435!3d37.767767079760745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1d93520f6f%3A0xfa5d2e61eafbe3cf!2sBooks%20%26%20Bookshelves!5e0!3m2!1sen!2sru!4v1632060081408!5m2!1sen!2sru"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="eager"
                className={classes.map}
                title="We are on map"
              ></iframe>
            </StyledAccordionDetails>
          </StyledAccordion>
          <Typography variant="h5" align="justify" className={classes.mapText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            asperiores vitae ducimus, repudiandae sapiente dignissimos fuga
            facere maiores ab consequatur, ut eos possimus obcaecati nam quasi
            eum fugiat! Ipsam, perferendis tempore facilis incidunt aliquid
            quisquam mollitia quasi numquam impedit, eos molestias, magni vero
            saepe. Perspiciatis quas recusandae qui dolorem blanditiis voluptas
            est impedit eaque debitis earum! Quas, dicta reiciendis totam cum
            molestiae pariatur deserunt reprehenderit voluptatem atque
            voluptatum consequuntur dolorem recusandae! Alias rem architecto
            recusandae excepturi? Non ullam, dolor officiis ea recusandae
            provident quis quam voluptate iusto ad aliquid eius possimus dicta
            alias corrupti fuga deleniti asperiores eveniet beatae. Dicta.
          </Typography>
        </Box>
        <Box className={classes.text}>
          <Typography variant="h5" align="justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
            accusantium eum magnam velit nobis iure rerum mollitia sunt expedita
            quos molestias ducimus illum, dolor reiciendis, amet, eos earum?
            Amet sequi consequatur minima iusto culpa accusantium ducimus nisi,
            recusandae doloribus quisquam esse debitis. Ab rerum laboriosam
            explicabo odit placeat expedita vel alias eligendi, excepturi
            incidunt asperiores aspernatur, aperiam tempore blanditiis mollitia,
            deleniti magni. Praesentium laborum non neque id. Itaque earum
            recusandae esse maxime pariatur consequuntur at. Magni cupiditate
            recusandae nostrum!
          </Typography>
        </Box>
      </Box>
      <Faq />
    </Container>
  );
};
