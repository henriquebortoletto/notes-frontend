import { ThemeProvider } from "styled-components";

import SignIn from "@/pages/SignIn";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <SignIn />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
