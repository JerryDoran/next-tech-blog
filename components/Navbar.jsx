import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between"
  },
  logo: {
    fontFamily: "Nunito",
    color: "#333",
    fontWeight: "bold"
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "20px"
  },
  link: {
    fontFamily: "Nunito",
    color: "#333",
    marginRight: "20px"
  }
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Typography variant="h5">
          <Link href="/">
            <a className={classes.logo}>Code Fusion</a>
          </Link>
        </Typography>
        <div className={classes.links}>
          <Typography>
            <Link href="/">
              <a className={classes.link}>Home</a>
            </Link>
          </Typography>
          <Typography>
            <Link href="/about">
              <a className={classes.link}>About</a>
            </Link>
          </Typography>
          <Typography>
            <Link href="/blog">
              <a className={classes.link}>Blog</a>
            </Link>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
