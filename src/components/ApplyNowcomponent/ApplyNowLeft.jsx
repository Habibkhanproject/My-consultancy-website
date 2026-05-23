import {
  Box,
  Typography,
  Paper,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

export default function ApplyNowLeft() {
  return (
    <Box>
      {/* ================= HEADER ================= */}
      <Box
        sx={{
          mb: 3,
          display: "flex",
          flexDirection: "column",
          gap: 1.2,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: "#1976d2",
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          APPLICATION FORM
        </Typography>

        <Typography
          variant="h4"
          fontWeight={700}
          sx={{
            background: "black",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.2,
          }}
        >
          Apply Now for Your Future
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: "600px",
            lineHeight: 1.7,
          }}
        >
          Fill out the form below carefully to start your application process.
          Make sure all details are correct before submission.
        </Typography>
      </Box>

      {/* ================= FORM CARD ================= */}
      <Paper
        elevation={3}
        sx={{
          p: { xs: 2, sm: 3, md: 4 }, // 🔥 responsive padding
          borderRadius: 3,
          background: "linear-gradient(135deg, #f8fbff, #eef5ff)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 2, md: 3 }, // 🔥 responsive gap
          }}
        >
          {/* Row 1 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" }, // 🔥 responsive
              gap: 2.5,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={600} mb={0.8}>
                Full Name
              </Typography>
              <TextField fullWidth placeholder="Enter full name" />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={600} mb={0.8}>
                Email Address
              </Typography>
              <TextField fullWidth placeholder="Enter email" />
            </Box>
          </Box>

          {/* Row 2 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2.5,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={600} mb={0.8}>
                Phone Number
              </Typography>
              <TextField fullWidth placeholder="Enter phone number" />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={600} mb={0.8}>
                Current Qualification
              </Typography>

              <TextField
                select
                fullWidth
                defaultValue="undergraduate"
              >
                <MenuItem value="foundation">Foundation</MenuItem>
                <MenuItem value="undergraduate">Undergraduate</MenuItem>
                <MenuItem value="postgraduate">Postgraduate</MenuItem>
                <MenuItem value="phd">PhD</MenuItem>
              </TextField>
            </Box>
          </Box>

          {/* Countries */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              Desired Countries (Select multiple)
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1.5,
                p: 2,
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                backgroundColor: "#f8fbff",
              }}
            >
              {["USA", "UK", "Canada", "Australia"].map((country) => (
                <Box
                  key={country}
                  sx={{
                    border: "1px solid #dbeafe",
                    borderRadius: 2,
                    px: 1.5,
                    py: 0.5,
                    backgroundColor: "#fff",
                  }}
                >
                  <Typography fontSize={14}>{country}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Row 3 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2.5,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={600} mb={0.8}>
                Program Level
              </Typography>

              <TextField select fullWidth defaultValue="undergraduate">
                <MenuItem value="foundation">Foundation</MenuItem>
                <MenuItem value="undergraduate">Undergraduate</MenuItem>
                <MenuItem value="postgraduate">Postgraduate</MenuItem>
                <MenuItem value="phd">PhD</MenuItem>
              </TextField>
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography fontWeight={600} mb={0.8}>
                Budget Range (Annual)
              </Typography>

              <TextField select fullWidth defaultValue="10k-20k">
                <MenuItem value="5k-10k">$5,000 - $10,000</MenuItem>
                <MenuItem value="10k-20k">$10,000 - $20,000</MenuItem>
                <MenuItem value="20k-30k">$20,000 - $30,000</MenuItem>
                <MenuItem value="30k+">$30,000+</MenuItem>
              </TextField>
            </Box>
          </Box>

          {/* Button */}
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              py: 1.4,
              borderRadius: 2,
              fontWeight: 600,
              background: "linear-gradient(90deg, #1976d2, #42a5f5)",
              textTransform: "none",
              fontSize: "16px",
              width: { xs: "100%", md: "auto" }, // 🔥 responsive button
            }}
          >
            Submit Application
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}