import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

export const Loader = () => {
  return (
    <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
      <CircularProgress />
    </Box>
  );
};
