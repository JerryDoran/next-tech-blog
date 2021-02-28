import { getAllBlogPosts, getSingleBlogPost } from "../../contentful.config";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box, Container, CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  blogsContainer: {
    paddingTop: theme.spacing(3),
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  blogTitle: {
    marginTop: "30px",
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
  }
}));

const Post = ({ post }) => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Container className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          {post.title}
        </Typography>
        <CardMedia className={classes.media} image={post.image.fields.file.url} title={post.title} />
        <Typography
          variant="body1"
          component="span"
          className={classes.postBody}
        >
          {documentToReactComponents(post.content)}

          <br />
        </Typography>
      </Container>

      <br />
      <br />
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const posts = await getAllBlogPosts();
  const paths = posts.map(({ slug }) => ({ params: { slug } })) ?? [];

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const post = await getSingleBlogPost(slug);

  return {
    props: {
      post
    }
  };
};
