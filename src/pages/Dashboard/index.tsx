import React from "react";
import { Typography } from "@mui/material";
import { constants } from "../../constants";
import { LayoutPages } from "../../layouts/LayoutPages";

export const Dashboard: React.FC = () => {
  return (
    <LayoutPages icon="dashboard" title="Dashboard">
      <Typography>Dashboard</Typography>
    </LayoutPages>
  );
};
