import * as React from "react";
import { Box, Typography, Paper } from "@mui/material";

const data = [
  {
    number: "1",
    title: "Choose Goal",
    subtitle: "Select your learning or career path.",
  },
  {
    number: "2",
    title: "Start Learning",
    subtitle: "Begin structured and guided learning.",
  },
  {
    number: "3",
    title: "Practice Skills",
    subtitle: "Apply knowledge through real tasks.",
  },
  {
    number: "4",
    title: "Achieve Success",
    subtitle: "Reach your career and academic goals.",
  },
];

export default function JourneytoSuccess() {
  return (
    <Box sx={{ px: 2, py: 6, textAlign: "center" }}>
      {/* HEADER */}
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Your Journey to Success
      </Typography>

      {/* PARAGRAPH */}
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: "700px",
          mx: "auto",
          lineHeight: 1.8,
          mb: 6,
        }}
      >
        Follow a simple and structured path designed to help you grow step by
        step. From choosing your goal to achieving success, every stage is
        carefully planned for your improvement.
      </Typography>

      {/* MAIN FLOW CONTAINER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
          flexWrap: "wrap",
          gap: 10,
          pt: 7,
        }}
      >
        {/* CENTER LINE */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: "42%",
            left: "10%",
            right: "10%",
            height: "1.5px",
            backgroundColor: "#cbd5e1",
            zIndex: 0,
            transform: "translateY(-50%)",
            borderRadius: "10px",
          }}
        />

        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              zIndex: 2,
              width: 220,
              textAlign: "center",
            }}
          >
            {/* NUMBER CIRCLE (ONLY) */}
            <Box
              sx={{
                width: 90,
                height: 90,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                fontSize: 30,
                fontWeight: 800,
                cursor: "pointer",
                transition: "0.3s",
                border: "2px solid #cbd5e1",
                backgroundColor: "#fff",
                color: "#0f172a",

                "&:hover": {
                  backgroundColor: "#1259b8",
                  color: "white",
                  border: "2px solid #1976d2",
                  transform: "translateY(-5px)",
                },
              }}
            >
              {item.number}
            </Box>

            {/* TITLE */}
            <Typography
              variant="subtitle1"
              fontWeight={700}
              sx={{
                mt: 3,
                // mb: 1,
                color: "#0f172a",
                letterSpacing: "0.3px",
              }}
            >
              {item.title}
            </Typography>

            {/* SUBTITLE */}
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                lineHeight: 1.6,
              }}
            >
              {item.subtitle}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
