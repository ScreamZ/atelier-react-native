import { createStackNavigator } from "react-navigation";
import HomeScreen from "../../screens/guest/Home";
import Module1 from "../../screens/modules/m1";
import Module2 from "../../screens/modules/m2";
import Module3 from "../../screens/modules/m3";
import Module4 from "../../screens/modules/m4";
import Module5 from "../../screens/modules/m5";
import Module6 from "../../screens/modules/m6";
import { AppScreens } from "./types";

export default createStackNavigator({
  [AppScreens.GuestHome]: HomeScreen,
  [AppScreens.Module1]: Module1,
  [AppScreens.Module2]: Module2,
  [AppScreens.Module3]: Module3,
  [AppScreens.Module4]: Module4,
  [AppScreens.Module5]: Module5,
  [AppScreens.Module6]: Module6,
});
