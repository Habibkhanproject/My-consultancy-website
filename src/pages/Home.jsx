import { Box, Typography, Button } from "@mui/material";
import HeroSection from "../components/homePageComponent/HeroSection";
import Boxes from "../components/homePageComponent/Boxes";
import AboutSection from "../components/homePageComponent/AboutSection";
import FlowSection from "../components/homePageComponent/FlowSection";
import MainSection from "../components/homePageComponent/MainSection ";
import AccordionExpandDefault from "../components/homePageComponent/AccordionExpandDefault";
import Journeybox from "../components/homePageComponent/Journeybox";

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