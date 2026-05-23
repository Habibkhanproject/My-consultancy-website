import * as React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function ServicesHeader() {
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        backgroundColor: "#f9fafb",
      }}
    >
      <Container maxWidth="md">
        {/* Small Header */}
        <Typography
          variant="overline"
          sx={{
            display: "block",
            textAlign: "center",
            color: "primary.main",
            letterSpacing: 2,
            fontWeight: 600,
            mb: 1,
          }}
        >
          OUR COMPREHENSIVE SOLUTIONS
        </Typography>

        {/* Large Header */}
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            color: "#111827",
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
            lineHeight: 1.2,
            mb: 2,
          }}
        >
          Seamless Paths to Global Education
        </Typography>

        {/* Paragraph */}
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: 1.7,
            maxWidth: 700,
            mx: "auto",
          }}
        >
          From your first inquiry to your first day on campus, we provide
          end-to-end support to ensure your academic journey is a resounding
          success.
        </Typography>
      </Container>
    </Box>
  );
}
