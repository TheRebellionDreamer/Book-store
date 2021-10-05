import { StyledAccordion } from "../custom/StyledAccordion.custom";
import { StyledAccordionDetails } from "../custom/StyledAccordionDetails";
import { StyledAccordionSummary } from "../custom/StyledAccordionSummary.custom";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
  mapContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "0rem 2rem 0rem 2rem",
  },
  map: {
    margin: "0rem 2rem 0rem 2rem",
  },
  mapText: {
    padding: "2rem 0rem 0rem 0rem",
  },
})
export const Map: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <Box className={classes.mapContainer}>
          <StyledAccordion elevation={3}>
            <StyledAccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">We're on the map</Typography>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9501485846104!2d-122.43316008469435!3d37.767767079760745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e1d93520f6f%3A0xfa5d2e61eafbe3cf!2sBooks%20%26%20Bookshelves!5e0!3m2!1sen!2sru!4v1632060081408!5m2!1sen!2sru"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="eager"
                className={classes.map}
                title="We are on map"
              ></iframe>
            </StyledAccordionDetails>
          </StyledAccordion>
          <Typography variant="h5" align="justify" className={classes.mapText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            asperiores vitae ducimus, repudiandae sapiente dignissimos fuga
            facere maiores ab consequatur, ut eos possimus obcaecati nam quasi
            eum fugiat! Ipsam, perferendis tempore facilis incidunt aliquid
            quisquam mollitia quasi numquam impedit, eos molestias, magni vero
            saepe. Perspiciatis quas recusandae qui dolorem blanditiis voluptas
            est impedit eaque debitis earum! Quas, dicta reiciendis totam cum
            molestiae pariatur deserunt reprehenderit voluptatem atque
            voluptatum consequuntur dolorem recusandae! Alias rem architecto
            recusandae excepturi? Non ullam, dolor officiis ea recusandae
            provident quis quam voluptate iusto ad aliquid eius possimus dicta
            alias corrupti fuga deleniti asperiores eveniet beatae. Dicta.
          </Typography>
        </Box>
  )
} 