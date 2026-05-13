import { Box, Typography, Button, Stack, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const HeroSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        padding: { xs: "20px 12px", sm: "30px 15px", md: "70px 20px" },
        background: "linear-gradient(135deg, #f5f7ff, #e8f0ff)",
        gap: { xs: 3, md: 4 },
      }}
    >
      {/* LEFT SIDE */}
      <Box
        sx={{
          flex: 1,
          pr: { xs: 0, md: 6 },
          pl: { xs: 0, md: 2 },
          width: "100%",
        }}
      >
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

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "28px", sm: "34px", md: "48px" },
          }}
        >
          Study Abroad with
        </Typography>

        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "28px", sm: "34px", md: "48px" },
          }}
        >
          Scholarships
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            color: "gray",
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          Your gateway to international education. We help you secure admissions
          and scholarships at top universities worldwide with expert guidance
        </Typography>

        {/* Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mb: 4 }}
        >
          <Button variant="contained" sx={{ borderRadius: 2, padding: "10px 24px" }}>
            Apply Now
          </Button>

          <Button
            variant="contained"
            sx={{
              borderRadius: 2,
              padding: "12px 24px",
              backgroundColor: "#fff",
              color: "#000",
              "&:hover": { backgroundColor: "#f2f2f2" },
            }}
          >
            Free Consultation
          </Button>
        </Stack>

        {/* Line */}
        <Box
          sx={{
            width: "100%",
            height: "3px",
            backgroundColor: "#1976d2",
            mb: 2,
          }}
        />

        {/* Three Boxes */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          {/* First Box */}
          <Paper
            elevation={0}
            sx={{
              p: 2,
              flex: 1,
              minWidth: "0",
              display: "flex",
              alignItems: "center",
              gap: 2,
              backgroundColor: "#f5f5f5",
              border: "none",
            }}
          >
            <Box sx={{ color: "#1976d2" }}>
              <SchoolIcon fontSize="large" />
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                120+
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                Total Students
              </Typography>
            </Box>
          </Paper>

          {/* Second Box */}
          <Paper
            elevation={0}
            sx={{
              p: 2,
              flex: 1,
              minWidth: "0",
              display: "flex",
              alignItems: "center",
              gap: 2,
              backgroundColor: "#f5f5f5",
              border: "none",
            }}
          >
            <Box sx={{ color: "#1976d2" }}>
              <GroupsIcon fontSize="large" />
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                120+
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                Total Students
              </Typography>
            </Box>
          </Paper>

          {/* Third Box */}
          <Paper
            elevation={0}
            sx={{
              p: 2,
              flex: 1,
              minWidth: "0",
              display: "flex",
              alignItems: "center",
              gap: 2,
              backgroundColor: "#f5f5f5",
              border: "none",
            }}
          >
            <Box sx={{ color: "#1976d2" }}>
              <EmojiEventsIcon fontSize="large" />
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                25+
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                Awards Won
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
          alignItems: "center",
          height: { xs: "auto", md: "84vh" },
          mt: { xs: 3, md: 0 },
          width: "100%",
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
          alt="hero"
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", md: 560 },
            height: { xs: "auto", md: "100%" },
            objectFit: "cover",
            borderRadius: 3,
            boxShadow: 3,
          }}
        />

        {/* Floating Box */}
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            top: { xs: 15, md: 40 },
            right: { xs: 1, md: 1 },
            padding: "10px 12px",
            backgroundColor: "#000",
            color: "#fff",
            borderRadius: 2,
            minWidth: { xs: "150px", md: "180px" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#1a1a1a",
                borderRadius: "6px",
              }}
            >
              <WorkspacePremiumIcon sx={{ fontSize: "18px", color: "#ffd700" }} />
            </Box>

            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: "13px" }}>
                Full Scholarship
              </Typography>

              <Typography sx={{ fontSize: "11px", color: "#cfcfcf" }}>
                Oxford University 2024
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default HeroSection;