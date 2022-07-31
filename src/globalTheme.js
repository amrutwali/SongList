import { purple, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const globalTheme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: { fontWeight: 800, padding: 0, margin: 0 },
    h2: { fontWeight: 800, margin: 0 },
    h3: { fontWeight: 800, margin: 0 },
    h4: { fontWeight: 800, margin: 0 },
    h5: { fontWeight: 800, margin: 0 },
    h6: {
      fontWeight: 700,
      fontSize: 25,
      padding: 0,
      margin: 0,
      lineHeight: "24px",
    },
    subtitle1: { fontWeight: 700, padding: 0, margin: 0 },
    subtitle2: { fontWeight: 600, padding: 0, margin: 0 },
    body1: { fontWeight: 600, fontSize: 16, padding: 0, margin: 0 },
    body2: { fontWeight: 600, fontSize: 12, padding: 0, margin: 0 },
    button: { fontWeight: 700, padding: 0, margin: 0 },
  },
  palette: {
    primary: {
      main: red["A400"],
    },
    secondary: {
      main: purple["A200"],
    },
  },
});
