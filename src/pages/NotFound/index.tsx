import React from 'react'
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

import ErrorPageImg from "../../assets/images/error-page.jpg";
import { constants } from "../../constants";

export const NotFound = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    localStorage.removeItem(constants.AUTH.LOCAL_STORAGE_KEY_ACCESS_TOKEN);
    navigate("/login");
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      width="100%"
      height="100vh"
    >
      <img src={ErrorPageImg} alt="Logo Error" width={500} />
      <Button variant="contained" onClick={handleNavigate}>
        Ir para login
      </Button>
    </Box>
  );
};
