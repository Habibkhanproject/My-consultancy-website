import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert("Message submitted successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        py: 6,
        px: 2,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1200px" }}>

        {/* MAIN WRAPPER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // responsive layout
            gap: 4,
          }}
        >

          {/* ================= LEFT SIDE ================= */}
          <Paper
            elevation={3}
            sx={{
              flex: 1,
              p: 3,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <CallIcon color="primary" />
              <Typography variant="h6" fontWeight="bold">
                Contact Us
              </Typography>
            </Box>

            <Typography mt={2} color="text.secondary">
              Feel free to contact us anytime. We are here to help you with your queries.
            </Typography>

            <Typography mt={2} fontWeight="bold">
              📞 +92 300 1234567
            </Typography>

            <Typography mt={2} color="text.secondary">
              📧 support@example.com
            </Typography>
          </Paper>

          {/* ================= RIGHT SIDE ================= */}
          <Paper
            elevation={3}
            sx={{
              flex: 2,
              p: 3,
            }}
          >
            <Typography variant="h5" fontWeight="bold" mb={3}>
              Send Message
            </Typography>

            {/* INPUT ROW */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <TextField
                fullWidth
                label="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <TextField
                fullWidth
                label="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                fullWidth
                label="Your Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Box>

            {/* MESSAGE */}
            <Box sx={{ mt: 2 }}>
              <TextField
                fullWidth
                multiline
                rows={5}
                label="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Box>

            {/* BUTTON */}
            <Box sx={{ mt: 3 }}>
              <Button variant="contained" size="large" onClick={handleSubmit}>
                Send Message
              </Button>
            </Box>
          </Paper>

        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;