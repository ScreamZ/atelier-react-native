import React from "react";
import { View } from "react-native";
import AppNavigator from "./src/modules/navigation/AppNavigator";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/modules/ui/theme";

import "./src/modules/i18n";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
}
