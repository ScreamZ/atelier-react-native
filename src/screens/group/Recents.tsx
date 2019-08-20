import React from "react";
import { useTranslation } from "react-i18next";
import { Text } from "react-native";
import { NavigationScreenComponent, NavigationTabScreenOptions } from "react-navigation";

const RecentsScreen: NavigationScreenComponent<{}, NavigationTabScreenOptions> = () => {
  const { t } = useTranslation();

  return <Text>Page {t("group.recent")}</Text>;
};

RecentsScreen.navigationOptions = (props) => ({
  title: props.screenProps.t("group.recent"),
});

export default RecentsScreen;
