import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import ArticleIcon from "@mui/icons-material/Article";
import SchoolIcon from "@mui/icons-material/School";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

const data = [
  {
    icon: <ForumIcon sx={{ fontSize: 32 }} />,
    title: "Consultation",
    subtitle: "Expert profile evaluation to find the best-fit universities.",
    number: 1,
  },
  {
    icon: <ArticleIcon sx={{ fontSize: 32 }} />,
    title: "Document Review",
    subtitle: "Fine-tuning of SOPs, LORs, and academic transcripts.",
    number: 2,
  },
  {
    icon: <SchoolIcon sx={{ fontSize: 32 }} />,
    title: "Admission",
    subtitle: "Securing your offer letter and scholarship awards.",
    number: 3,
  },
  {
    icon: <AirplanemodeActiveIcon sx={{ fontSize: 32 }} />,
    title: "Visa",
    subtitle: "Comprehensive visa interview prep and filing support.",
    number: 4,
  },
];

const FlowSection = () => {
  return (
    <Box sx={{ py: 10, textAlign: "center" }}>
      {/* Header */}
      <Typography sx={{ color: "#1976d2", fontWeight: 600 }}>
        OUR SERVICES
      </Typography>
      <Typography
        fontWeight={700}
        mb={15}
        sx={{
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        What We Provide
      </Typography>

      {/* Main Flow Container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
          flexWrap: "wrap",
          gap: 10, // increased gap between items
          paddingTop: 7, // space above the flow
        }}
      >
        {/* CENTER LINE */}
        <Box
          sx={{
            display: { xs: "none", md: "block" }, // hidden on mobile & tablet, visible on laptop+
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
            {/* ICON + NUMBER WRAPPER */}
            <Box
              sx={{
                position: "relative",
                textAlign: "center",
                mb: 4, // space below circle
              }}
            >
              {/* Circular Box */}
              <Paper
                elevation={4}
                sx={{
                  width: 105, // increased from 90
                  height: 105, // increased from 90
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: 32, // slightly bigger icon
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",

                  border: "2px solid #cbd5e1",

                  "&:hover": {
                    backgroundColor: "#1259b8",
                    color: "white",
                    border: "2px solid #1976d2",
                  },
                }}
              >
                {item.icon}
              </Paper>

              {/* Bottom Number Circle */}
              <Box
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: "#fbbf24",
                  color: "#1f2937",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 700,
                  position: "absolute",
                  bottom: -12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                }}
              >
                {item.number}
              </Box>
            </Box>

            {/* Title */}
            <Typography
              variant="subtitle1"
              fontWeight={1000}
              mt={2}
              sx={{
                mb: 1,
                color: "#0f172a", // professional dark color
                letterSpacing: "0.3px",
              }}
            >
              {item.title}
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="body3"
              sx={{
                color: "text.secondary",
                mt: 1,
                lineHeight: 1.6, // better readability
              }}
            >
              {item.subtitle}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FlowSection;
