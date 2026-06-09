import { useEffect, useState } from "react";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";

const HeroSection = () => {
  const [heroData, setHeroData] = useState({
    badgeText: "",
    heading1: "",
    heading2: "",
    description: "",
    heroImage: "",

    stat1Number: "",
    stat1Label: "",

    stat2Number: "",
    stat2Label: "",

    stat3Number: "",
    stat3Label: "",
  });

  useEffect(() => {
    const docRef = doc(db, "homepage", "hero");

    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data()?.data ?? {};

        setHeroData({
          badgeText:   data?.badgeText   || "",
          heading1:    data?.heading1    || "",
          heading2:    data?.heading2    || "",
          description: data?.description || "",
          heroImage:   data?.heroImage   || "",

          stat1Number: data?.stat1Number || "",
          stat1Label:  data?.stat1Label  || "",

          stat2Number: data?.stat2Number || "",
          stat2Label:  data?.stat2Label  || "",

          stat3Number: data?.stat3Number || "",
          stat3Label:  data?.stat3Label  || "",
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "20px 12px", sm: "30px 15px", md: "70px 20px" },
        background: "linear-gradient(135deg, #f5f7ff, #e8f0ff)",
        gap: { xs: 3, md: 4 },
      }}
    >
      {/* LEFT SIDE */}
      <Box
        sx={{
          flex: 1,
          pr: { xs: 0, md: 6 },
          pl: { xs: 0, md: 2 },
          width: "100%",
        }}
      >
        {/* Badge */}
        {heroData.badgeText && (
          <Typography
            variant="body1"
            sx={{
              mb: 2,
              display: "inline-block",
              backgroundColor: "#fff9c4",
              padding: "6px 12px",
              borderRadius: "8px",
            }}
          >
            {heroData.badgeText}
          </Typography>
        )}

        {/* Heading 1 */}
        {heroData.heading1 && (
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "28px", sm: "34px", md: "48px" },
            }}
          >
            {heroData.heading1}
          </Typography>
        )}

        {/* Heading 2 */}
        {heroData.heading2 && (
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "28px", sm: "34px", md: "48px" },
            }}
          >
            {heroData.heading2}
          </Typography>
        )}

        {/* Description */}
        {heroData.description && (
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: "gray",
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            {heroData.description}
          </Typography>
        )}

        {/* Buttons — static text */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Button
            variant="contained"
            sx={{ borderRadius: 2, padding: "10px 24px" }}
          >
            Get Started
          </Button>

          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              padding: "12px 24px",
              backgroundColor: "#fff",
              color: "#000",
              "&:hover": { backgroundColor: "#f2f2f2" },
            }}
          >
            Learn More
          </Button>
        </Stack>

        {/* Divider Line */}
        <Box
          sx={{
            width: "100%",
            height: "3px",
            backgroundColor: "#1976d2",
            mb: 2,
          }}
        />

        {/* STATS */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ flexWrap: "wrap" }}
        >
          <Paper
            sx={{
              p: 2,
              flex: 1,
              display: "flex",
              gap: 2,
              backgroundColor: "#f5f5f5",
            }}
          >
            <SchoolIcon sx={{ color: "#1976d2" }} />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {heroData.stat1Number}
              </Typography>
              <Typography variant="body2" color="gray">
                {heroData.stat1Label}
              </Typography>
            </Box>
          </Paper>

          <Paper
            sx={{
              p: 2,
              flex: 1,
              display: "flex",
              gap: 2,
              backgroundColor: "#f5f5f5",
            }}
          >
            <GroupsIcon sx={{ color: "#1976d2" }} />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {heroData.stat2Number}
              </Typography>
              <Typography variant="body2" color="gray">
                {heroData.stat2Label}
              </Typography>
            </Box>
          </Paper>

          <Paper
            sx={{
              p: 2,
              flex: 1,
              display: "flex",
              gap: 2,
              backgroundColor: "#f5f5f5",
            }}
          >
            <EmojiEventsIcon sx={{ color: "#1976d2" }} />
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {heroData.stat3Number}
              </Typography>
              <Typography variant="body2" color="gray">
                {heroData.stat3Label}
              </Typography>
            </Box>
          </Paper>
        </Stack>
      </Box>

      {/* RIGHT SIDE */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "auto", md: "84vh" },
          mt: { xs: 3, md: 0 },
          width: "100%",
        }}
      >
        {heroData.heroImage && (
          <Box
            component="img"
            src={heroData.heroImage}
            alt="hero"
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", md: 560 },
              height: { xs: "auto", md: "100%" },
              objectFit: "cover",
              borderRadius: 3,
              boxShadow: 3,
            }}
          />
        )}

        {/* Scholarship Card */}
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: { xs: 15, md: 40 },
            right: { xs: 1, md: 1 },
            padding: "10px 12px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: 2,
            minWidth: { xs: "150px", md: "180px" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1a1a1a",
                borderRadius: "6px",
              }}
            >
              <WorkspacePremiumIcon
                sx={{ fontSize: "18px", color: "#ffd700" }}
              />
            </Box>

            <Box>
              <Typography fontWeight="bold" fontSize="13px">
                Full Scholarship
              </Typography>
              <Typography fontSize="11px" color="#cfcfcf">
                Oxford University 2024
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default HeroSection;
