import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    fontFamily: "Nunito"
  },
  logo: {
    fontFamily: "Nunito",
    color: "#333",
    fontWeight: "bold"
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h5">
          <Link href="/">
            <a className={classes.logo}>My Website</a>
          </Link>
          <Link href="/">
            <a className={classes.logo}>Home</a>
          </Link>
          <Link href="/blog">
            <a className={classes.logo}>Blog</a>
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
