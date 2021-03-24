import { getAllBlogPosts, getSingleBlogPost } from "../../contentful.config";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Container, CardMedia } from "@material-ui/core";
import dayjs from "dayjs";

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
  postAuthor: {
    fontFamily: "Nunito"
  },
  postDate: {
    fontFamily: "Nunito",
    marginBottom: "30px"
  },
  postBody: {
    fontFamily: "Nunito"
  },
  media: {
    height: 240,
    marginBottom: "30px"
  },
  home: {
    cursor: "pointer",
    textAlign: "center",
    fontFamily: "Nunito"
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
        <CardMedia
          className={classes.media}
          image={post.image.fields.file.url}
          title={post.title}
        />
        <Typography variant="subtitle1" className={classes.postAuthor}>
          {post.author}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          className={classes.postDate}
        >
          {dayjs(post.publishedDate).format("MMMM D, YYYY")}
        </Typography>
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
      <Link href="/blog" className={classes.home}>
        <Typography variant="body2" className={classes.home}>
          All blogs
        </Typography>
      </Link>
      <br />
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
