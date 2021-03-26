import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    width: "100%",
    alignItems: "center",
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <Box display="flex" justifyContent="center">
        <Typography variant="subtitle2" color="textSecondary">
          <p>Copyright 2021 Code Fusion</p>
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
