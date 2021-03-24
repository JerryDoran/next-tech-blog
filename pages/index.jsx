import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="Jerry Doran's website" />
      </Head>
      <Navbar />
    </>
  );
}
