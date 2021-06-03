import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { getAllApps } from "../contentful.config";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0, .5), rgba(0,0,0, .5)), url('https://images.unsplash.com/photo-1489619243109-4e0ea59cfe10?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
    height: "200px",
    marginBottom: "50px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 100,
      fontSize: "3em"
    },
    [theme.breakpoints.down("xs")]: {
      height: 80,
      fontSize: "2em"
    }
  },
  container: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    fontFamily: "Nunito"
  },
  appTitle: {
    fontFamily: "Nunito"
  },
  appBody: {
    fontFamily: "Nunito"
  },
  card: {
    maxWidth: "100%",
    height: "100%"
  },
  media: {
    height: 240,
    objectFit: "cover"
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },

  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

export default function App({ apps }) {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.hero}>
          <Box>My Apps</Box>
        </Box>
        <Grid container spacing={3}>
          {apps.map((app) => {
            const {
              title,
              slug,
              image: {
                fields: {
                  file: { url }
                }
              },
              content,
              link
            } = app;
            return (
              <Grid item xs={12} sm={6} md={4} key={slug}>
                <Card className={classes.card}>
                  <a target="_blank" rel="noreferrer" href={link}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={url}
                        title={title}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="h2"
                          className={classes.appTitle}
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="textSecondary"
                          component="span"
                          className={classes.appBody}
                        >
                          {content}
                          <br />
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </a>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const apps = await getAllApps();
  console.log(apps);

  return {
    props: {
      apps
    }
  };
};
