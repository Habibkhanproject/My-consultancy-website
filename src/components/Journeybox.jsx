import * as React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

export default function Journeybox() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "60vh", // 👈 reduced height (change as needed)
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f7ff", // background color stays
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Ready to Start Your Journey?
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3, maxWidth: 700 }}
      >
        Don't let financial barriers stop your academic growth. Join the
        thousands of students already studying at their dream destinations.
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }} // 👈 column on mobile, row on bigger screens
        spacing={2}
        alignItems="center"
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0058be",
            width: { xs: "100%", sm: "250px" }, // 👈 full width on mobile
            padding: "12px 35px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#0047a3" },
          }}
        >
          Free Book consultation
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderColor: "#0058be",
            width: { xs: "100%", sm: "250px" }, // 👈 responsive width
            color: "#0058be",
            padding: "12px 35px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#eaf2ff",
              borderColor: "#0047a3",
              color: "#0047a3",
            },
          }}
        >
          Download Brochure
        </Button>
      </Stack>
    </Box>
  );
}
