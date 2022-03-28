import { DefaultTheme } from "styled-components";
import { ButtonTheme } from "../Components/Button";

export type IButtonVariants = "primary" | "secondary";

const Theme: DefaultTheme = {
  ...ButtonTheme,
};

export { Theme };
