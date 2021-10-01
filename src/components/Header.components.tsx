import {
  Box,
  Divider,
  Typography,
} from "@material-ui/core";
interface HeaderProps {
  text: string
}
export const Header: React.FC<HeaderProps> = ({text}) => {

  return (
    <Box>
      <Typography style={{ margin: "5rem 0 0 0" }} variant="h2">
        {text}
      </Typography>
      <Divider style={{ margin: "2rem 0 2rem 0" }} />
    </Box>
  );
};
