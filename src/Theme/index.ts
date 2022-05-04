import { DefaultTheme } from "styled-components";
import { Colors, ThemeColors, ColorLevels } from "./Colors";

export type IButtonVariants = "primary" | "secondary";

const Theme: DefaultTheme = {
  button: {
    padding: "6px 10px",
    borderWidth: "1px",
    borderRadius: "4px",
    borderStyle: "solid",
    variants: {
      primary: {
        base: {
          backgroundColor: "orange",
          foregroundColor: "black",
          borderColor: "teal",
        },
        hover: {
          backgroundColor: "teal",
          foregroundColor: "yellow",
          borderColor: "white",
        },
        active: {
          backgroundColor: "red",
          foregroundColor: "yellow",
          borderColor: "white",
        },
        focus: {
          backgroundColor: "yellow",
          foregroundColor: "yellow",
          borderColor: "white",
        },
      },
      secondary: {
        base: {
          backgroundColor: "dodgerblue",
          foregroundColor: "yellow",
          borderColor: "white",
        },
        hover: {
          backgroundColor: "orange",
          foregroundColor: "yellow",
          borderColor: "white",
        },
        active: {
          backgroundColor: "orange",
          foregroundColor: "yellow",
          borderColor: "white",
        },
        focus: {
          backgroundColor: "orange",
          foregroundColor: "yellow",
          borderColor: "white",
        },
      },
    },
  },
  colors: {
    core: {
      ...Colors,
    },
    theme: {
      ...ThemeColors,
    },
    levels: {
      ...ColorLevels,
    },
  },
};

export { Theme };
