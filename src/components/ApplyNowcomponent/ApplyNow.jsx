import { Box } from "@mui/material";
import ApplyNowLeft from "./ApplyNowLeft";
import ApplyNowRight from "./ApplyNowRight";

export default function ApplyNow() {
  return (
    <Box
      sx={{
        width: "97%",
        p: { xs: 2, md: 4 },
        display: "flex",
        gap: 2,
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      {/* LEFT SIDE (60%) */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "0 0 60%" },
        }}
      >
        <ApplyNowLeft />
      </Box>

      {/* RIGHT SIDE (40%) */}
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "0 0 40%" },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <ApplyNowRight />
      </Box>
    </Box>
  );
}