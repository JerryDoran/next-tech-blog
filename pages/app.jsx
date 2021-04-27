import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import Image from "next/image";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3)
  },
  title: {
    backgroundImage: `linear-gradient(rgba(0,0,0, .5), rgba(0,0,0, .5)), url('https://images.unsplash.com/photo-1489619243109-4e0ea59cfe10?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fG5hdHVyZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')`,
    height: "200px",
    marginBottom: "40px",
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
  }
  // title: {
  //   fontFamily: "Nunito"
  // }
}));

export default function App() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.title}>My Apps</Box>
        <Grid container spacing={3}>
          {/* {posts.map((post) => {
            const {
              title,
              slug,
              author,
              content,
              date,
              image: {
                fields: {
                  file: { url }
                }
              }
            } = post; */}
          {/* return ( */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              {/* <Link> */}
              <CardActionArea>
                <CardMedia className={classes.media} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    className={classes.postTitle}
                  ></Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="span"
                    className={classes.postBody}
                  ></Typography>
                  <Typography
                    style={{ fontWeight: 300 }}
                    variant="subtitle2"
                    component="span"
                    className={classes.readMore}
                  ></Typography>
                </CardContent>
              </CardActionArea>
              {/* </Link> */}

              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Box ml={2}>
                    <Typography
                      variant="subtitle2"
                      className={classes.postAuthor}
                    ></Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      className={classes.postDate}
                    ></Typography>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Grid>
          {/* ); })} */}
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </>
  );
}
