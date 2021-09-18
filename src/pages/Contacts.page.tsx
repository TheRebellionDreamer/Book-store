import {
  Container,
  Typography,
  makeStyles,
  IconButton,
  Divider,
  Box,
  Tooltip,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import React, { useState } from "react";

const useStyle = makeStyles({
  root: {
    margin: "5rem 0rem 5rem 0rem",
  },
  header: {
    marginBottom: "3rem",
  },
  content: {
    marginTop: "3rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    display: "flex",
    paddin: 0,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  icon: {
    fontSize: 45,
  },
  text: {
    maxWidth: "35rem",
  },
});
export const Contacts: React.FC = (): JSX.Element => {
  const classes = useStyle();
  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setTooltipOpen(true);
  };

  const handleClose = () => {
    setTooltipOpen(false);
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h2" className={classes.header}>
        Contacts
      </Typography>
      <Divider />
      <Box className={classes.content}>
        <Box className={classes.iconContainer}>
          <Tooltip
            open={tooltipOpen}
            onClose={handleClose}
            onOpen={handleOpen}
            title="test"
            enterDelay={500}
            leaveDelay={200}
          >
            <IconButton size="medium">
              <PhoneIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
        </Box>
        <Divider orientation="vertical" />
        <Box className={classes.text}>
          <Typography variant="h5" align="right">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
            accusantium eum magnam velit nobis iure rerum mollitia sunt expedita
            quos molestias ducimus illum, dolor reiciendis, amet, eos earum?
            Amet sequi consequatur minima iusto culpa accusantium ducimus nisi,
            recusandae doloribus quisquam esse debitis. Ab rerum laboriosam
            explicabo odit placeat expedita vel alias eligendi, excepturi
            incidunt asperiores aspernatur, aperiam tempore blanditiis mollitia,
            deleniti magni. Praesentium laborum non neque id. Itaque earum
            recusandae esse maxime pariatur consequuntur at. Magni cupiditate
            recusandae nostrum! Et suscipit commodi, cumque repudiandae ducimus
            ad magni mollitia porro harum dolor. Ipsam consectetur a possimus
            eos provident. Adipisci dolor rem labore debitis excepturi omnis
            nesciunt dolorem, aliquid eius est fugit accusantium architecto
            tempora laudantium temporibus saepe possimus tenetur velit nam!
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
