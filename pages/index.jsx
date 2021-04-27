import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Box, Typography } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "100px",
    padding: "0 5rem",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  banner: {
    fontFamily: "Nunito",
    width: "80%",
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "4rem",
      textAlign: "center",
      width: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem"
    }
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="Jerry Doran's website" />
      </Head>
      <Container className={classes.container}>
        <Box>
          <Typography variant="h2" className={classes.banner}>
            The possibilities are endless...
          </Typography>
        </Box>
        <Box>
          <Image src="/hero.png" width={500} height={550} />
        </Box>
      </Container>
    </>
  );
}
