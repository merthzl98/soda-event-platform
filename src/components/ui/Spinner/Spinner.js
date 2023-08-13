import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spinner = () => {
  return (
    <Box sx={{ display: "flex",padding: "0" }}>
      <CircularProgress size={"16px"}/>
    </Box>
  );
};

export default Spinner;
