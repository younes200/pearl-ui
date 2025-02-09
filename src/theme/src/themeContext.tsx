import AppLoading from "expo-app-loading";
import React, { useEffect, useState, createContext } from "react";
import { useColorScheme } from "react-native";
import { baseTheme } from "./base/index";
import { BasePearlTheme } from "./types";

type ThemeType = "light" | "dark";

export interface IThemeContext {
  /** Theme configuration object for the active color mode */
  theme: BasePearlTheme;
  /** Active color mode */
  colorMode: ThemeType;
  /** Function to toggle the active color mode */
  toggleColorMode(): void;
}

interface ThemeProviderProps {
  /** Default color mode for the theme (light, dark, system) */
  defaultColorMode?: ThemeType | "system";
  /** The theme configuration object */
  theme?: BasePearlTheme;
  /** A flag that describes the loading status of the custom fonts */
  haveFontsLoaded?: boolean;
  /**React children */
  children: React.ReactNode;
}

export const themeContext = createContext({} as IThemeContext);

/**
 * The main provider component which controls the theme and color mode of the components in the entire application.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  defaultColorMode = "light",
  theme = baseTheme,
  haveFontsLoaded = true,
  children,
}) => {
  const systemThemeStyle = useColorScheme() as ThemeType;
  const [colorMode, setColorMode] = useState<ThemeType>(
    defaultColorMode === "system" ? systemThemeStyle : defaultColorMode
  );

  const changeThemeTo = (colorMode: ThemeType) => {
    if (colorMode === "dark") {
      setColorMode("dark");
    } else {
      setColorMode("light");
    }
  };

  const toggleColorMode = () => {
    if (colorMode === "light") {
      changeThemeTo("dark");
    } else {
      changeThemeTo("light");
    }
  };

  useEffect(() => {
    let activeTheme =
      defaultColorMode === "system" ? systemThemeStyle : defaultColorMode;
    changeThemeTo(activeTheme);
    // // Set initial Theme
    // if (colorMode === "light") {
    //   changeThemeTo("light");
    // } else {
    //   changeThemeTo("dark");
    // }
  }, [theme, defaultColorMode, systemThemeStyle]);

  if (haveFontsLoaded) {
    return (
      <themeContext.Provider
        value={{ theme, colorMode, toggleColorMode } as IThemeContext}
      >
        {children}
      </themeContext.Provider>
    );
  }

  return <AppLoading />;
};
