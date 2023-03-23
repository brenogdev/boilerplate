import {
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { useDrawerContext } from "../../hooks/useDrawerContext";
import * as Styled from "./styles";
import { ListItemLink } from "../../components/ListItemLink";
import { useAppDispatch } from "../../hooks/useAppRedux";
import { logout } from "../../features/Auth/authSlice";
import { Outlet } from "react-router-dom";

const Logo = ""

type RootLayoutProps = {
  children: React.ReactNode;
};

export const RootLayout: React.FC<RootLayoutProps> = ({
  children,
}: RootLayoutProps) => {
  const theme = useTheme();
  const screenWidth = useMediaQuery(theme.breakpoints.down("sm"));
  const { drawerOptions, isDrawerOpen, handleToggleDrawer } =
    useDrawerContext();

  const dispatch = useAppDispatch();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={screenWidth ? "temporary" : "permanent"}
        onClose={handleToggleDrawer}
      >
        <Box
          display="flex"
          width={theme.spacing(28)}
          height="100%"
          flexDirection="column"
        >
          <Box
            bgcolor={theme.palette.primary.main}
            width="100%"
            height={theme.spacing(8)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Styled.Image src={Logo} alt="Logo" />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              {drawerOptions.length > 0 &&
                drawerOptions.map((drawerOption) => (
                  <ListItemLink
                    key={drawerOption.path}
                    icon={drawerOption.icon}
                    label={drawerOption.label}
                    to={drawerOption.path}
                    onClick={screenWidth ? handleToggleDrawer : undefined}
                  />
                ))}
              <Divider color="primary" />
              <ListItemButton
                sx={{ marginTop: theme.spacing(10) }}
                onClick={() => dispatch(logout())}
              >
                <ListItemIcon>
                  <Icon color="primary">logout</Icon>
                </ListItemIcon>
                <ListItemText primary="Sair" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={screenWidth ? 0 : theme.spacing(28)}>
        <Outlet />
      </Box>
    </>
  );
};
