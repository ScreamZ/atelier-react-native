import { Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

// An hacked SafeArea that also works with Android Notch and not only with IOS
export default styled.SafeAreaView`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0};
`;
