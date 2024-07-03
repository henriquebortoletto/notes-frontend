import { ThemeProvider } from "styled-components";

import Profile from "@/pages/Profile";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Profile />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
