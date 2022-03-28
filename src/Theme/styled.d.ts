import "styled-components";

interface IButtonTheme {
  padding: string;
  borderWidth: string;
  borderStyle: string;
  borderRadius: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    button: IButtonTheme;
  }
}
