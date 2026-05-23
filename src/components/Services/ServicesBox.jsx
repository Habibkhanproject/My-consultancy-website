import * as React from "react";
import { Box } from "@mui/material";
import TopServicesBoxes from "./TopServicesBoxes";
import BottomServicesBoxes from "./BottomServicesBoxes";

// import TopServicesBoxes from "./TopServicesBoxes";
// import BottomServicesBoxes from "./BottomServicesBoxes";

export default function ServicesBox() {
  const data = [
    {
      title: "FEATURED DESTINATION",
      desc: "United Kingdom",
      para: "Home to world-leading research and centuries of academic prestige.",
      btn: "160+ Universities",
      img: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
    },
    {
      desc: "USA",
      para: "Innovation and Ivy League Excellence.",
      img: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce",
    },
    {
      desc: "Canada",
      para: "Global diversity and high quality of life.",
      img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
    },
    {
      desc: "Germany",
      para: "Tuition-free education & engineering hubs.",
      img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    {
      desc: "Turkey",
      para: "A bridge between East and West.",
      img: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11",
    },
  ];

  return (
    <Box
      sx={{
        width: "98vw",
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 4, md: 6 },
      }}
    >
      <TopServicesBoxes data={[data[0], data[1]]} />
      <BottomServicesBoxes data={[data[2], data[3], data[4]]} />
    </Box>
  );
}