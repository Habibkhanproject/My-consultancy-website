import * as React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Divider,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";

const fundingData = [
  {
    title: "Government Scholarships",
    desc: "Fully funded scholarships for international students based on merit and need.",
    tag: "Apply Now",
  },
  {
    title: "University Grants",
    desc: "Partial tuition fee waivers offered directly by universities for outstanding students.",
    tag: "Explore Grants",
  },
  {
    title: "Private Funding Programs",
    desc: "External organizations offering financial support for higher education abroad.",
    tag: "Check Eligibility",
  },
];

// 🎨 color palette (professional UI colors)
const colors = [
  { bar: "#1976d2", icon: "#1976d2" }, // blue
  { bar: "#2e7d32", icon: "#2e7d32" }, // green
  { bar: "#ed6c02", icon: "#ed6c02" }, // orange
];

export default function FundingOpportunitiesBox() {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexWrap: "wrap",
        px: { xs: 2, md: 8 },
        py: 2,
        mt: 2,
      }}
    >
      {fundingData.map((item, index) => {
        const theme = colors[index % colors.length]; // ✅ conditional color

        return (
          <Paper
            key={index}
            elevation={4}
            sx={{
              flex: "1 1 300px",
              borderRadius: 3,
              overflow: "hidden",
              transition: "0.3s",
              mb: 2,
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
            }}
          >
            {/* Top colored bar (dynamic) */}
            <Box
              sx={{
                height: 6,
                background: theme.bar,
              }}
            />

            {/* Header */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "#f5f7fb",
                px: 2,
                py: 1.5,
              }}
            >
              <SchoolIcon fontSize="small" sx={{ color: theme.icon }} />

              <Typography fontWeight="bold" fontSize={14}>
                Funding Opportunity
              </Typography>
            </Box>

            {/* Content */}
            <Box sx={{ p: 2.5 }}>
              <Typography fontWeight="bold" fontSize={18}>
                {item.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 1.5, lineHeight: 1.7 }}
              >
                {item.desc}
              </Typography>

              <Divider sx={{ my: 2.5 }} />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  fontWeight="bold"
                  fontSize={13}
                  color="text.secondary"
                >
                  Learn More Details
                </Typography>

                <Button
                  variant="text"
                  sx={{
                    textTransform: "none",
                    fontWeight: "bold",
                    px: 0,
                    color: theme.icon,
                  }}
                >
                  {item.tag}
                </Button>
              </Box>
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
}