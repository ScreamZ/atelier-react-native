import React from "react";
import { Text } from "react-native";
import { NavigationScreenComponent, NavigationTabScreenOptions } from "react-navigation";

const TopsScreen: NavigationScreenComponent<{}, NavigationTabScreenOptions> = () => {
  return <Text>Tops Screen</Text>;
};

TopsScreen.navigationOptions = props => ({
  title: props.screenProps.t("group.tops")
});

export default TopsScreen;
