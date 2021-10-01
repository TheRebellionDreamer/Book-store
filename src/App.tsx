import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar.component";
import { Catalogue } from "./pages/Catalogue.page";
import { Container, makeStyles, Paper } from "@material-ui/core";
import { AboutUs } from "./pages/AboutUs.page";
import { Contacts } from "./pages/Contacts.page";
import { SnackbarProvider } from "notistack";
import { Notifier } from "./components/Notifier.components";

const useStyle = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 0,
    padding: 0,
  },
  paper: {
    maxWidth: "80vw",
    margin: "0 auto",
  },
});

function App() {
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
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <SnackbarProvider autoHideDuration={2500} maxSnack={5}>
          <Notifier/>
          <Paper className={classes.paper} elevation={5}>
            <NavBar />
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
