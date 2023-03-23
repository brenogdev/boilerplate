import { RootLayout } from "../layouts/RootLayout";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppRedux";
import { selectUserLogged } from "../features/Auth/authSlice";

export const PrivateRoutes = () => {
  const { accessToken } = useAppSelector(selectUserLogged);

  return accessToken ? (
    <RootLayout>
      <Outlet />
    </RootLayout>
  ) : (
    <Navigate to={"/login"} replace={true} />
  );
};
