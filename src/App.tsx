import { ThemeProvider } from "styled-components";

import Create from "@/pages/Create";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Create />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
