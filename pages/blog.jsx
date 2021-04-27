import Link from "next/link";
import dayjs from "dayjs";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Button
} from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import Pagination from "@material-ui/lab/Pagination";
import { getAllBlogPosts } from "../contentful.config";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Truncate from "react-truncate";

const useStyles = makeStyles((theme) => ({
  hero: {
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
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    fontFamily: "Nunito"
  },
  postTitle: {
    fontFamily: "Nunito"
  },
  postAuthor: {
    fontFamily: "Nunito"
  },
  postDate: {
    fontFamily: "Nunito"
  },
  postBody: {
    fontFamily: "Nunito"
  },
  card: {
    maxWidth: "100%",
    height: "100%"
  },
  readMore: {
    fontFamily: "Nunito"
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  },
  readMore: {
    textTransform: "lowercase",
    marginLeft: "10px",
    opacity: 0.7
  }
}));

export default function Blog({ posts }) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>My Blogs | Home</title>
        <meta name="keywords" content="blogs" />
      </Head>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Box className={classes.hero}>
          <Box>My Tech Blog</Box>
        </Box>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          {posts.map((post) => {
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
            } = post;
            const myDate = dayjs(date).format("M/D/YYYY");

            return (
              <Grid item xs={12} sm={6} md={4} key={slug}>
                <Card className={classes.card}>
                  <Link href={`/posts/${slug}`}>
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
                          className={classes.postTitle}
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="span"
                          className={classes.postBody}
                        >
                          <Truncate lines={1} width={2000} ellipsis="&hellip;">
                            {documentToReactComponents(content)}
                          </Truncate>
                          <br />
                        </Typography>
                        {/* <Typography
                          style={{ fontWeight: 300 }}
                          variant="subtitle2"
                          component="span"
                          className={classes.readMore}
                        >
                          read more
                        </Typography> */}
                      </CardContent>
                      <Button className={classes.readMore}>read more...</Button>
                    </CardActionArea>
                  </Link>

                  <CardActions className={classes.cardActions}>
                    <Box className={classes.author}>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          className={classes.postAuthor}
                        >
                          {author}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="textSecondary"
                          className={classes.postDate}
                        >
                          {myDate}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <BookmarkBorderIcon />
                    </Box>
                  </CardActions>
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
  const posts = await getAllBlogPosts();
  console.log(posts);

  return {
    props: {
      posts
    }
  };
};
