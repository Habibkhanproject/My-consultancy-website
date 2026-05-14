import { Box, Typography, Paper, Stack } from "@mui/material";

const Boxes = () => {
  const dataBoxes = [
    {
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800",
      title: "Europe",
      text: "Study in top European universities",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800",
      title: "North America",
      text: "USA & Canada opportunities",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800",
      title: "Middle East",
      text: "Growing education hub",
    },
    {
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800",
      title: "Europe",
      text: "Affordable education options",
    },
    {
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800",
      title: "North America",
      text: "Top ranked universities",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "90vh" }, // ✅ better than fixed height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "white",
        px: 2,
        py: { xs: 4, md: 0 }, // ✅ spacing for mobile
      }}
    >
      {/* SMALL HEADER */}
      <Typography
        sx={{
          fontSize: "14px",
          color: "blue",
          mb: 1,
        }}
      >
        GLOBAL DESTINATIONS
      </Typography>

      {/* MAIN HEADER */}
      <Typography
        sx={{
          fontSize: { xs: "24px", sm: "32px", md: "48px" },
          fontWeight: "bold",
          mb: 4,
        }}
      >
        Featured Study Destinations
      </Typography>

      {/* 5 BOXES ROW */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {dataBoxes.map((item, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              width: {
                xs: "95%",
                sm: "180px",
                md: "230px",
              },
              height: {
                xs: "220px",
                sm: "230px",
                md: "250px",
              },
              borderRadius: 3,
              position: "relative",
              overflow: "hidden",

              // ✅ hover trigger on Paper
              "&:hover img": {
                transform: "scale(1.15)",
              },
            }}
          >
            {/* IMAGE */}
            <Box
              component="img"
              src={item.image}
              alt={item.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.6s ease",
              }}
            />

            {/* DARK OVERLAY */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.35)",
              }}
            />

            {/* TEXT */}
            <Box
              sx={{
                position: "absolute",
                bottom: 12,
                left: 12,
                color: "#fff",
                textAlign: "left",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "14px" }}>
                {item.title}
              </Typography>

              <Typography sx={{ fontSize: "11px", color: "#ddd" }}>
                {item.text}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default Boxes;
