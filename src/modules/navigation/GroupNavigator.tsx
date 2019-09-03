import React from "react";
import { useTranslation } from "react-i18next";
import { Text } from "react-native";
import { material, systemWeights } from "react-native-typography";
import { createMaterialTopTabNavigator, NavigationComponent, NavigationParams } from "react-navigation";
import styled from "styled-components/native";
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
      <TopWrapper>
        <Text>Ici il a y avoir une barre de rechercher et un bouton avec une loupe par exemple</Text>
      </TopWrapper>
      <GroupNavigator navigation={props.navigation} screenProps={{ t }} />
    </SafeArea>
  );
};

GroupNavigatorContainer.router = GroupNavigator.router;

const TopWrapper = styled.View`
  width: 40px;
  background: red;
  width: 100%;
`;

export default GroupNavigatorContainer;
