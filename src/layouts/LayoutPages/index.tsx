import React from "react";
import { Box } from "@mui/system";
import { Header } from "../../components/Header";
import { Button, Icon, Paper, Typography, useTheme } from "@mui/material";

type LayoutPageProps = {
  icon: string;
  title: string;
  children: React.ReactNode;
  isAction?: boolean;
  labelButton?: string;
  onClick?: () => void;
};

export const LayoutPages: React.FC<LayoutPageProps> = ({
  icon,
  title,
  isAction,
  labelButton,
  children,
  onClick,
}: LayoutPageProps) => {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          marginTop: theme.spacing(11),
          padding: theme.spacing(4),
          heigh: "100%",
        }}
      >
        <Paper sx={{ height: 50, padding: 2 }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            height="100%"
          >
            <Box display="flex" alignItems="center" gap={1}>
              <Icon color="primary">{icon}</Icon>
              <Typography variant="h5" component="h5">
                {title}
              </Typography>
            </Box>
            {isAction ? (
              <Button variant="contained" onClick={onClick}>
                {labelButton}
              </Button>
            ) : null}
          </Box>
        </Paper>
        <Box>{children}</Box>
      </Box>
    </>
  );
};
