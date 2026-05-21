import * as React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function CountriesBoxes() {
  const data = [
    {
      title: "FEATURED DESTINATION",
      desc: "United Kingdom",
      para: "Home to world-leading research and centuries of academic prestige.",
      btn: "160+ Universities",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    },
    {
     
      desc: "USA",
      para: "Innovation and Ivy League Excellence.",
     
      img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
    },
    {
    
      desc: "Canada",
      para: "Global diversity and high quality of life.",
     
      img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
    },
    {
      desc: "Germany",
      para: "Tuition-free education & engineering hubs.",
      img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    {
      desc: "Turkey",
      para: "A bridge between East and West.",
      img: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11",
    },
  ];

  return (
    <Box
      sx={{
        width: "98vw",
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 4, md: 6 },
      }}
    >
      {/* ROW 1 */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "6fr 3fr",
          },
          gap: { xs: 2, md: 3 },
          mb: 3,
        }}
      >
        {[data[0], data[1]].map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 3,
              height: { xs: 240, sm: 300, md: 300 },
              cursor: "pointer",
            }}
          >
            {/* IMAGE + GRADIENT WRAPPER */}
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Box
                component="img"
                src={item.img}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.5s",
                  "&:hover": {
                    transform: "scale(1.15)",
                  },
                }}
              />

              {/* 🔥 BLACK GRADIENT OVERLAY */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.75))",
                  pointerEvents: "none",
                }}
              />
            </Box>

            {/* 🔥 SAME POSITION OVERLAY (ONLY CONTENT UPGRADED) */}
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: 16,
                color: "#fff", // (fixed for visibility on dark gradient)
                py: 1.5,
                px: 2.5,
                borderRadius: 3,
                maxWidth: 300,
                width: "80%",
              }}
            >
              <Typography fontWeight="bold" fontSize={16}>
                {item.title}
              </Typography>

              <Typography sx={{ fontSize: "21px", fontWeight: "bold" }}>
                {item.desc}
              </Typography>

              <Typography fontSize={11} sx={{ opacity: 0.85, mt: 0.5 }}>
                {item.para}
              </Typography>

              {item.btn && (
                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 10,
                    px: 1.5,
                    py: 0.5,
                    display: "inline-block",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.7)",
                    borderRadius: "6px",
                    cursor: "pointer",
                    textTransform: "none",
                    transition: "0.3s",
                    "&:hover": {
                      borderColor: "#fff",
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  {item.btn}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {/* ROW 2 */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
          gap: { xs: 2, md: 3 },
        }}
      >
        {[data[2], data[3], data[4]].map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 3,
              height: { xs: 220, sm: 260, md: 300 },
              cursor: "pointer",
            }}
          >
            {/* IMAGE + GRADIENT WRAPPER */}
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Box
                component="img"
                src={item.img}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "0.5s",
                  "&:hover": {
                    transform: "scale(1.15)",
                  },
                }}
              />

              {/* 🔥 BLACK GRADIENT OVERLAY */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.75))",
                  pointerEvents: "none",
                }}
              />
            </Box>

            {/* 🔥 TRANSPARENT GLASS OVERLAY (UNCHANGED POSITION) */}
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: 16,
                color: "#fff",
                px: 2,
                py: 1.5,
                borderRadius: 2,
                maxWidth: 220,
              }}
            >
              <Typography fontWeight="bold" fontSize={16}>
                {item.title}
              </Typography>

              <Typography sx={{ fontSize: "21px", fontWeight: "bold" }}>
                {item.desc}
              </Typography>

              <Typography fontSize={10} sx={{ opacity: 0.85 }}>
                {item.para}
              </Typography>

              {item.btn && (
                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 10,
                    px: 1.5,
                    py: 0.5,
                    display: "inline-block",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.7)",
                    borderRadius: "6px",
                    cursor: "pointer",
                    textTransform: "none",
                    transition: "0.3s",
                    "&:hover": {
                      borderColor: "#fff",
                      bgcolor: "rgba(255,255,255,0.1)",
                    },
                  }}
                >
                  {item.btn}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
