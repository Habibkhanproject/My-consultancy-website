import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <Box>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue || 0); // ✅ safe fallback
        }}
      />
    </Box>
  );
}