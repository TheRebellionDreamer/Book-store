import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";
import {StyledAccordion} from "../custom/StyledAccordion.custom"
import {StyledAccordionDetails} from "../custom/StyledAccordionDetails"
import {StyledAccordionSummary} from "../custom/StyledAccordionSummary.custom"
import React from "react";

const useStyle = makeStyles({
  faq: {
    margin: "3rem 0 3rem 0",
    fontWeight: 600
  },
})

export const Faq: React.FC = (): JSX.Element => {
  const classes = useStyle()
  return (
    <Container>
        <Typography align="center" className={classes.faq} variant="h4">
          FAQ
        </Typography>
        <Container>
          <StyledAccordion elevation={3}>
            <StyledAccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">1. Where to pick up your order?</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </StyledAccordionDetails>
          </StyledAccordion>
          <StyledAccordion elevation={3}>
            <StyledAccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">2. Can I get a refund?</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </StyledAccordionDetails>
          </StyledAccordion>
        </Container>
      </Container>
  )
}