import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { styled, ThemeProvider,  } from "@material-ui/styles";
import {theme} from "../App"

export const StyledAccordion = styled(Accordion)({

  "&.Mui-expanded": {
    margin: "1rem 0 1rem 0"
  },
  
})