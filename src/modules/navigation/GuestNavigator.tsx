import { createStackNavigator } from "react-navigation";
import { AppScreens } from "./types";
import HomeScreen from "../../screens/guest/Home";
import LoginScreen from "../../screens/guest/Login";

export default createStackNavigator({
  [AppScreens.GuestHome]: HomeScreen,
  [AppScreens.GuestLogin]: LoginScreen
});
