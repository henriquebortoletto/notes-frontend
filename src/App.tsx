import { ThemeProvider } from "styled-components";

import Detail from "@/pages/Detail";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Detail />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
