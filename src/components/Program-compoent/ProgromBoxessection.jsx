import * as React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
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
        bgcolor: "#f5f7ff",
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, lg: 4 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        {/* FILTER BUTTONS */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 1.5,
            mb: { xs: 3, md: 5 },
          }}
        >
          {["All", "Programs", "Courses", "Services"].map((text) => (
            <Button
              key={text}
              variant="contained"
              disableElevation
              sx={{
                bgcolor: "#0058be",
                borderRadius: "999px",
                textTransform: "none",
                fontWeight: 600,
                px: 3,
                py: 1,
                fontSize: { xs: "13px", sm: "14px" },

                "&:hover": {
                  bgcolor: "#004a9f",
                },
              }}
            >
              {text}
            </Button>
          ))}
        </Box>

        {/* MAIN GRID LAYOUT */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
  
        >
          {/* LEFT CONTENT */}
          <Grid  size={{xs: 12, md: 8}}>
            <Grid container spacing={{ xs: 3, md: 3 }}>
              {leftCards.map((item, index) => (
                <Grid size={{xs: 12, md: 6}} key={index}>
                  <Box
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      bgcolor: "#fff",
                      borderRadius: "24px",
                      overflow: "hidden",
                      transition: "all 0.35s ease",

                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 18px 40px rgba(0,0,0,0.08)",
                      },
                    }}
                  >
                    {/* IMAGE */}
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        component="img"
                        src={item.img}
                        alt={item.title}
                        sx={{
                          width: "100%",
                          height: {
                            xs: 220,
                            sm: 240,
                            md: 250,
                          },
                          objectFit: "cover",
                          transition: "transform 0.5s ease",

                          "&:hover": {
                            transform: "scale(1.08)",
                          },
                        }}
                      />

                      {/* LABEL */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 16,
                          left: 16,
                          bgcolor: "#0f172a",
                          color: "#fff",
                          borderRadius: "999px",
                          px: 2,
                          py: 0.7,
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: 1,
                          }}
                        >
                          {item.labels}
                        </Typography>
                      </Box>
                    </Box>

                    {/* CONTENT */}
                    <Box
                      sx={{
                        p: { xs: 2, md: 3 },
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          lineHeight: 1.3,
                          mb: 1,
                          fontSize: {
                            xs: "1.15rem",
                            sm: "1.25rem",
                            md: "1.4rem",
                          },
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          mb: 3,
                          fontSize: "0.95rem",
                        }}
                      >
                        {item.desc}
                      </Typography>

                      {/* FEATURES */}
                      <Grid container spacing={2}>
                        {item.features.map((feature, i) => (
                          <Grid item xs={12} sm={6} key={i}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 1.5,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 40,
                                  height: 40,
                                  borderRadius: "12px",
                                  bgcolor: "#f3f7ff",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  flexShrink: 0,
                                }}
                              >
                                {feature.icon}
                              </Box>

                              <Box>
                                <Typography
                                  sx={{
                                    fontSize: "14px",
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                    mb: 0.3,
                                  }}
                                >
                                  {feature.title}
                                </Typography>

                                <Typography
                                  sx={{
                                    fontSize: "13px",
                                    color: "text.secondary",
                                  }}
                                >
                                  {feature.desc}
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>

                      {/* BUTTON */}
                      <Box sx={{ mt: "auto", pt: 3 }}>
                        <Button
                          fullWidth
                          variant="contained"
                          disableElevation
                          sx={{
                            bgcolor: "#151516",
                            borderRadius: "14px",
                            py: 1.4,
                            fontWeight: 600,
                            textTransform: "none",
                            fontSize: "15px",

                            "&:hover": {
                              bgcolor: "#000",
                            },
                          }}
                        >
                          Explore More
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* RIGHT SIDEBAR */}
          <Grid size={{xs: 12, md: 4}}>
            <Grid
              container
              spacing={{ xs: 3, md: 3 }}
            >
              <Grid size={{xs: 12, md: 12}}>
                <RightTopBox />
              </Grid>

              <Grid size={{xs:12,md:12}}>
                <RightBottomBox />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}