import { Box } from "@mui/material";
import DashboardLeft from "./DashboardLeft";
import DashboardMiddle from "./DashboardMiddle";
import DashboardRight from "./DashboardRight";

export default function Dashboardmainbox() {
  return (
    <Box
      sx={{
        width: "100%",
        py: 2,
        display: "flex",
        gap: 2,
        alignItems: "flex-start",
      }}
    >
      {/* ================= LEFT (STICKY 25%) ================= */}
      <Box
        sx={{
          width: { xs: "100%", md: "25%" },
          position: { md: "sticky" },
          alignSelf: "flex-start",
          height: "fit-content",
        }}
      >
        <DashboardLeft />
      </Box>

      {/* ================= MIDDLE (50%) ================= */}
      <Box
        sx={{
          width: { xs: "100%", md: "70%" },
        }}
      >
        <DashboardMiddle />
      </Box>

      {/* ================= RIGHT (25%) ================= */}
      <Box
        sx={{
          width: { xs: "100%", md: "35%" },
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <DashboardRight />
      </Box>
    </Box>
  );
}
