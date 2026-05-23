import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

export default function ServicesScholarsHub() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", px: 2 }}>
      {/* WRAPPER */}
      <Box sx={{ width: "100%", maxWidth: "1200px" }}>
        <Grid
          container
          spacing={4}
          sx={{
            minHeight: "80vh",
            alignItems: "center",
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          {/* LEFT SIDE (50%) */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <Typography
                variant="body2"
                color="primary"
                sx={{ letterSpacing: "1px", fontWeight: 500 }}
              >
                Our Services
              </Typography>

              <Typography variant="h4" fontWeight="bold" sx={{ lineHeight: 1.3 }}>
                We Provide Quality Solutions
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                We offer a wide range of services designed to help you achieve
                your goals efficiently and effectively with modern and reliable
                solutions built for your success.
              </Typography>

              {/* SERVICE CARDS */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      display: "flex",
                      borderRadius: 3,
                      overflow: "hidden",
                      border: "1px solid #e5e7eb",
                      backgroundColor: "#fff",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 25px rgba(37, 99, 235, 0.08)",
                      },
                    }}
                  >
                    <Box sx={{ width: "6px", backgroundColor: "#2563eb" }} />
                    <Box sx={{ p: 3 }}>
                      <Typography fontWeight="bold" mb={1}>
                        Fast Process
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Quick workflow results.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      display: "flex",
                      borderRadius: 3,
                      overflow: "hidden",
                      border: "1px solid #e5e7eb",
                      backgroundColor: "#fff",
                      transition: "0.3s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 25px rgba(37, 99, 235, 0.08)",
                      },
                    }}
                  >
                    <Box sx={{ width: "6px", backgroundColor: "#16a34a" }} />
                    <Box sx={{ p: 3 }}>
                      <Typography fontWeight="bold" mb={1}>
                        Expert Team
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Skilled professionals ready to help.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* RIGHT SIDE (50%) */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "relative",
                borderRadius: 5,
                overflow: "visible",
                width: "100%",
                height: { xs: 260, sm: 320, md: 420 },
              }}
            >
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                alt="services"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 5,
                }}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: -10, md: -18 },
                  right: { xs: -10, md: -18 },
                  backgroundColor: "#3f349e",
                  p: { xs: 1.2, md: 2 },
                  borderRadius: 2,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                  maxWidth: { xs: 150, md: 200 },
                  color: "#fff",
                }}
              >
                <Typography fontWeight="bold" fontSize={{ xs: "0.9rem", md: "1rem" }}>
                  10+ Years
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ opacity: 0.8, fontSize: { xs: "0.75rem", md: "0.875rem" } }}
                >
                  Experience in delivering solutions.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}