import * as React from "react";
import { useEffect, useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

import { db } from "../../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export default function Journeybox() {
  const [heading,     setHeading]     = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "homepage", "journey"), (snap) => {
      if (snap.exists()) {
        const d = snap.data()?.data ?? {};
        setHeading(d?.heading     ?? "");
        setDescription(d?.description ?? "");
      }
    });

    return () => unsub();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f7ff",
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        {heading}
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3, maxWidth: 700 }}
      >
        {description}
      </Typography>

      {/* Hardcoded buttons */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems="center"
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0058be",
            width: { xs: "100%", sm: "250px" },
            padding: "12px 35px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": { backgroundColor: "#0047a3" },
          }}
        >
          Free Consultation
        </Button>

        <Button
          variant="outlined"
          sx={{
            borderColor: "#0058be",
            width: { xs: "100%", sm: "250px" },
            color: "#0058be",
            padding: "12px 35px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "10px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#eaf2ff",
              borderColor: "#0047a3",
              color: "#0047a3",
            },
          }}
        >
          Download Brochure
        </Button>
      </Stack>
    </Box>
  );
}
