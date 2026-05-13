import { Box, Typography, Button, Stack, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // responsive
        alignItems: "center",
        justifyContent: "space-between",
        padding: "70px 20px",
        background: "linear-gradient(135deg, #f5f7ff, #e8f0ff)",
        gap: 4,
      }}
    >
      {/* LEFT SIDE */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            display: "inline-block",
            backgroundColor: "#fff9c4",
            padding: "6px 12px",
            borderRadius: "8px",
          }}
        >
          ACADEMIC EXPERIENCE
        </Typography>
        {/* Heading */}
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Study Abroad with
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          Scholarships
        </Typography>

        {/* Paragraph */}
        <Typography variant="body1" sx={{ mb: 3, color: "gray" }}>
          Your gateway to international education. We help you secure admissions
          and scholarships at top universities worldwide with expert guidance
        </Typography>

        {/* Buttons Row */}
        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              padding: "10px 24px", // increases height + width nicely
            }}
          >
            Apply Now
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              padding: "12px 24px", // slightly taller
              backgroundColor: "#fff", // white background
              color: "#000", // black text (important for visibility)
              "&:hover": {
                backgroundColor: "#f2f2f2",
              },
            }}
          >
            Free Consultation
          </Button>
        </Stack>

       {/* Line above boxes */}
<Box
  sx={{
    width: "100%",
    height: "3px",
    backgroundColor: "#1976d2",
    mb: 2, // space between line and boxes
  }}
/>

{/* Three Boxes (Row Layout) */}
<Stack
  direction="row"
  spacing={2}
  sx={{
    flexWrap: "wrap",
  }}
>
  <Paper
  elevation={0}
  sx={{
    p: 2,
    flex: 1,
    minWidth: "200px",
    display: "flex",
    alignItems: "center",
    gap: 2,
    backgroundColor: "#f5f5f5",
    border: "none",
  }}
>
  {/* Left Side - Icon */}
  <Box
    sx={{
      fontSize: "40px",
      color: "#1976d2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <SchoolIcon fontSize="large" />
  </Box>

  {/* Right Side - Text */}
  <Box sx={{ textAlign: "left" }}>
    {/* Big Number */}
    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
      120+
    </Typography>

    {/* Small Heading */}
    <Typography variant="body2" sx={{ color: "gray" }}>
      Total Students
    </Typography>
  </Box>
</Paper>

   <Paper
  elevation={0}
  sx={{
    p: 2,
    flex: 1,
    minWidth: "200px",
    display: "flex",
    alignItems: "center",
    gap: 2,
    backgroundColor: "#f5f5f5",
    border: "none",
  }}
>
  {/* Left Side - Icon */}
  <Box
    sx={{
      fontSize: "40px",
      color: "#1976d2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <SchoolIcon fontSize="large" />
  </Box>

  {/* Right Side - Text */}
  <Box sx={{ textAlign: "left" }}>
    {/* Big Number */}
    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
      120+
    </Typography>

    {/* Small Heading */}
    <Typography variant="body2" sx={{ color: "gray" }}>
      Total Students
    </Typography>
  </Box>
</Paper>

  <Paper
  elevation={0}
  sx={{
    p: 2,
    flex: 1,
    minWidth: "200px",
    display: "flex",
    alignItems: "center",
    gap: 2,
    backgroundColor: "#f5f5f5",
    border: "none",
  }}
>
  {/* Left Side - Icon */}
  <Box
    sx={{
      fontSize: "40px",
      color: "#1976d2",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <SchoolIcon fontSize="large" />
  </Box>

  {/* Right Side - Text */}
  <Box sx={{ textAlign: "left" }}>
    {/* Big Number */}
    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
      120+
    </Typography>

    {/* Small Heading */}
    <Typography variant="body2" sx={{ color: "gray" }}>
      Total Students
    </Typography>
  </Box>
</Paper>
</Stack>
      </Box>

      {/* RIGHT SIDE */}
      <Box
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Main Image */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
          alt="hero"
          sx={{
            width: "100%",
            maxWidth: 450,
            borderRadius: 3,
            boxShadow: 3,
          }}
        />

        {/* Floating Small Box (Top Right) */}
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            padding: 2,
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: 2,
          }}
        >
          🎓 1000+ Students Guided
        </Paper>
      </Box>
    </Box>
  );
};

export default HeroSection;
