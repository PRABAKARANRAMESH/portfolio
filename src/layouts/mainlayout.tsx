import { Box, Typography, Fade, IconButton} from "@mui/material"
import Header from "../components/header"
import Hero from "../components/hero"
import AboutMe from "../components/about"
import ExpertiseSection from "../components/expertices"
import FeaturedProjects from "../components/projects"
import EducationTimeline from "../components/educationtimeline"
import ContactMe from "../components/contectme"
import { useRef, useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";


export const MainLayout = () => {


     const contactRef = useRef<HTMLDivElement>(null);
  const [showScroll, setShowScroll] = useState(false);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  

   useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',

    }}>
        <Box sx={{ position: "sticky", top: 0, width: "100%", zIndex: 1000 }}>
           <Header />
        </Box>
        <div id="Home" >
            <Hero onContactClick={handleScrollToContact} />
        </div>
        <div id="About">
            <AboutMe />
        </div>
        <div id="Expertise">
            <ExpertiseSection />
        </div>
        <div id="Projects">
            <FeaturedProjects />
        </div>
        <div id="Education & Experience">
            <EducationTimeline />
        </div>
        <div id="Contact" ref={contactRef}>
            <ContactMe />
        </div>
        <div className="footer">
            <Box
        component="footer"
        sx={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
          color: "white",
          py: 3,
          mt: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="body2" >
        <span style={{ fontWeight: "bold",fontSize:"18px" }}>©</span> {new Date().getFullYear()} Prabakaran Ramesh. All rights reserved.
        </Typography>
      </Box>
        </div>
       
<Fade in={showScroll}>
        <IconButton
          onClick={scrollToTop}
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            backgroundColor: "primary.main",
            color: "white",
            "&:hover": { backgroundColor: "primary.dark" },
            boxShadow: 3,
            zIndex: 1000,
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Fade>
    </Box>
  )
}
