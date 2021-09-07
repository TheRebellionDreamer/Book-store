import { Container, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  container: {
    marginTop: "5rem"
  },
})
export const Contacts: React.FC = (): JSX.Element => {
  const classes = useStyle()
  return (
    <Container className={classes.container}>
      <Container>
        <Typography>
          You are always welcome in our shop at 36658 Raheem Garden
          Laurettafort, TX 50236 from 10am to 7pm
        </Typography>
        <Typography>You can also contact us by email or phone</Typography>
        <Container>
          <Typography>e-Mail: preudeubaubrouhe-4336@yopmail.com</Typography>
          <Typography>Phone: +1-264-434-8584</Typography>
        </Container>
      </Container>
    </Container>
  );
};
