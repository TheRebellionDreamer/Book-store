import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar.component";
import { Catalogue } from "./pages/Catalogue.page";
import { Button, Container, makeStyles, Paper } from "@material-ui/core";
import { AboutUs } from "./pages/AboutUs.page";
import { Contacts } from "./pages/Contacts.page";
import { SnackbarProvider } from "notistack";
import { Notifier } from "./components/Notifier";

const useStyle = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    padding: 0,
  },
  paper: {
    margin: 0,
    padding: 0,
  },
});

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const switchTheme = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDarkMode((prev) => !prev);
  };

  const darkTheme = createTheme({
    typography: {
      fontFamily: "Quicksand, sans-serif",
    },
    palette: {
      type: "dark",
      primary: {
        main: "#595959",
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

  const lightTheme = createTheme({
    typography: {
      fontFamily: "Quicksand, sans-serif",
    },
    palette: {
      type: "light",
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
  const classes = useStyle();
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <SnackbarProvider autoHideDuration={2500} maxSnack={5}>
          <Notifier/>
          <Paper className={classes.paper} elevation={0}>
            <NavBar darkMode={darkMode} switchTheme={switchTheme} />
            <Container className={classes.root} maxWidth="lg">
              <Switch>
                <Route component={Catalogue} path="/catalogue" />
                <Route component={Contacts} path="/contacts" />
                <Route component={AboutUs} path="/" />
              </Switch>
            </Container>
          </Paper>
        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
