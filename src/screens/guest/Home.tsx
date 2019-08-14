import React, { useEffect } from "react";
import { Text, SafeAreaView, Button } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Screens } from "../../modules/navigation/types";

export const HomeScreen: React.FC<{ navigation: NavigationScreenProp<NavigationState> }> = props => {
  return (
    <SafeAreaView>
      <Text>Hello homescreen</Text>
      <Button onPress={() => props.navigation.navigate(Screens.GuestLogin)} title="Go to login" />
    </SafeAreaView>
  );
};
