import { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Drawer,
  ListItemIcon
} from "@material-ui/core";
import menuItems from "./menuItems";

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
    borderBottom: "1px solid #ddd"
  },
  tool: {
    display: "flex",
    justifyContent: "space-between"
  },
  toolbar: theme.mixins.toolbar,
  menuButton: {
    color: "#000",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  logo: {
    fontFamily: "Nunito",
    color: "#333",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px"
    }
  },
  links: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "20px",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  link: {
    fontFamily: "Nunito",
    color: "#333",
    marginRight: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px"
    }
  },
  sideLink: {
    fontFamily: "Nunito",
    color: "#333",
    marginLeft: "-20px"
  },

  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "flex-start"
  }
}));

const Navbar = (props) => {
  const { window } = props;
  const classes = useStyles();
  const [mobileOpen, setMobilOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobilOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        {menuItems.map((item) => {
          return (
            <ListItem button key={item.title}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Typography>
                <Link href={item.url}>
                  <a className={classes.sideLink} onClick={handleDrawerToggle}>
                    {item.title}
                  </a>
                </Link>
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container>
      <AppBar elevation={0} position="static" className={classes.appBar}>
        <Toolbar className={classes.tool}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">
            <Link href="/">
              <a className={classes.logo}>Code Fusion</a>
            </Link>
          </Typography>
          <div className={classes.links}>
            {menuItems.map((item, index) => {
              return (
                <Typography key={index}>
                  <Link href={item.url}>
                    <a className={classes.link}>{item.title}</a>
                  </Link>
                </Typography>
              );
            })}
          </div>
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
