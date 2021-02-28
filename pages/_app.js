import "../styles/globals.css";
import theme from "../theme";
import { ThemeProvider } from "@material-ui/core/styles";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
