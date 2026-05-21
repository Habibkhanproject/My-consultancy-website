import { Box, Typography, Paper } from "@mui/material";
import CountryDetailsLeftside from "./CountryDetailsLeftside";
import CountryDetailsRightside from "./CountryDetailsRightside";

export default function CountryDetails() {
  return (
    <Box
      sx={{
        width: "97%",
        p: { xs: 2, md: 4 },
        display: "flex",
        gap: 1,
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {/* LEFT SIDE */}
      <Box sx={{ flex: 1 }}>
        <CountryDetailsLeftside/>
      </Box>


      

      {/* RIGHT SIDE */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
      <CountryDetailsRightside/>
      </Box>
    </Box>
  );
}