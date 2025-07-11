import { Box } from "@mui/material"
import Header from "../components/header"
import Hero from "../components/hero"
import AboutMe from "../components/about"
import ExpertiseSection from "../components/expertices"
import FeaturedProjects from "../components/projects"
import EducationTimeline from "../components/educationtimeline"
import ContactMe from "../components/contectme"
import { useRef } from "react"


export const MainLayout = () => {


     const contactRef = useRef<HTMLDivElement>(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
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

    </Box>
  )
}
