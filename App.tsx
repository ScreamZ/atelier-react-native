import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import AppNavigator from "./src/modules/navigation/AppNavigator";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.statusBar} />
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: Constants.statusBarHeight // TODO: Move this to specific screen where we wants not a full screen
  }
});
