import { Box } from "@mui/material";
import React from "react";
import ServicesHeader from "../components/Services/ServicesHeader";
import ServicesBox from "../components/Services/ServicesBox";
import ServicesScholarsHub from "../components/Services/ServicesScholarsHub";
import JourneytoSuccess from "../components/Services/JourneytoSuccess";
import StartJourney from "../components/Services/StartJourney";

const Services = () => {
  return (
    <Box>
      <ServicesHeader />
      <ServicesBox/>
      <ServicesScholarsHub />
      <JourneytoSuccess />
      <StartJourney />
    </Box>
  );
};

export default Services;
