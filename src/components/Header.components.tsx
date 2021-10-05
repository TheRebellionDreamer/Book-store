import {
  Box,
  Divider,
  Typography,
} from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";
interface HeaderProps {
  text: string,
  variant: Variant
}

export const Header: React.FC<HeaderProps> = ({text, variant}) => {

  return (
    <Box>
      <Typography style={{ margin: "5rem 0 0 0" }} variant={variant}>
        {text}
      </Typography>
      <Divider style={{ margin: "2rem 0 2rem 0" }} />
    </Box>
  );
};
