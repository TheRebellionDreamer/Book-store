import React from "react";
import { NavBar } from "./components/NavBar";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {Catalogue} from "./components/Catalogue"

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
