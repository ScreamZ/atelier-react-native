import { useScreens as bootstrapReactNativeScreen } from "react-native-screens";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppScreens } from "./types";

import GroupNavigator from "./GroupNavigator";
import GuestNavigator from "./GuestNavigator";

import InitializationScreen from "../../screens/Initialization";

// https://reactnavigation.org/docs/en/react-native-screens.html#setup-when-you-are-using-expo
bootstrapReactNativeScreen();

export default createAppContainer(
  createSwitchNavigator(
    {
      Init: InitializationScreen,
      [AppScreens.GuestHome]: GuestNavigator,
      [AppScreens.GroupHome]: GroupNavigator,
    },
    {
      initialRouteName: "Init",
    },
  ),
);
