import React from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Stack,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LanguageIcon from '@mui/icons-material/Language';

const AboutSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: "40px 20px", md: "80px 60px" },
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Small Header */}
      <Typography
        variant="subtitle2"
        sx={{
          color: "#1976d2",
          fontWeight: 600,
          mb: 1,
          textTransform: "uppercase",
        }}
      >
        DIVERSE OPPORTUNITIES
      </Typography>

      {/* Large Header */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: 5,
          maxWidth: "700px",
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        Academic Programs We Cover
      </Typography>

      {/* Main Layout */}
      <Box
        sx={{
          display: "flex",
          gap: 4,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
 {/* Left Side Box */}
<Paper
  elevation={3}
  sx={{
    flex: 1,
    padding: 4,
    borderRadius: 4,
    minHeight: "400px", // increase height a little
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // pushes buttons downward
    backgroundColor: "#131b2e",
  }}
>
  <Box>
    <SchoolIcon
      sx={{
        fontSize: 60,
        color: "#4dabff",
        mb: 2,
      }}
    />

    <Typography
      variant="h4"
      fontWeight={700}
      sx={{
        color: "#f8fafc",
        mb: 2, // small gap between header and paragraph
      }}
    >
     Undergraduate (BS)
    </Typography>

    <Typography
      variant="body1"
      color="text.secondary"
      mb={4}
      lineHeight={1.8}
      sx={{
        color: "#cbd5e1",
      }}
    >
      Embark on your academic journey with fully-funded undergraduate programs in high-demand fields like Engineering, AI, and Medicine.
    </Typography>
  </Box>

  {/* Buttons */}
  <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
    <Button
      variant="contained"
      sx={{
        borderRadius: 3,
        padding: "8px 20px", // reduced button size
        fontSize: "14px",
      }}
    >
      4 Year
    </Button>

    <Button
      variant="outlined"
      sx={{
        borderRadius: 3,
        padding: "8px 20px", // reduced button size
        fontSize: "14px",
        borderColor: "#4dabff",
        color: "#4dabff",
      }}
    >
      Top 50 Univ.
    </Button>
  </Stack>
</Paper>




{/* Right Side */}
<Box
  sx={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 3,
  }}
>
  {/* Top Two Boxes */}
  <Box
    sx={{
      display: "flex",
      gap: 3,
      flexDirection: { xs: "column", sm: "row" },
    }}
  >
    {/* Box 1 */}
    <Paper
      elevation={3}
      sx={{
        flex: 1,
        padding: 3,
        borderRadius: 4,
        minHeight: "240px", // increased height
      }}
    >
      <WorkspacePremiumIcon
        sx={{
          fontSize: 45,
          color: "#1976d2",
          mb: 2,
        }}
      />

      <Typography variant="h6" fontWeight={700} mb={2}>
        Master's
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        lineHeight={1.8}
      >
        Specialized research and professional degree programs across the globe.
      </Typography>
    </Paper>

    {/* Box 2 */}
    <Paper
      elevation={3}
      sx={{
        flex: 1,
        padding: 3,
        borderRadius: 4,
        minHeight: "240px", // increased height
      }}
    >
      <GroupsIcon
        sx={{
          fontSize: 45,
          color: "#1976d2",
          mb: 2,
        }}
      />

      <Typography variant="h6" fontWeight={700} mb={2}>
        PhD / MPhil
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        lineHeight={1.8}
      >
        Advanced research positions with comprehensive stipend coverage.
      </Typography>
    </Paper>
  </Box>

  {/* Bottom Full Width Box */}
  <Paper
    elevation={3}
    sx={{
      padding: 4,
      borderRadius: 4,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: { xs: "column", sm: "row" },
      gap: 3,
      minHeight: "150px", // increased height
      backgroundColor: "#2170e4",
    }}
  >
    {/* Left Content */}
   <Box>
  <Typography
    variant="h5"
    fontWeight={700}
    mb={2}
    sx={{
      color: "#ffffff",
      letterSpacing: "0.5px",
    }}
  >
    Language Courses
  </Typography>

  <Typography
    variant="body1"
    sx={{
      color: "#e2e8f0", // soft professional white
      lineHeight: 1.8,
      maxWidth: "500px",
    }}
  >
    Expert preparation for IELTS, TOEFL, and Duolingo with 8.0+ band trainers.
  </Typography>
</Box>

    {/* Right Icons */}
    <Box
      sx={{
        display: "flex",
        gap: 2,
      }}
    >
      <LanguageIcon
        sx={{
          fontSize: 40,
          color: "#e8e9eb",
        }}
      />
    </Box>
  </Paper>
</Box>
      </Box>
    </Box>
  );
};

export default AboutSection;