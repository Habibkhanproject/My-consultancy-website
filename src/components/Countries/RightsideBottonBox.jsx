import * as React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const infoData = [
  {
    id: "01",
    text: "High quality education system with globally recognized degrees.",
  },
  {
    id: "02",
    text: "Affordable tuition fees and living costs for international students.",
  },
  {
    id: "03",
    text: "Strong career opportunities after graduation.",
  },
];

export default function RightsideBottomBox() {
  return (
    <Paper
      elevation={5}
      sx={{
        p: 3,
        borderRadius: 3,
        mt: "15px",
        minHeight: 320,

        // ⭐ professional background styling
        background: "linear-gradient(145deg, #f8faff, #eef3ff)",
        border: "1px solid rgba(25, 118, 210, 0.08)",

        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0px 10px 25px rgba(0,0,0,0.08)",
        },
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <InfoIcon color="primary" />
        <Typography fontWeight="bold" fontSize={17}>
          Why Study Here
        </Typography>
      </Box>

      {/* List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
        {infoData.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              gap: 1.5,
              alignItems: "flex-start",
              padding: "6px 0",
            }}
          >
            {/* Number */}
            <Typography
              fontWeight="bold"
              color="primary"
              sx={{
                minWidth: 30,
                fontSize: "15px",
              }}
            >
              {item.id}
            </Typography>

            {/* Text */}
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                lineHeight: 1.6,
                fontSize: "13.5px",
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 3,
          borderRadius: 2,
          textTransform: "none",
          fontWeight: "bold",
          py: 1.2,
          fontSize: "14px",
        }}
      >
        Explore More
      </Button>
    </Paper>
  );
}