import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";

const cardData = [
  {
    id: 1,
    icon: <SchoolIcon sx={{ fontSize: 40 }} />,
    title: "Scholarships",
    description:
      "Identifying and applying for merit-based and need-based financial aid to make global education affordable.",
    type: "image",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600",
    color: "#2563eb",
    bg: "#eff6ff",
  },
  {
    id: 2,
    icon: <InfoIcon sx={{ fontSize: 40 }} />,
    title: "SOP/CV Writing",
    description:
      "Professional editing and storytelling for your Statement of Purpose and Curriculum Vitae to highlight your unique strengths.",
    type: "empty",
    color: "#16a34a",
    bg: "#f0fdf4",
  },
  {
    id: 3,
    icon: <StarIcon sx={{ fontSize: 40 }} />,
    title: "Test Prep",
    description:
      "Intensive coaching for IELTS and TOEFL designed to help you achieve the band scores required by top institutions.",
    type: "buttons",
    color: "#f59e0b",
    bg: "#fffbeb",
  },
];

export default function CustomCards() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: 3,
      }}
    >
      {cardData.map((item) => (
        <Box
          key={item.id}
          sx={{
            p: 3,
            borderRadius: 3,
            backgroundColor: item.bg,
            border: `1px solid ${item.color}20`,
            minHeight: 330, // ✅ increased height
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // 👈 pushes content nicely
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-6px)",
              boxShadow: `0 12px 30px ${item.color}30`,
            },
          }}
        >
          {/* TOP CONTENT */}
          <Box sx={{ textAlign: "left" }}>
            <Box sx={{ mb: 2, color: item.color }}>{item.icon}</Box>

            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {item.title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </Box>

          {/* BOTTOM CONTENT */}
          <Box>
            {item.type === "image" && (
              <Box
                component="img"
                src={item.image}
                alt="card"
                sx={{
                  width: "100%",
                  height: 100,
                  objectFit: "cover",
                  borderRadius: 2,
                  display: "block",
                  mt: 2,
                }}
              />
            )}

            {item.type === "empty" && <Box sx={{ height: 100 }} />}

            {item.type === "buttons" && (
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  mt: 1,
                }}
              >
                <Typography
                  sx={{
                    backgroundColor: item.color,
                    color: "#fff",
                    px: 1.5,
                    py: 0.4,
                    fontSize: "0.75rem",
                    borderRadius: "999px", // 👈 pill shape
                    cursor: "pointer",
                  }}
                >
                  IELTS
                </Typography>

                <Typography
                  sx={{
                    border: `1px solid ${item.color}`,
                    color: item.color,
                    px: 1.5,
                    py: 0.4,
                    fontSize: "0.75rem",
                    borderRadius: "999px",
                    cursor: "pointer",
                  }}
                >
                  TOEFL
                </Typography>

                <Typography
                  sx={{
                    color: item.color,
                    px: 1.5,
                    py: 0.4,
                    fontSize: "0.75rem",
                    borderRadius: "999px",
                    cursor: "pointer",
                  }}
                >
                  PTE
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
