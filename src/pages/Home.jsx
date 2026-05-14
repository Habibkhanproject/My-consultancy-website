import { Box, Typography, Button } from "@mui/material";
import HeroSection from "../components/HeroSection";
import Boxes from "../components/Boxes";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <Box>
    <HeroSection/>
    <Boxes/>
    <AboutSection/>
    </Box>
  );
};

export default Home;