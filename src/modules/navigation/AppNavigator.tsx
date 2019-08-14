import React from "react";
import { createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator } from "react-navigation";
import { Text } from "react-native";
import { useScreens } from "react-native-screens";
import { Screens } from "./types";
import GuestNavigator from "./GuestNavigator";

// https://reactnavigation.org/docs/en/react-native-screens.html#setup-when-you-are-using-expo
useScreens();

export default createAppContainer(
  createSwitchNavigator(
    {
      [Screens.GuestHome]: GuestNavigator
    },
    {
      initialRouteName: Screens.GuestHome
    }
  )
);
