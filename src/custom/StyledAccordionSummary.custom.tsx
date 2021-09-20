import { AccordionSummary } from "@material-ui/core";
import { styled } from "@material-ui/styles";

export const StyledAccordionSummary = styled(AccordionSummary)({
  "&.MuiAccordionSummary-expandIcon": {
    transform: "rotate(90deg)",
    transition: "transform 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
  },
  "&.MuiAccordionSummary-expandIcon.Mui-expanded": {
    transform: "rotate(0deg)"
  }
})