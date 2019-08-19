import { createAppContainer, createSwitchNavigator, createMaterialTopTabNavigator } from "react-navigation";
import { useScreens } from "react-native-screens";
import { AppScreens } from "./types";

import GuestNavigator from "./GuestNavigator";
import GroupNavigator from "./GroupNavigator";

import InitializationScreen from "../../screens/Initialization";

// https://reactnavigation.org/docs/en/react-native-screens.html#setup-when-you-are-using-expo
useScreens();

export default createAppContainer(
  createSwitchNavigator(
    {
      Init: InitializationScreen,
      [AppScreens.GuestHome]: GuestNavigator,
      [AppScreens.GroupHome]: GroupNavigator
    },
    {
      initialRouteName: "Init"
    }
  )
);
