import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ade200",
    },
    secondary: {
      main: "#00897b",
    },
  },
});
declare module "@mui/material/styles" {
  interface Theme {
    pallete: {
      primary: {
        main: string;
      };
      secondary: {
        main: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    pallete?: {
      primary?: {
        main?: string;
      };
      secondary?: {
        main?: string;
      };
    };
  }
}
