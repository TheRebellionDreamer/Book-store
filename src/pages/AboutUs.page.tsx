import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import image from "../img/book.png";
import React from "react";

const useStyle = makeStyles(theme => ({
  container: {
    marginTop: "5rem",
    animation: `$openEffect 2000ms ${theme.transitions.easing.easeInOut}`
  },
  "@keyframes openEffect": {
    "0%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  },
  paragraph: {
    marginTop: "3rem",
  },
  imageContainer: {
    marginTop: "4rem",
    height: "600px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  textContainer: {
    marginBottom: "3rem"
  }
}));

export const AboutUs: React.FC = (): JSX.Element => {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Container className={classes.textContainer}>
        <Typography variant="h2">The Booktown</Typography>
        <Typography variant="body1" className={classes.paragraph}>
          Since its fuse in 2005, 'The Booktown' has cut a specialty for itself
          in the youngsters’ books section of the distributing business. We have
          some expertise in books implied for offspring of various ages. The
          wide scope of books offered by us incorporates fantasies, moral
          stories, showed story books, reference books, general learning books,
          sentence structure books, shading books, action books, sticker books
          and some more. Every one of these books are accessible in both English
          and Hindi.
        </Typography>
        <Typography className={classes.paragraph}>
          Our point is to give significant, charming and also animating
          substance to youngsters that goes much past their normal course
          books.With this point in view, we treat each book as a work of
          adoration. Every one of our books are broadly examined, attentively
          composed and delightfully planned.
        </Typography>
        <Box className={classes.imageContainer}>
        </Box>
        <Typography className={classes.paragraph}>
          Development and experimentation are indispensable to our methodology
          towards books. Our broad gathering of books– picture books, sticker
          books, story and sticker books, 3D Books, spring up books, innovative
          idea books, curiosity books, topic based books, movement books, and so
          on – are a declaration to this methodology. This encourages us in
          making energizing and testing items for youngsters.
        </Typography>
        <Typography className={classes.paragraph}>
          We earnestly trust that books can be an extraordinary wellspring of
          motivation with the ability to impact and shape youthful
          personalities. Our books not simply go for building up the scholarly
          capacities of youngsters, rather they are made with the aim of
          contributing towards their all encompassing improvement.
        </Typography>
      </Container>
    </Container>
  );
};
