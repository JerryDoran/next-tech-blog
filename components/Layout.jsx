import Navbar from "./Navbar";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // use for creating sticky footer
  layoutContainer: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column"
  },
  content: {
    flex: 1
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.layoutContainer}>
      <Navbar />
      <Box className={classes.content}>{children}</Box>
      <Footer />
    </div>
  );
};

export default Layout;
