import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", p: 2, bgcolor: "#1976d2", color: "white", mt: 5 }}>
      <Typography>
        © 2026 Consultancy Website. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;