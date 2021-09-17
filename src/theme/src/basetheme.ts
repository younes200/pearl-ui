import ActivityIndicatorConfig from "../../components/Atoms/ActivityIndicator/ActivityIndicator.config";
import ScreenConfig from "../../components/Atoms/Screen/Screen.config";
import TextConfig from "../../components/Atoms/Text/Text.config";
import { basePalette } from "../utils/basePalette";
import { createTheme } from "./themeFunctions";

export const baseTheme = createTheme({
  palette: {
    ...basePalette,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    "2xl": 40,
    "3xl": 48,
    "4xl": 56,
    "5xl": 64,
    "6xl": 72,
    "7xl": 80,
    "8xl": 88,
    "9xl": 96,
  },
  borderRadii: {
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
  },
  components: {
    Text: TextConfig,
    Screen: ScreenConfig,
    ActivityIndicator: ActivityIndicatorConfig,
  },
});
