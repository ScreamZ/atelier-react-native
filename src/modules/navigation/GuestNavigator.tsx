import { createStackNavigator } from "react-navigation";
import { Screens } from "./types";
import { HomeScreen, LoginScreen } from "../../screens/guest";

export default createStackNavigator(
  {
    [Screens.GuestHome]: HomeScreen,
    [Screens.GuestLogin]: LoginScreen
  }
  // { headerMode: "none" } // TODO:
);
