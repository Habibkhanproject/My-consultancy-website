import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  TextField,
  MenuItem,
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import LanguageIcon from "@mui/icons-material/Language";
import PersonIcon from "@mui/icons-material/Person";
import RightTopBox from "./RightTopBox";
import RightBottomBox from "./RightBottomBox";

export default function ProgramBoxesSection() {
  const leftCards = [
    {
      title: "B.Sc. Artificial Intelligence",
      desc: "Technical University of Munich • Germany",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      labels: "BACHELOR",
      features: [
        {
          icon: <SchoolIcon sx={{ color: "#0058be" }} />,
          title: "Duration",
          desc: "4 Years",
        },
        {
          icon: <StarIcon sx={{ color: "#0058be" }} />,
          title: "GPA Required",
          desc: "3.7 / 4.0",
        },
        {
          icon: <LanguageIcon sx={{ color: "#0058be" }} />,
          title: "Global Access",
          desc: "Study worldwide",
        },
        {
          icon: <PersonIcon sx={{ color: "#0058be" }} />,
          title: "AI Labs",
          desc: "Advanced research",
        },
      ],
    },
    {
      title: "M.A. Global Business & Strategy",
      desc: "University of Melbourne • Australia",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      labels: "MASTER",
      features: [
        {
          icon: <SchoolIcon sx={{ color: "#0058be" }} />,
          title: "Duration",
          desc: "2 Years",
        },
        {
          icon: <StarIcon sx={{ color: "#0058be" }} />,
          title: "GPA Required",
          desc: "3.5 / 4.0",
        },
        {
          icon: <LanguageIcon sx={{ color: "#0058be" }} />,
          title: "Global Exposure",
          desc: "International study",
        },
        {
          icon: <PersonIcon sx={{ color: "#0058be" }} />,
          title: "Internships",
          desc: "Industry partners",
        },
      ],
    },
    {
      title: "B.Eng. Software Engineering",
      desc: "University of Waterloo • Canada",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      labels: "BACHELOR",
      features: [
        {
          icon: <SchoolIcon sx={{ color: "#0058be" }} />,
          title: "Duration",
          desc: "4 Years",
        },
        {
          icon: <StarIcon sx={{ color: "#0058be" }} />,
          title: "Co-op Program",
          desc: "Paid internships",
        },
        {
          icon: <LanguageIcon sx={{ color: "#0058be" }} />,
          title: "Ranking",
          desc: "Top Engineering School",
        },
        {
          icon: <PersonIcon sx={{ color: "#0058be" }} />,
          title: "Projects",
          desc: "Real-world builds",
        },
      ],
    },
    {
      title: "M.Sc. Molecular Biotechnology",
      desc: "Uppsala University • Sweden",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
      labels: "MASTER",
      features: [
        {
          icon: <SchoolIcon sx={{ color: "#0058be" }} />,
          title: "Duration",
          desc: "2 Years",
        },
        {
          icon: <StarIcon sx={{ color: "#0058be" }} />,
          title: "Research",
          desc: "Lab-based studies",
        },
        {
          icon: <LanguageIcon sx={{ color: "#0058be" }} />,
          title: "Global Access",
          desc: "EU programs",
        },
        {
          icon: <PersonIcon sx={{ color: "#0058be" }} />,
          title: "Lab Training",
          desc: "Advanced biotech",
        },
      ],
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        px: { xs: 1.5, sm: 3, md: 4 },
        py: { xs: 2, md: 4 },
        bgcolor: "#f5f7ff",
      }}
    >
      <Box sx={{ maxWidth: 1300, mx: "auto" }}>
        
        {/* BUTTONS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 1, sm: 2 },
            mb: { xs: 2, md: 4 },
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {["All", "Programs", "Courses", "Services"].map((text) => (
            <Button
              key={text}
              variant="contained"
              sx={{
                borderRadius: 20,
                bgcolor: "#0058be",
                px: { xs: 2, sm: 3 },
                fontSize: { xs: 12, sm: 14 },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>

        {/* MAIN LAYOUT */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 7 },
            alignItems: "stretch",
          }}
        >
          
          {/* LEFT SIDE */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 70%" },
              width: "100%",
              maxWidth: { md: "820px" },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr",
                  md: "1fr 1fr",
                },
                gap: { xs: 2, sm: 2, md: 1.5 },
              }}
            >
              {leftCards.map((item, index) => (
                <Box key={index}>
                  <Box
                    sx={{
                      borderRadius: 3,
                      bgcolor: "#fff",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    {/* IMAGE */}
                    <Box sx={{ position: "relative" }}>
                      <Box
                        sx={{
                          width: "100%",
                          height: { xs: 160, sm: 180, md: 200 },
                          overflow: "hidden",
                          borderRadius: 2,
                          mb: 2,
                        }}
                      >
                        <Box
                          component="img"
                          src={item.img}
                          sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            transition: "0.4s ease",
                            "&:hover": { transform: "scale(1.1)" },
                          }}
                        />
                      </Box>

                      <Box
                        sx={{
                          position: "absolute",
                          top: 12,
                          left: 12,
                          bgcolor: "#0f172a",
                          color: "#fff",
                          px: 2,
                          py: 0.6,
                          borderRadius: "999px",
                        }}
                      >
                        <Typography sx={{ fontSize: "12px", fontWeight: 700 }}>
                          {item.labels}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="h5"
                      fontWeight="bolder"
                      sx={{
                        pl: 2,
                        fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography variant="body2" sx={{ mb: 2, pl: 2 }}>
                      {item.desc}
                    </Typography>

                    {/* FEATURES */}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: {
                          xs: "1fr",
                          sm: "1fr 1fr",
                        },
                        mb: 2,
                      }}
                    >
                      {item.features.map((f, i) => (
                        <Box
                          key={i}
                          sx={{
                            p: { xs: 1.5, md: 2 },
                            display: "flex",
                            gap: 1.5,
                          }}
                        >
                          {f.icon}
                          <Box>
                            <Typography fontWeight="bold" fontSize={14}>
                              {f.title}
                            </Typography>
                            <Typography fontSize={12} color="text.secondary">
                              {f.desc}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>

                    <Box sx={{ mt: "auto", p: 2 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{ bgcolor: "#151516" }}
                      >
                        Explore More
                      </Button>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* RIGHT SIDE */}
          <Box
            sx={{
              flex: { xs: "1 1 100%", md: "0 0 28%" },
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row", md: "column" },
              gap: { xs: 2, md: 3 },
            }}
          >
            <RightTopBox />
            <RightBottomBox />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}