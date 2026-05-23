import { Box, Paper, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PublicIcon from "@mui/icons-material/Public";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import StarIcon from "@mui/icons-material/Star";

export default function ApplyNowRight() {
  // SECTION 1 DATA
  const sectionOne = [
    {
      icon: <SchoolIcon sx={{ color: "#1976d2" }} />,
      title: "Top Universities",
      desc: "Apply to world ranked universities with ease and guidance.",
    },
    {
      icon: <CheckCircleIcon sx={{ color: "#1976d2" }} />,
      title: "Easy Process",
      desc: "Simple and fast application process with step-by-step help.",
    },
    {
      icon: <CheckCircleIcon sx={{ color: "#1976d2" }} />,
      title: "Expert Guidance",
      desc: "Our experts guide you at every step of your journey.",
    },
  ];

  // SECTION 2 DATA
  const sectionTwo = [
    { icon: <PublicIcon />, title: "Global Access" },
    { icon: <SupportAgentIcon />, title: "24/7 Support" },
    { icon: <StarIcon />, title: "High Success Rate" },
    { icon: <SchoolIcon />, title: "Scholarships" },
  ];

  return (
    <Box>
      <Paper
        elevation={4}
        sx={{
          p: 3,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          gap: 4, // 🔥 section spacing
        }}
      >
        {/* ================= SECTION 1 ================= */}
        <Box>
          <Typography variant="h6" fontWeight={700} mb={2}>
            Why Choose Us
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5,
            }}
          >
            {sectionOne.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  gap: 2,
                  p: 2.2,
                  borderRadius: 2,
                  alignItems: "flex-start",

                  // ✅ alternating background
                  color: "#fff",
                  backgroundColor: "#222121",

                  border: "1px solid #eee",

                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 2,
                  },
                }}
              >
                <Box>{item.icon}</Box>

                <Box>
                  <Typography fontWeight={600} mb={0.5}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================= SECTION 2 ================= */}
        <Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2.5,
            }}
          >
            {sectionTwo.map((item, index) => (
              <Box
                key={index}
                sx={{
                  p: 2.5,
                  borderRadius: 2,
                  textAlign: "center",
                  border: "1px solid #eee",

                  transition: "0.3s",
                  "&:hover": {
                    boxShadow: 3,
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <Box sx={{ fontSize: 30, mb: 1 }}>{item.icon}</Box>

                <Typography fontWeight={600}>{item.title}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================= SECTION 3 ================= */}
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              p: 2.5,
              borderRadius: 2,

              // ✅ no variable, direct styling
              backgroundColor: "#e3f2fd",
              borderLeft: "5px solid #1976d2",

              alignItems: "flex-start",
            }}
          >
            <CheckCircleIcon
              sx={{
                color: "#1976d2",
                mt: "2px",
              }}
            />

            <Box>
              <Typography fontWeight={600} mb={0.5}>
                Application Guidelines
              </Typography>

              <Typography variant="body2" color="text.secondary">
                Make sure all your documents are correct before submission.
                Incomplete applications may cause delays or rejection.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
