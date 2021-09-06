import React from "react";
import { NavBar } from "./components/NavBar.component";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {Catalogue} from "./pages/Catalogue.page"

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Catalogue />
    </ThemeProvider>
  );
}

export default App;
