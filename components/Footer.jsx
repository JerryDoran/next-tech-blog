import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    width: "100%",
    display: "grid",
    placeItems: "center",
    paddingBottom: "10px"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footerContainer}>
      <Typography variant="subtitle2" color="textSecondary">
        <p>Copyright 2021 Code Fusion</p>
      </Typography>
    </Box>
  );
};

export default Footer;
