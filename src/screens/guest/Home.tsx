import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";
import { Button } from "react-native";
import { NavigationScreenComponent } from "react-navigation";
import { AppScreens } from "../../modules/navigation/types";
import SafeArea from "../../modules/ui/components/SafeArea";

const HomeScreen: NavigationScreenComponent = props => {
  return (
    <SafeArea>
      <Text>HomeScreen just to show</Text>
      <Button onPress={() => props.navigation.navigate(AppScreens.GuestLogin)} title="Go to login" />
      <Spacer />
      <Button
        onPress={() => props.navigation.navigate(AppScreens.GroupHome)}
        title="Go to Group home (demo of navigation, should be redirected after login / register)"
      />
    </SafeArea>
  );
};

HomeScreen.navigationOptions = {
  header: null
};

const StatusBarHeight = styled.View`
  height: ${Constants.statusBarHeight};
`;

const Spacer = styled.View`
  height: 10;
`;

export default HomeScreen;
