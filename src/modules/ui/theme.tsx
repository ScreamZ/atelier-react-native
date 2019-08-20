// import original module declarations
import "styled-components/native";
import { DefaultTheme } from "styled-components/native";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      darkBlue: string;
      mainPurple: string;
    };
    font: {
      sansSerif: string;
    };
  }
}

// Export theme implementing interface
export const theme: DefaultTheme = {
  colors: {
    darkBlue: "#20205D",
    mainPurple: "#B600CF",
  },
  font: {
    sansSerif: "'roboto', sans-serif",
  },
};
