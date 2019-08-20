import React from "react";
import { Text } from "react-native";
import { NavigationScreenComponent, NavigationTabScreenOptions } from "react-navigation";

const MembersScreen: NavigationScreenComponent<{}, NavigationTabScreenOptions> = () => {
  return <Text>Members Screen</Text>;
};

MembersScreen.navigationOptions = (props) => ({
  title: props.screenProps.t("group.members"),
});

export default MembersScreen;
