import { Box, Paper, Typography, Button, Divider } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

export default function DashboardLeft() {
  const navigate = useNavigate();
 const menuItems = [
  { icon: <HomeIcon />, title: "Home", path: "/" },
  { icon: <PersonIcon />, title: "Profile", path: "/profile" },
  { icon: <AssignmentIcon />, title: "Applications", path: "/applications" },
  { icon: <SettingsIcon />, title: "Settings", path: "/settings" },
];

  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 3,
        position: "fixed",
        width: 260, // sidebar width
        height: "100vh",
        overflowY: "auto",
      }}
    >
      {/* ================= HEADER ================= */}
      <Typography variant="h6" fontWeight={700}>
        Dashboard Menu
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Manage your dashboard settings and navigation
      </Typography>

      {/* ================= MENU LIST ================= */}
   {/* ================= MENU LIST ================= */}
<Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mt: 3 }}>
  {menuItems.map((item, index) => (
    <Button
      key={index}
      variant="outlined"
      onClick={() => navigate(item.path)}   // 🔥 ROUTING ADDED
      sx={{
        justifyContent: "flex-start",
        gap: 1.5,
        py: 1.2,
        borderRadius: 2,
        textTransform: "none",
        color: "#333",
        borderColor: "#e0e0e0",
        "&:hover": {
          backgroundColor: "#f5f9ff",
          borderColor: "#1976d2",
        },
      }}
    >
      <Box sx={{ fontSize: 22, display: "flex" }}>{item.icon}</Box>
      {item.title}
    </Button>
  ))}
</Box>


      {/* ================= MAIN BUTTON ================= */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 3,
          py: 1.9,
          borderRadius: 2,
          background: "linear-gradient(90deg, #1976d2, #42a5f5)",
          textTransform: "none",
          fontWeight: 600,
        }}
      >
        Dashboard Action
      </Button>

      {/* ================= DIVIDER ================= */}
      <Divider sx={{ my: 5 }} />

      {/* ================= HELP CENTER ================= */}
      <Button
        fullWidth
        sx={{
          justifyContent: "flex-start",
          gap: 1.5,
          mb: 1,
          textTransform: "none",
        }}
      >
        <HelpIcon />
        Help Center
      </Button>

      {/* ================= LOGOUT ================= */}
      <Button
        fullWidth
        sx={{
          justifyContent: "flex-start",
          gap: 1.5,
          color: "red",
          textTransform: "none",
        }}
      >
        <LogoutIcon />
        Logout
      </Button>
    </Paper>
  );
}
