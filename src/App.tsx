import { ThemeProvider } from "styled-components";

import Router from "@/routes";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Router />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
