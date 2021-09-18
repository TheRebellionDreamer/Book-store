import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar.component";
import { Catalogue } from "./pages/Catalogue.page";
import { Container, makeStyles } from "@material-ui/core";
import { AboutUs } from "./pages/AboutUs.page";
import { Contacts } from "./pages/Contacts.page";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand, sans-serif",
  },
  palette: {
    primary: {
      main: "#4527a0",
      dark: "#000070",
      light: "#7953d2",
    },
    secondary: {
      main: "#fdd835",
      dark: "#c6a700",
      light: "#ffff6b",
    },
  },
});

const useStyle = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}) 

function App() {
  const classes = useStyle()
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Container className={classes.root}>
          <Switch>
            <Route component={Catalogue} path="/catalogue" />
            <Route component={Contacts} path="/contacts" />
            <Route component={AboutUs} path="/" />
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
