import "react-toastify/dist/ReactToastify.css";

import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes/AppRoutes";
import { CustomTheme } from "./themes/CustomTheme";
import { DrawerProvider } from "./contexts/DrawerContext";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <DrawerProvider>
        <AppRoutes />
      </DrawerProvider>
      <ToastContainer />
    </ThemeProvider>
  );
};
