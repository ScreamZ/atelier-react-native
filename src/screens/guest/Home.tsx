import React from "react";
import { Button } from "react-native";
import { NavigationScreenComponent } from "react-navigation";
import styled from "styled-components/native";
import { AppScreens } from "../../modules/navigation/types";
import SafeArea from "../../modules/ui/components/SafeArea";
import * as Text from "../../modules/ui/components/Texts";
const HomeScreen: NavigationScreenComponent = (props) => {
  return (
    <SafeArea>
      <Text.Title>HomeScreen just to show</Text.Title>
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
  header: null,
};

const Spacer = styled.View`
  height: 10;
`;

export default HomeScreen;
