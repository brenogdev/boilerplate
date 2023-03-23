import React, { useState } from "react";
import { Box } from "@mui/system";

import {
  Card,
  CardActions,
  CardContent,
  TextField,
  useTheme,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppRedux";
import { getToken, getRefreshToken } from "../../features/Auth/authSlice";
const logo = "";
interface IFormInputs {
  email: string;
  password: string;
}

export const Login: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const { control, handleSubmit } = useForm<IFormInputs>({
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    setLoading(true);
    console.log(data);
    dispatch(getToken("token"));
    dispatch(getRefreshToken("refreshToken"));
    setLoading(false);
    navigate("/dashboard");
  };

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card>
          <CardContent sx={{ padding: 3 }}>
            <Box
              bgcolor={theme.palette.primary.main}
              display="flex"
              justifyContent="center"
              alignItems="center"
              padding={2}
              borderRadius={3}
            >
              <img src={logo} alt="logo" width="100%" />
            </Box>
            <Box display="flex" flexDirection="column" gap={2} marginTop={5}>
              <Controller
                rules={{
                  required: true,
                }}
                render={({ field }) => <TextField {...field} label="E-mail" />}
                name="email"
                control={control}
              />
              <Controller
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField type="password" {...field} label="Senha" />
                )}
                name="password"
                control={control}
              />
            </Box>
          </CardContent>
          <CardActions sx={{ padding: 3 }}>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              marginBottom={2}
            >
              <LoadingButton
                loading={loading}
                type="submit"
                variant="contained"
                fullWidth
              >
                Entrar
              </LoadingButton>
            </Box>
          </CardActions>
        </Card>
      </form>
    </Box>
  );
};
