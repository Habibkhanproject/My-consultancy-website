import * as React from "react";
import { Box, Grid, Typography, Button, Avatar } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

export default function StartJourney() {
  const theme = useTheme();

  // ✅ CONDITIONAL COLORS
  const textColor =
    theme.palette.mode === "dark" ? "#ffffff" : "#ffffff";

  const subTextColor =
    theme.palette.mode === "dark"
      ? alpha("#ffffff", 0.75)
      : alpha("#ffffff", 0.75);

  const cardBg =
    theme.palette.mode === "dark"
      ? alpha("#ffffff", 0.08)
      : "#ffffff";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",

        mx: { xs: 2, md: 8 },
        my: { xs: 6, md: 10 },

        // 🔥 DARK GRADIENT BACKGROUND
        background: "linear-gradient(135deg, #021a31, #051c69)",

        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 6 },

        borderRadius: 4,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px" }}>
        
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">

          {/* ================= LEFT SIDE ================= */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                pr: { md: 4 },
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ color: textColor }}
              >
                Start Your Journey Today
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: subTextColor,
                  lineHeight: 1.8,
                }}
              >
                Begin your learning journey with confidence. We provide structured
                guidance, modern tools, and expert support to help you achieve your
                goals efficiently and effectively.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                
                {/* PRIMARY BUTTON (LIGHT ON DARK) */}
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ffffff",
                    color: "#0f172a",
                    "&:hover": {
                      backgroundColor: alpha("#ffffff", 0.9),
                    },
                  }}
                >
                  Get Started
                </Button>

                {/* OUTLINED BUTTON (WHITE BORDER) */}
                <Button
                  variant="outlined"
                  sx={{
                    color: "#ffffff",
                    borderColor: alpha("#ffffff", 0.5),
                    "&:hover": {
                      borderColor: "#ffffff",
                      backgroundColor: alpha("#ffffff", 0.08),
                    },
                  }}
                >
                  Learn More
                </Button>

              </Box>
            </Box>
          </Grid>

          {/* ================= RIGHT SIDE ================= */}
          <Grid size={{ xs: 12, md: 5 }}>
            
            <Box
              sx={{
                backgroundColor: alpha("#ffffff", 0.1), // 🔥 glass effect
                borderRadius: 4,
                p: 3,
                backdropFilter: "blur(10px)", // glassmorphism
                boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
              }}
            >

              <Grid container spacing={2} justifyContent="center">

                {/* CARD 1 */}
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      textAlign: "center",
                      backgroundColor: alpha("#ffffff", 0.15),
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        backgroundColor: alpha("#ffffff", 0.25),
                      },
                    }}
                  >
                    <Avatar
                      src="https://i.pravatar.cc/100?img=1"
                      sx={{ width: 60, height: 60, mx: "auto", mb: 1 }}
                    />
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
                      Ali Khan
                    </Typography>
                    <Typography variant="caption" sx={{ color: subTextColor }}>
                      Student
                    </Typography>
                  </Box>
                </Grid>

                {/* CARD 2 */}
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      textAlign: "center",
                      backgroundColor: alpha("#ffffff", 0.2),
                      transform: "scale(1.05)",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-6px) scale(1.07)",
                      },
                    }}
                  >
                    <Avatar
                      src="https://i.pravatar.cc/100?img=2"
                      sx={{ width: 65, height: 65, mx: "auto", mb: 1 }}
                    />
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
                      Sara Ahmed
                    </Typography>
                    <Typography variant="caption" sx={{ color: subTextColor }}>
                      Developer
                    </Typography>
                  </Box>
                </Grid>

                {/* CARD 3 */}
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      textAlign: "center",
                      backgroundColor: alpha("#ffffff", 0.15),
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        backgroundColor: alpha("#ffffff", 0.25),
                      },
                    }}
                  >
                    <Avatar
                      src="https://i.pravatar.cc/100?img=3"
                      sx={{ width: 60, height: 60, mx: "auto", mb: 1 }}
                    />
                    <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
                      John Doe
                    </Typography>
                    <Typography variant="caption" sx={{ color: subTextColor }}>
                      Designer
                    </Typography>
                  </Box>
                </Grid>

              </Grid>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
}