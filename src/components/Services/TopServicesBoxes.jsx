import * as React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

export default function TopServicesBoxes() {
  const features = [
    {
      desc: "Connect with top universities worldwide with ease.",
      color: "#3b82f6", // blue
    },
    {
      desc: "Get support from experienced consultants.",
      color: "#10b981", // green
    },
    {
      desc: "Find budget-friendly study options abroad.",
      color: "#f59e0b", // amber
    },
  ];

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "8fr 4fr",
        },
        gap: { xs: 2, md: 3 },
        mb: 3,
      }}
    >
      {/* ================= LEFT SIDE ================= */}
      <Box
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 3,
          backgroundColor: "#f9fafb",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "6fr 4fr" },
          gap: 3,
          alignItems: "center",
        }}
      >
        {/* TEXT CONTENT */}
        <Box>
          {/* TOP ICON */}
          <StarIcon
            sx={{
              fontSize: 35,
              color: "#3b82f6",
              mb: 1,
            }}
          />

          {/* Main Header */}
          <Typography
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 700,
              color: "#111827",
              mb: 2,
            }}
          >
            Admission Assistance
          </Typography>

          {/* Paragraph */}
          <Typography
            sx={{
              color: "#6b7280",
              fontSize: 14,
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            Navigate the complexities of international university applications
            with our expert advisors. We help you select the right programs and
            secure your placement in top-tier institutions worldwide.
          </Typography>

          {/* FEATURES */}
          <Box sx={{ display: "grid", gap: 2 }}>
            {features.map((item, i) => (
              <Box
                key={i}
                sx={{
                  display: "flex",
                  gap: 1.5,
                  alignItems: "flex-start",
                }}
              >
                {/* LEFT ICON (CONDITIONAL COLOR) */}
                <StarIcon
                  sx={{
                    fontSize: 18,
                    color: item.color,
                    mt: "2px",
                  }}
                />

                {/* TEXT */}
                <Typography sx={{ fontSize: 12, color: "#6b7280" }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* IMAGE */}
        <Box
          sx={{
            width: "100%",
            height: { xs: 200, md: "100%" },
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
            alt="services"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "0.4s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          />
        </Box>
      </Box>

      {/* ================= RIGHT SIDE ================= */}
      <Box
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 4,
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          transition: "0.3s",
          "&:hover": {
            boxShadow: "0 8px 25px rgba(0,0,0,0.06)",
            transform: "translateY(-2px)",
          },
        }}
      >
        {/* Top Header Icon Only */}
        <Box sx={{ mb: 1 }}>
          <WorkspacePremiumIcon
            sx={{
              fontSize: 34,
              color: "#3b82f6",
            }}
          />
        </Box>

        {/* Main Header */}
        <Typography
          sx={{
            fontSize: { xs: "1.3rem", md: "1.85rem" },
            fontWeight: 700,
            mb: 2,
            color: "#111827",
            lineHeight: 1.2,
          }}
        >
          Trusted Education Partner
        </Typography>

        {/* Paragraph */}
        <Typography
          sx={{
            fontSize: 13,
            color: "#6b7280",
            lineHeight: 1.8,
            mb: 3,
          }}
        >
          We ensure quality guidance, transparent process, and complete support
          for your international journey.
        </Typography>

        {/* BORDER BOX */}
        <Box
          sx={{
            borderLeft: "3px solid #3b82f6",
            pl: 2,
            py: 2,
            backgroundColor: "#f9fafb",
            borderRadius: 1,
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "#f3f4f6",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 600,
              mb: 1,
              color: "#111827",
            }}
          >
            Complete Support System
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              color: "#6b7280",
              mb: 1,
              lineHeight: 1.6,
            }}
          >
            From application to visa approval, we guide you at every step.
          </Typography>

          <Typography
            sx={{
              fontSize: 12,
              color: "#3b82f6",
              fontWeight: 600,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Learn More →
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
