import React from "react";
import { Button } from "react-native";
import { NavigationScreenComponent } from "react-navigation";
import styled from "styled-components/native";
import { AppScreens } from "../../modules/navigation/types";
import SafeArea from "../../modules/ui/components/SafeArea";
import * as Text from "../../modules/ui/components/Texts";

const HomeScreen: NavigationScreenComponent = (props) => {
  return (
    <SafeArea style={{ alignItems: "center" }}>
      <Text.Title style={{ textAlign: "center" }}>Sommaire de l'atelier</Text.Title>
      <Wrapper>
        <Text.Title>Matin</Text.Title>
        <Button onPress={() => props.navigation.navigate(AppScreens.Module1)} title="Module 1 : Les bases" />
        <Button onPress={() => props.navigation.navigate(AppScreens.Module2)} title="Module 2 : Design" />
        <Button onPress={() => props.navigation.navigate(AppScreens.Module3)} title="Module 3 : Navigation" />
        <Text.Title>Après-midi</Text.Title>
        <Button onPress={() => props.navigation.navigate(AppScreens.Module4)} title="Module 4 : Formulaires" />
        <Button onPress={() => props.navigation.navigate(AppScreens.Module5)} title="Module 5 : Internationalisation" />
        <Button
          onPress={() => props.navigation.navigate(AppScreens.Module6)}
          title="Module 6 : Build / Codepush / Gestion du mode hors-ligne / Push Notifications"
        />
      </Wrapper>
    </SafeArea>
  );
};

HomeScreen.navigationOptions = {
  header: null,
};

const Spacer = styled.View`
  height: 10;
`;

const Wrapper = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    flex: 1,
    justifyContent: "space-evenly",
  },
}))``;

export default HomeScreen;
