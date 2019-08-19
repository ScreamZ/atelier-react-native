import React from "react";
import { Text, Button } from "react-native";
import { createMaterialTopTabNavigator, NavigationComponent } from "react-navigation";
import { AppScreens } from "./types";
import RecentsScreen from "../../screens/group/Recents";
import TopsScreen from "../../screens/group/Tops";
import MembersScreen from "../../screens/group/Members";
import { useTranslation } from "react-i18next";

const GroupNavigator = createMaterialTopTabNavigator(
  {
    [AppScreens.GroupRecents]: RecentsScreen,
    [AppScreens.GroupTops]: TopsScreen,
    [AppScreens.GroupMembers]: MembersScreen
  },
  { initialRouteName: AppScreens.GroupRecents }
);

const GroupNavigatorContainer: NavigationComponent = props => {
  const { t } = useTranslation();

  return (
    <>
      <Button
        onPress={() => props.navigation.navigate(AppScreens.GuestHome)}
        title="Go to guest home (like a disconnect, but you probably have to clear some vars too"
      />
      <Text>Imaginons que c'est le composant avec "Le wagon", la search et la tête du gars</Text>
      <GroupNavigator navigation={props.navigation} screenProps={{ t }} />
    </>
  );
};

GroupNavigatorContainer.router = GroupNavigator.router;

export default GroupNavigatorContainer;
