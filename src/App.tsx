import { ThemeProvider } from "styled-components";

import SignUp from "@/pages/SignUp";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <SignUp />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
