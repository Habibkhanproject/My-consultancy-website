import { Box, Typography, Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

export default function DashboardRight() {
  const listItems = [
    { title: "New Message", desc: "1 task pending" },
    { title: "Task Update", desc: "1 task pending" },
  ];

  const featuredItems = [
    {
      title: "Modern Workspace",
      desc: "Design your perfect office setup",
    },
    {
      title: "Team Collaboration",
      desc: "Work together efficiently",
    },
    {
      title: "Project Updates",
      desc: "Track progress in real time",
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {/* ================= TOP HEADER ================= */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          ml: 15,
          mb: 3,
        }}
      >
        <Box>
          <Typography fontWeight={600}>Alex Thompson</Typography>
          <Typography variant="caption" color="text.secondary">
            Student ID: #GS-8829
          </Typography>
        </Box>

        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid #1976d2",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>

      {/* ================= LIST BOX (ONCE) ================= */}
      <Box
        sx={{
          p: 2,
          borderRadius: 3,
          border: "1px solid #e5e7eb",
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
          <NotificationsIcon />
          <Typography fontWeight={700}>Notifications</Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {listItems.map((item, index) => (
            <Button
              key={index}
              fullWidth
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 2,
                borderRadius: 3,
                textTransform: "none",
                border: "1px solid #e5e7eb",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg,#1976d2,#42a5f5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FavoriteBorderIcon sx={{ fontSize: 20, color: "#fff" }} />
                </Box>

                <Box textAlign="left">
                  <Typography fontWeight={700} variant="body2">
                    {item.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                }}
              />
            </Button>
          ))}
        </Box>
      </Box>

      {/* ================= FEATURED BOX (ONCE) ================= */}
      <Box
        sx={{
          p: 2,
          borderRadius: 3,
          border: "1px solid #e5e7eb",
          backgroundColor: "#fff",
        }}
      >
        <Typography fontWeight={700} sx={{ mb: 2 }}>
          Featured
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {featuredItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 1.5,
                borderRadius: 2,
                "&:hover": { backgroundColor: "#f8fafc" },
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                sx={{ width: 45, height: 45, borderRadius: 2 }}
              />

              <Box sx={{ flex: 1, ml: 2 }}>
                <Typography fontWeight={700}>{item.title}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {item.desc}
                </Typography>
              </Box>

              <FavoriteBorderIcon sx={{ color: "#9ca3af" }} />
            </Box>
          ))}
        </Box>

        {/* 🔥 BOTTOM BUTTON */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            borderRadius: 3,
            textTransform: "none",
            background: "linear-gradient(135deg, #1976d2, #42a5f5)",
            boxShadow: "0 4px 12px rgba(25,118,210,0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #1565c0, #1e88e5)",
            },
          }}
        >
          View All Featured
        </Button>
      </Box>

      {/* {third box} */}
      <Box
        sx={{
          borderRadius: 3,
          border: "1px solid #e5e7eb",
          backgroundColor: "#fff",
          display: "flex",
          overflow: "hidden", // 🔥 important (makes bar touch edges cleanly)
          alignItems: "stretch",
          boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
          transition: "0.3s",
          "&:hover": {
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          },
        }}
      >
        {/* 🔥 LEFT ACCENT BAR (TOUCHING EDGE) */}
        <Box
          sx={{
            width: 6,
            background: "linear-gradient(180deg, #1976d2, #42a5f5)",
          }}
        />

        {/* RIGHT CONTENT */}
        <Box sx={{ p: 2, flex: 1 }}>
          {/* HEADER */}
          <Typography fontWeight={700} sx={{ mb: 2 }}>
            Task Overview
          </Typography>

          {/* LIST */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            {/* ITEM 1 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                p: 1.5,
                borderRadius: 2,
                border: "1px solid #f1f5f9",
                transition: "0.25s",
                "&:hover": {
                  backgroundColor: "#f8fafc",
                  transform: "translateX(3px)",
                },
              }}
            >
              <NotificationsIcon sx={{ color: "#1976d2" }} />
              <Typography variant="body2" fontWeight={600}>
                Notifications
              </Typography>
            </Box>

            {/* ITEM 2 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                p: 1.5,
                borderRadius: 2,
                border: "1px solid #f1f5f9",
                transition: "0.25s",
                "&:hover": {
                  backgroundColor: "#f8fafc",
                  transform: "translateX(3px)",
                },
              }}
            >
              <MessageIcon sx={{ color: "#1976d2" }} />
              <Typography variant="body2" fontWeight={600}>
                Messages
              </Typography>
            </Box>

            {/* ITEM 3 */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                p: 1.5,
                borderRadius: 2,
                border: "1px solid #f1f5f9",
                transition: "0.25s",
                "&:hover": {
                  backgroundColor: "#f8fafc",
                  transform: "translateX(3px)",
                },
              }}
            >
              <AssignmentTurnedInIcon sx={{ color: "#1976d2" }} />
              <Typography variant="body2" fontWeight={600}>
                Tasks
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
