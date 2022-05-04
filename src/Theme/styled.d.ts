import "styled-components";
import { IColors } from "./Colors";

interface IButtonVariantProps {
  backgroundColor: string;
  foregroundColor: string;
  borderColor: string;
}

interface IButtonStateProps {
  [state: string]: IButtonVariantProps;
}
interface IButtonVariant {
  [color: string]: IButtonStateProps;
}

interface IButtonTheme {
  padding: string;
  borderWidth: string;
  borderStyle: string;
  borderRadius: string;
  variants: IButtonVariant;
}

declare module "styled-components" {
  export interface DefaultTheme {
    button: IButtonTheme;
    colors: {
      core: IColors;
      theme: IColors;
      levels: IColors;
    };
  }
}
