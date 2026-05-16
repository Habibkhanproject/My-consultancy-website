import { Box, Typography, Button } from "@mui/material";
import HeroSection from "../components/HeroSection";
import Boxes from "../components/Boxes";
import AboutSection from "../components/AboutSection";
import FlowSection from "../components/FlowSection";
import MainSection from "../components/MainSection ";
import AccordionExpandDefault from "../components/AccordionExpandDefault";
import Journeybox from "../components/Journeybox";

const Home = () => {
  return (
    <Box>
    <HeroSection/>
    <Boxes/>
    <AboutSection/>
    <FlowSection/>
    <MainSection/>
    <AccordionExpandDefault/>
    <Journeybox/>
    </Box>
  );
};

export default Home;