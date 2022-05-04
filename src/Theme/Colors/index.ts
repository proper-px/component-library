export interface IColors {
  [key: string]: string;
}

export interface IColorLevels {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export const Colors: IColors = {
  white: "#ffffff",
  black: "#000000",
  blue: "#0d6efd",
  bluegray: "#8c8eaa",
  focusblue: "#0250bb",
  indigo: "#1c0950",
  purple: "#500778",
  violet: "#88179b",
  magenta: "#c02481",
  pink: "#ff4874",
  red: "#e4002b",
  orange: "#f3944e",
  yellow: "#feb93b",
  green: "#009f4d",
  gold: "#ffad00",
  tangerine: "#ff6d60",
};

export const ThemeColors: IColors = {
  primary: Colors.blue,
  secondary: Colors.gray600,
  success: Colors.green,
  info: Colors.tangerine,
  warning: Colors.yellow,
  danger: Colors.red,
  light: Colors.gray100,
  dark: Colors.gray900,
};

export const ColorContrast: IColors = {
  dark: Colors.dark,
  light: Colors.white,
};

export const Indigo: IColorLevels = {
  50: "#f4f3f7",
  100: "#e8e6ee",
  200: "#c9c4d5",
  300: "#9d95b4",
  400: "#706491",
  500: "#453570",
  600: Colors.indigo,
  700: "#180844",
  800: "#140639",
  900: "#10052e",
};

export const Purple: IColorLevels = {
  50: "#f7f3f9",
  100: "#eee6f2",
  200: "#d5c3df",
  300: "#b494c5",
  400: "#9163aa",
  500: "#703490",
  600: Colors.purple,
  700: "#440666",
  800: "#390555",
  900: "#2e0444",
};

export const Violet: IColorLevels = {
  50: "#f9f4fa",
  100: "#f3e8f5",
  200: "#e2c7e7",
  300: "#cc9bd4",
  400: "#b46dc0",
  500: "#9d41ad",
  600: Colors.violet,
  700: "#741484",
  800: "#61106e",
  900: "#4e0d58",
};

export const Magenta: IColorLevels = {
  50: "#fcf4f9",
  100: "#f9e9f2",
  200: "#f0cae1",
  300: "#e4a1c9",
  400: "#d775b0",
  500: "#cb4b98",
  600: Colors.magenta,
  700: "#a31f6e",
  800: "#881a5c",
  900: "#6d154a",
};

export const Pink: IColorLevels = {
  50: "#fff6f8",
  100: "#ffedf1",
  200: "#ffd3de",
  300: "#ffb0c3",
  400: "#ff8ca7",
  500: "#ff698d",
  600: Colors.pink,
  700: "#d93d63",
  800: "#b53352",
  900: "#912942",
};

export const Red: IColorLevels = {
  50: "#fef3f5",
  100: "#fce6ea",
  200: "#f9c2cc",
  300: "#f391a4",
  400: "#ee5e79",
  500: "#e92e51",
  600: Colors.red,
  700: "#c20025",
  800: "#a2001f",
  900: "#820019",
};

export const Orange: IColorLevels = {
  50: "#fffaf6",
  100: "#fef4ed",
  200: "#fce5d5",
  300: "#fad1b3",
  400: "#f7bc8f",
  500: "#f5a76e",
  600: Colors.orange,
  700: "#cf7e42",
  800: "#ad6937",
  900: "#8b542c",
};

export const Yellow: IColorLevels = {
  50: "#fffcf5",
  100: "#fff8eb",
  200: "#ffeed0",
  300: "#ffe1ab",
  400: "#fed384",
  500: "#fec65e",
  600: Colors.yellow,
  700: "#d89d32",
  800: "#b4832a",
  900: "#916922",
};

export const Green: IColorLevels = {
  50: "#f3faf6",
  100: "#e6f5ed",
  200: "#c2e8d4",
  300: "#91d6b2",
  400: "#5ec38f",
  500: "#2eb06d",
  600: Colors.green,
  700: "#008741",
  800: "#007137",
  900: "#005b2c",
};

export const Gold: IColorLevels = {
  50: "#fffbf3",
  100: "#fff7e6",
  200: "#ffebc2",
  300: "#ffdc91",
  400: "#ffcb5e",
  500: "#ffbc2e",
  600: Colors.gold,
  700: "#d99300",
  800: "#b57b00",
  900: "#916300",
};

export const Tangerine: IColorLevels = {
  50: "#fff8f7",
  100: "#fff0ef",
  200: "#ffdcd9",
  300: "#ffc0bb",
  400: "#ffa39b",
  500: "#ff877d",
  600: Colors.tangerine,
  700: "#d95d52",
  800: "#b54d44",
  900: "#913e37",
};

export const Bluegray: IColorLevels = {
  50: "#f8f8fc",
  100: "#f0f0f8",
  200: "#e8e9f3",
  300: "#dcdde9",
  400: "#bbbcd4",
  500: "#a2a4c1",
  600: Colors.bluegray,
  700: "#6f708a",
  800: "#5d5f7c",
  900: "#37374f",
};

export const Gray: IColorLevels = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#f0f0f0",
  300: "#e3e3e3",
  400: "#d9d9d9",
  500: "#bfbfbf",
  600: "#8c8c8c",
  700: "#595959",
  800: "#404040",
  900: "#212121",
};

export const ColorLevels = {
  ...Indigo,
  ...Purple,
  ...Violet,
  ...Magenta,
  ...Pink,
  ...Red,
  ...Orange,
  ...Yellow,
  ...Green,
  ...Gold,
  ...Tangerine,
  ...Bluegray,
  ...Gray,
};
