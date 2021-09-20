import { Accordion, AccordionDetails, AccordionSummary, Container, Typography } from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyle = makeStyles({
  faq: {
    margin: "3rem 0 3rem 0",
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
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>1. Where to pick up your order?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>2. Can I get a refund?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Container>
  )
}