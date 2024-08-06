import { ThemeProvider } from "styled-components";
import { AuthProvider } from "@/hooks/auth";

import Router from "@/routes";

import GlobalStyles from "@/styles/global";
import theme from "@/styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
      <Router />
    </AuthProvider>
  </ThemeProvider>
);

export default App;
