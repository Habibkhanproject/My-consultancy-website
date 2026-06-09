import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Avatar } from "@mui/material";
import BasicRating from "../../icons/BasicRating";

import { db } from "../../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";

const EMPTY_TESTIMONIALS = [
  { id: "1", name: "", role: "", desc: "", img: "" },
  { id: "2", name: "", role: "", desc: "", img: "" },
  { id: "3", name: "", role: "", desc: "", img: "" },
];

const MainSection = () => {
  const [sectionLabel,   setSectionLabel]   = useState("");
  const [sectionHeading, setSectionHeading] = useState("");
  const [testimonials,   setTestimonials]   = useState(EMPTY_TESTIMONIALS);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "homepage", "testimonials"), (snap) => {
      if (snap.exists()) {
        const d = snap.data()?.data ?? {};

        setSectionLabel(d?.headings?.sectionLabel     ?? "");
        setSectionHeading(d?.headings?.sectionHeading ?? "");
        setTestimonials(Array.isArray(d?.cards) ? d.cards : EMPTY_TESTIMONIALS);
      }
    });

    return () => unsub();
  }, []);

  return (
    <Box sx={{ py: 10, px: 3, textAlign: "center", bgcolor: "#f2f4f6" }}>

      {/* Small Header */}
      <Typography sx={{ color: "#1976d2", fontWeight: 600 }}>
        {sectionLabel}
      </Typography>

      {/* Large Header */}
      <Typography variant="h3" fontWeight={700} mt={4} mb={6}>
        {sectionHeading}
      </Typography>

      {/* CONTAINER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          mt: 7,
        }}
      >
        {testimonials.map((item, index) => (
          <Paper
            key={item.id}
            elevation={3}
            sx={{
              width: { xs: "100%", sm: 340, md: 360 },
              p: { xs: 2, sm: 3 },
              borderRadius: 4,
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: { xs: 220, sm: 200 },
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            {/* ICON */}
            <Box sx={{ display: "flex", mt: { xs: 0, sm: 1 }, mb: 2 }}>
              <BasicRating />
            </Box>

            {/* PARAGRAPH */}
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                lineHeight: 2,
                fontSize: { xs: "0.9rem", sm: "0.95rem" },
              }}
            >
              {item.desc}
            </Typography>

            {/* PROFILE SECTION */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mt: { xs: 2, sm: 4 },
                borderTop: "1px solid #e5e7eb",
                pt: 2,
              }}
            >
              <Avatar src={item.img} sx={{ width: 50, height: 50 }} />

              <Box>
                <Typography fontWeight={700}>
                  {item.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {item.role}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default MainSection;
