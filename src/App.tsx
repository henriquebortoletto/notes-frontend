import { ThemeProvider } from "styled-components";
import { SessionProvider } from "@/hooks/session";

import Router from "@/routes";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <SessionProvider>
      <Router />
    </SessionProvider>
  </ThemeProvider>
);

export default App;
