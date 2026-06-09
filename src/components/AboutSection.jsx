import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Paper, Stack } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";
import LanguageIcon from "@mui/icons-material/Language";

import { db } from "../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";

const AboutSection = () => {
  const [aboutData, setAboutData] = useState({
    headings: {
      sectionLabel: "",
      sectionHeading: "",
    },
    undergraduate: {
      title: "",
      description: "",
    },
    masters: {
      title: "",
      description: "",
    },
    phd: {
      title: "",
      description: "",
    },
    language: {
      title: "",
      description: "",
    },
  });

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "homepage", "about"), (snap) => {
      if (snap.exists()) {
        const d = snap.data()?.data ?? {};

        setAboutData({
          headings: {
            sectionLabel:   d?.headings?.sectionLabel   ?? "",
            sectionHeading: d?.headings?.sectionHeading ?? "",
          },
          undergraduate: {
            title:       d?.undergraduate?.title       ?? "",
            description: d?.undergraduate?.description ?? "",
          },
          masters: {
            title:       d?.masters?.title       ?? "",
            description: d?.masters?.description ?? "",
          },
          phd: {
            title:       d?.phd?.title       ?? "",
            description: d?.phd?.description ?? "",
          },
          language: {
            title:       d?.language?.title       ?? "",
            description: d?.language?.description ?? "",
          },
        });
      }
    });

    return () => unsub();
  }, []);

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
        {aboutData.headings.sectionLabel}
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
        {aboutData.headings.sectionHeading}
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
            minHeight: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#131b2e",
          }}
        >
          <Box>
            <SchoolIcon sx={{ fontSize: 60, color: "#4dabff", mb: 2 }} />

            <Typography
              variant="h4"
              fontWeight={700}
              sx={{ color: "#f8fafc", mb: 2 }}
            >
              {aboutData.undergraduate.title}
            </Typography>

            <Typography
              variant="body1"
              mb={4}
              lineHeight={1.8}
              sx={{ color: "#cbd5e1" }}
            >
              {aboutData.undergraduate.description}
            </Typography>
          </Box>

          {/* Hardcoded buttons */}
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              sx={{ borderRadius: 3, padding: "8px 20px", fontSize: "14px" }}
            >
              4 Year Program
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderRadius: 3,
                padding: "8px 20px",
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
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>

          {/* Top Two Boxes */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            {/* Masters Box */}
            <Paper elevation={3} sx={{ flex: 1, padding: 3, borderRadius: 4, minHeight: "240px" }}>
              <WorkspacePremiumIcon sx={{ fontSize: 45, color: "#1976d2", mb: 2 }} />
              <Typography variant="h6" fontWeight={700} mb={2}>
                {aboutData.masters.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                {aboutData.masters.description}
              </Typography>
            </Paper>

            {/* PhD Box */}
            <Paper elevation={3} sx={{ flex: 1, padding: 3, borderRadius: 4, minHeight: "240px" }}>
              <GroupsIcon sx={{ fontSize: 45, color: "#1976d2", mb: 2 }} />
              <Typography variant="h6" fontWeight={700} mb={2}>
                {aboutData.phd.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                {aboutData.phd.description}
              </Typography>
            </Paper>
          </Box>

          {/* Language Box */}
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
              minHeight: "150px",
              backgroundColor: "#2170e4",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight={700}
                mb={2}
                sx={{ color: "#ffffff", letterSpacing: "0.5px" }}
              >
                {aboutData.language.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#e2e8f0", lineHeight: 1.8, maxWidth: "500px" }}
              >
                {aboutData.language.description}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2 }}>
              <LanguageIcon sx={{ fontSize: 40, color: "#e8e9eb" }} />
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
