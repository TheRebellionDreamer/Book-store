import { Container, Typography, makeStyles, Box } from "@material-ui/core";
import React from "react";
import { Faq } from "../components/Faq.component";
import { Header } from "../components/Header.components";
import { SidePanelContacts } from "../components/SidePanelContacts.components";
import { Map } from "../components/Map.components";

const useStyle = makeStyles((theme) => ({
  root: {
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
  content: {
    marginTop: "3rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    maxWidth: "35rem",
    padding: "0rem 0rem 0rem 3rem",
    borderLeft: "1px solid rgba(0,0,0,.1)",
  },
}));
export const Contacts: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <Container className={classes.root}>
      <Header text={"Contacts"} variant="h3" />
      <Box className={classes.content}>
        <SidePanelContacts />
        <Map />
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
