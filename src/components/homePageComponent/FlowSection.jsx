import React, { useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import ArticleIcon from "@mui/icons-material/Article";
import SchoolIcon from "@mui/icons-material/School";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

import { db } from "../../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";

const icons = [
  <ForumIcon sx={{ fontSize: 32 }} />,
  <ArticleIcon sx={{ fontSize: 32 }} />,
  <SchoolIcon sx={{ fontSize: 32 }} />,
  <AirplanemodeActiveIcon sx={{ fontSize: 32 }} />,
];

const EMPTY_STEPS = [
  { id: "1", title: "", subtitle: "" },
  { id: "2", title: "", subtitle: "" },
  { id: "3", title: "", subtitle: "" },
  { id: "4", title: "", subtitle: "" },
];

const FlowSection = () => {
  const [sectionLabel,   setSectionLabel]   = useState("");
  const [sectionHeading, setSectionHeading] = useState("");
  const [steps,          setSteps]          = useState(EMPTY_STEPS);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "homepage", "flow"), (snap) => {
      if (snap.exists()) {
        const d = snap.data()?.data ?? {};

        setSectionLabel(d?.headings?.sectionLabel   ?? "");
        setSectionHeading(d?.headings?.sectionHeading ?? "");
        setSteps(Array.isArray(d?.steps) ? d.steps : EMPTY_STEPS);
      }
    });

    return () => unsub();
  }, []);

  return (
    <Box sx={{ py: 10, textAlign: "center" }}>
      {/* Header */}
      <Typography sx={{ color: "#1976d2", fontWeight: 600 }}>
        {sectionLabel}
      </Typography>
      <Typography
        fontWeight={700}
        mb={15}
        sx={{
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
        }}
      >
        {sectionHeading}
      </Typography>

      {/* Main Flow Container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          position: "relative",
          flexWrap: "wrap",
          gap: 10,
          paddingTop: 7,
        }}
      >
        {/* CENTER LINE */}
        <Box
          sx={{
            display: { xs: "none", md: "block" },
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

        {steps.map((item, index) => (
          <Box
            key={item.id}
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
                mb: 4,
              }}
            >
              {/* Circular Box */}
              <Paper
                elevation={4}
                sx={{
                  width: 105,
                  height: 105,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                  backgroundColor: "white",
                  color: "black",
                  fontSize: 32,
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
                {icons[index] ?? <ForumIcon sx={{ fontSize: 32 }} />}
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
                {index + 1}
              </Box>
            </Box>

            {/* Title */}
            <Typography
              variant="subtitle1"
              fontWeight={1000}
              mt={2}
              sx={{
                mb: 1,
                color: "#0f172a",
                letterSpacing: "0.3px",
              }}
            >
              {item.title}
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                mt: 1,
                lineHeight: 1.6,
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
