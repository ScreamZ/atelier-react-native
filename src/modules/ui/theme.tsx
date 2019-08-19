// import original module declarations
import "styled-components/native";
import { DefaultTheme } from "styled-components/native";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      blue: string;
    };
    font: {
      sansSerif: string;
    };
  }
}
// Export theme implementing interface
export const theme: DefaultTheme = {
  colors: {
    blue: "blue"
  },
  font: {
    sansSerif: "'roboto', sans-serif"
  }
};
