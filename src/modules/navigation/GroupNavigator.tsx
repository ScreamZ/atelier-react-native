import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Text } from "react-native";
import { material, systemWeights } from "react-native-typography";
import { createMaterialTopTabNavigator, NavigationComponent, NavigationParams } from "react-navigation";
import MembersScreen from "../../screens/group/Members";
import RecentsScreen from "../../screens/group/Recents";
import TopsScreen from "../../screens/group/Tops";
import SafeArea from "../ui/components/SafeArea";
import { theme } from "../ui/theme";
import { AppScreens } from "./types";

const GroupNavigator = createMaterialTopTabNavigator(
  {
    [AppScreens.GroupRecents]: RecentsScreen,
    [AppScreens.GroupTops]: TopsScreen,
    [AppScreens.GroupMembers]: MembersScreen,
  },
  {
    initialRouteName: AppScreens.GroupRecents,
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: theme.colors.mainPurple,
        height: 3,
      },
      labelStyle: {
        ...material.body2Object,
        ...systemWeights.bold,
        color: theme.colors.darkBlue,
      },
      style: {
        backgroundColor: "white",
      },
    },
  },
);

const GroupNavigatorContainer: NavigationComponent = (props: NavigationParams) => {
  const { t } = useTranslation();

  return (
    <SafeArea>
      <Button
        onPress={() => props.navigation.navigate(AppScreens.GuestHome)}
        title="Go to guest home (like a disconnect, but you probably have to clear some vars too"
      />
      <Text>Imaginons que c'est le composant avec "Le wagon", la search et la tête du gars</Text>
      <GroupNavigator navigation={props.navigation} screenProps={{ t }} />
    </SafeArea>
  );
};

GroupNavigatorContainer.router = GroupNavigator.router;

export default GroupNavigatorContainer;
