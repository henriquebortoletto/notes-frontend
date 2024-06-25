import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";

import Home from "@/pages/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
