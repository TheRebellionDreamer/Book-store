import {
  Container,
  Typography,
  makeStyles,
  List,
  ListItem,
  IconButton,
} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import React from "react";

const useStyle = makeStyles({
  container: {
    marginTop: "5rem",
  },
});
export const Contacts: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Container>
        <Typography variant="h5">
          You are always welcome in our shop at 785 Laurel St, San Carlos, CA
          94070 from 10am to 7pm
        </Typography>
      </Container>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25325.71815666431!2d-122.26909170514188!3d37.491056755127225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x419e32f1dcfb8f37!2sThe%20Reading%20Bug!5e0!3m2!1sru!2sru!4v1631792675050!5m2!1sru!2sru"
          width="1280"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </Container>
      <Container>
        <Typography variant="h5">
          You can also contact us by email or phone
        </Typography>
        <List>
          <ListItem>
            <Typography>e-Mail: preudeubaubrouhe-4336@yopmail.com</Typography>
          </ListItem>
          <ListItem>
            <Typography>Phone: +1-264-434-8584</Typography>
            <IconButton size="medium">
              <PhoneIcon />
            </IconButton>
          </ListItem>
        </List>
      </Container>
    </Container>
  );
};
