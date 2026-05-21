import * as React from "react";
import { Box, Typography, Paper } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";

export default function CountryDetailsLeftside() {
  const universities = [
    {
      number: "01",
      name: "Harvard University",
      desc: "USA • World Rank #1 in Education & Research",
    },
    {
      number: "02",
      name: "University of Oxford",
      desc: "UK • Top global research university",
    },
    {
      number: "03",
      name: "University of Toronto",
      desc: "Canada • Leading innovation & technology programs",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        // p: { xs: 2, md: 4 },
      }}
    >
      {/* SMALL ICON + LABEL */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        <PublicIcon sx={{ fontSize: 18, color: "#0058be" }} />
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 600,
            color: "#0058be",
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          DESTINATION PROFILE
        </Typography>
      </Box>

      {/* MAIN HEADING */}
      <Typography
        sx={{
          fontSize: { xs: "1.6rem", md: "2.3rem" },
          fontWeight: "bold",
          mb: 2,
        }}
      >
        Study in the United Kingdom
      </Typography>

      {/* PARAGRAPH */}
      <Typography
        sx={{
          fontSize: 15,
          color: "text.secondary",
          lineHeight: 1.7,
          mb: 4,
        }}
      >
        The UK is a global leader in education, hosting some of the world's
        oldest and most prestigious universities. A degree from a UK institution
        is internationally recognized and highly valued by employers globally,
        offering students a competitive edge in the international job market.
      </Typography>

      {/* TWO BOXES IN ONE ROW */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: { xs: "wrap", md: "nowrap" },
          mb: 4,
        }}
      >
        <Paper
          sx={{
            flex: 1,
            p: 3,
            borderRadius: 0, // ❌ no rounded full card feel
            background: "transparent", // ❌ no background
            boxShadow: "none", // ❌ no shadow

            // ✅ ONLY LEFT BORDER
            borderLeft: "4px solid #0058be",
            borderTop: "none",
            borderRight: "none",
            borderBottom: "none",


            transition: "0.3s ease",

            "&:hover": {
              borderLeft: "4px solid #003f8a", // darker on hover
              transform: "translateX(4px)", // subtle motion
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 800, // ✅ strong bold
              fontSize: 16,
              mb: 0.5,
              color: "#111",
            }}
          >
            2-3 Years
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              color: "text.secondary",
              letterSpacing: 0.5,
            }}
          >
            WORK PERMIT (PSW)
          </Typography>
        </Paper>

        <Paper
          sx={{
            flex: 1,
            p: 3,
            borderRadius: 0, // ❌ no rounded full card feel
            background: "transparent", // ❌ no background
            boxShadow: "none", // ❌ no shadow

            // ✅ ONLY LEFT BORDER
            borderLeft: "4px solid #0058be",
            borderTop: "none",
            borderRight: "none",
            borderBottom: "none",

            width: "100%",
            maxWidth: 320,

            transition: "0.3s ease",

            "&:hover": {
              borderLeft: "4px solid #003f8a", // darker on hover
              transform: "translateX(4px)", // subtle motion
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: 800, // ✅ strong bold
              fontSize: 16,
              mb: 0.5,
              color: "#111",
            }}
          >
            2-3 Years
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              color: "text.secondary",
              letterSpacing: 0.5,
            }}
          >
            WORK PERMIT (PSW)
          </Typography>
        </Paper>
      </Box>

      {/* TOP UNIVERSITIES HEADING */}
      <Typography
        sx={{
          fontSize: { xs: "1.3rem", md: "1.8rem" },
          fontWeight: "bold",
          mb: 2,
        }}
      >
        Top Ranking Universities
      </Typography>

      {/* THREE BOXES IN COLUMN */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {universities.map((item, index) => (
          <Paper
            key={index}
            sx={{
              p: 2.5,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              gap: 4,
              boxShadow: "none",
              border: "1px solid rgba(0,0,0,0.08)",
              transition: "0.3s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                borderColor: "#0058be",
              },
  
            }}
          >
            {/* LEFT NUMBER BOX */}
            <Box
              sx={{
                width: 42,
                height: 42,
                borderRadius: 2,
                bgcolor: "#0058be",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                {item.number}
              </Typography>
            </Box>

            {/* RIGHT CONTENT */}
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: 16 }}>
                {item.name}
              </Typography>

              <Typography sx={{ fontSize: 13, color: "text.secondary" }}>
                {item.desc}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}
