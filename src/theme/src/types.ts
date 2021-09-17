import { ViewStyle, TextStyle, ImageStyle, ColorValue } from "react-native";
import { basePalette } from "../utils/basePalette";

export type SafeVariants<T> = Omit<T, keyof BasePearlTheme>;

export interface TypographyConfig {
  baseStyle:
    | TextStyle
    | {
        color?: ColorModeColor | ColorValue;
      };
  variants: {
    [key: string]:
      | TextStyle
      | {
          color?: ColorModeColor | ColorValue;
        };
  };
  defaults: {
    variant?: string;
  };
}

export interface ComponentConfig {
  baseStyle: {
    [key: string]: any;
  };
  sizes: {
    [key: string]: any;
  };
  variants: {
    [key: string]: any;
  };
  defaults: {
    size?: string;
    variant?: string;
  };
}

type Colors = keyof typeof basePalette;

export type ColorModeColor = {
  light: ColorValue;
  dark: ColorValue;
};

export interface BasePearlTheme {
  palette: {
    [key in Colors]: string;
  };
  spacing: {
    s: number;
    m: number;
    l: number;
    xl: number;
    "2xl": number;
    "3xl": number;
    "4xl": number;
    "5xl": number;
    "6xl": number;
    "7xl": number;
    "8xl": number;
    "9xl": number;
  };
  components: {
    [key: string]: ComponentConfig;
  };
  zIndices?: {
    hide: -1;
    base: 0;
    docked: 10;
    dropdown: 1000;
    sticky: 1100;
    banner: 1200;
    overlay: 1300;
    modal: 1400;
    popover: 1500;
    skipLink: 1600;
    toast: 1700;
    tooltip: 1800;
    [key: string]: number;
  };
  borderRadii: {
    s: number;
    m: number;
    l: number;
    xl: number;
  };
}

// Style Functions
export interface StyleFunctionContainer<
  TProps extends Record<string, any>,
  P extends keyof TProps = keyof TProps,
  K extends keyof BasePearlTheme | undefined = keyof BasePearlTheme | undefined
> {
  property: P;
  themeKey: K | undefined;
  variant: boolean;
  func: StyleFunction<TProps>;
}

export type StyleFunction<
  TProps extends Record<string, any> = Record<string, any>,
  S extends keyof any = string
> = (
  props: TProps,
  theme: BasePearlTheme
) => {
  [key in S]?: any;
};

// Styles
export type RNStyle = ViewStyle | TextStyle | ImageStyle;

export type RNStyleProperty =
  | keyof ViewStyle
  | keyof TextStyle
  | keyof ImageStyle;

export type PropValue = string | number | undefined | null;
