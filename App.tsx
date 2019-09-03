import React from "react";
import { ThemeProvider } from "styled-components";
import AppNavigator from "./src/modules/navigation/AppNavigator";
import { theme } from "./src/modules/ui/theme";

import "./src/modules/i18n";

export default class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    );
  }
}
