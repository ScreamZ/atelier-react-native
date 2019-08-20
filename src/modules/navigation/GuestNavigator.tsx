import { createStackNavigator } from "react-navigation";
import HomeScreen from "../../screens/guest/Home";
import LoginScreen from "../../screens/guest/Login";
import { AppScreens } from "./types";

export default createStackNavigator({
  [AppScreens.GuestHome]: HomeScreen,
  [AppScreens.GuestLogin]: LoginScreen,
});
