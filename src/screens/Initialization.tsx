import React, { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationScreenComponent } from "react-navigation";
import { AppScreens } from "../modules/navigation/types";

const InitializationScreen: NavigationScreenComponent = (props) => {
  useEffect(() => {
    // TODO: Currently there is nothing to load so we mark ready ASAP
    props.navigation.navigate(AppScreens.GuestHome);
  }, []);

  return (
    <SafeAreaView>
      <Text>Display loader while loading init scripts</Text>
    </SafeAreaView>
  );
};

export default InitializationScreen;
