import React from "react";
import { Box, Typography, Paper, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import BasicRating from "../icons/BasicRating";
import zarak from "../assets/images/zarakimage.jpg";
import habib from "../assets/images/habibimage.jpg";

const data = [
  {
    icon: <BasicRating />,
    name: "Zarak Khan",
    role: "Student Consultant",
    desc: "The team at Global Scholars Hub made my dream of studying in Germany a reality. Their scholarship guidance was exceptional.",
    img: zarak,
  },
  {
    icon: <BasicRating />,
    name: "Habib Ullah",
    role: "IELTS Student",
    desc: "I applied for Canada with low expectations, but their visa success rate isn't just a number—they truly know the system inside out.",
    img: habib,
  },
  {
    icon: <BasicRating />,
    name: "Sara Ahmed",
    role: "Scholarship Student",
    desc: "They helped me secure a fully-funded PhD in the USA. From GRE preparation to mock interviews, they were with me every step.",
    img: "https://i.pravatar.cc/150?img=7",
  },
];

const MainSection = () => {
  return (
    <Box sx={{ py: 10, px: 3, textAlign: "center", bgcolor: "#f2f4f6" }}>
      
      {/* Small Header */}
      <Typography sx={{ color: "#1976d2", fontWeight: 600 }}>
        SUCCESS STORIES
      </Typography>

      {/* Large Header */}
      <Typography variant="h3" fontWeight={700} mt={4} mb={6}>
        Hear from our Scholars
      </Typography>

      {/* CONTAINER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" }, // ✅ responsive
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          mt: 7,
        }}
      >
        {data.map((item, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              width: { xs: "100%", sm: 340, md: 360 }, // ✅ responsive width
              p: { xs: 2, sm: 3 }, // ✅ responsive padding
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
              {item.icon}
            </Box>

            {/* PARAGRAPH */}
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                lineHeight: 2,
                fontSize: { xs: "0.9rem", sm: "0.95rem" }, // ✅ responsive text
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
                mt: { xs: 2, sm: 4 }, // ✅ responsive spacing
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