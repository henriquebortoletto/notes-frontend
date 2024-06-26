import { ThemeProvider } from "styled-components";

import Home from "@/pages/Home";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
