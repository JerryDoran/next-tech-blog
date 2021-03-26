import "../styles/globals.css";
import theme from "../theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
