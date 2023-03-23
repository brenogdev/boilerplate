import { createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";

export const CustomTheme = createTheme({
  palette: {
    primary: {
      main: "#3B867C",
      dark: "#344B47",
      light: "#DAE5DF",
      contrastText: "#fff",
    },
    info: {
      main: "#fff",
    },
    success: {
      main: green["A700"],
    },
    error: {
      main: red["A700"],
    },
  },
});
