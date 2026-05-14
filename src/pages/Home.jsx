import { Box, Typography, Button } from "@mui/material";
import HeroSection from "../components/HeroSection";
import Boxes from "../components/Boxes";
import AboutSection from "../components/AboutSection";
import FlowSection from "../components/FlowSection";

const Home = () => {
  return (
    <Box>
    <HeroSection/>
    <Boxes/>
    <AboutSection/>
    <FlowSection/>
    </Box>
  );
};

export default Home;