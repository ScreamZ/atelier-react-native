import React, { useEffect } from "react";
import { Text } from "react-native";
import { NavigationScreenComponent } from "react-navigation";
import { AppScreens } from "../modules/navigation/types";
import SafeArea from "../modules/ui/components/SafeArea";

const InitializationScreen: NavigationScreenComponent = (props) => {
  useEffect(() => {
    // TODO: Currently there is nothing to load so we mark ready ASAP
    props.navigation.navigate(AppScreens.GuestHome);
  }, []);

  return (
    <SafeArea>
      <Text>Ceci est l'écran de chargement de l'application</Text>
    </SafeArea>
  );
};

export default InitializationScreen;
