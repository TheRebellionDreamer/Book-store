import React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar.component";
import { Catalogue } from "./pages/Catalogue.page";
import { Baggage } from "./pages/Baggage.page";
import { Container, makeStyles } from "@material-ui/core";
import { AboutUs } from "./pages/AboutUs.page";

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
  container: {
    background: "rgba(0,0,0,.03)",
    paddingBottom: "5rem",
  }
})

function App() {
  const classes = useStyle()
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Container className={classes.container}>
            <Route component={Catalogue} path="/catalogue" />
            <Route component={Baggage} path="/baggage" />
            <Route component={AboutUs} path="/about-us"/>
          </Container>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
