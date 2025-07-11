import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { styled, keyframes } from "@mui/system";

// React icons
import { FaReact, FaNodeJs, FaAws, FaGithub, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiSpringboot } from "react-icons/si";

// Keyframe for rotating border layer only
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Outer wrapper with rotating gradient border
const RotatingGradientBorder = styled(Box)(() => ({
  position: "relative",
  borderRadius: "16px",
  padding: "2px",
  background: "linear-gradient(45deg, #00FFFF, #8A2BE2)",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-2px",
    left: "-2px",
    right: "-2px",
    bottom: "-2px",
    zIndex: 0,
    background: "linear-gradient(45deg, #00FFFF, #8A2BE2)",
    animation: `${rotate} 5s linear infinite`,
    borderRadius: "inherit",
  },
  "&:hover::before": {
    animationPlayState: "paused",
  },
  "& > div": {
    position: "relative",
    zIndex: 1,
  },
}));

// Inner card (non-rotating)
const InnerCard = styled(Card)(() => ({
  backgroundColor: "#0F111A",
  color: "#ffffff",
  borderRadius: "16px",
  textAlign: "center",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 20px rgba(102, 255, 255, 0.3)",
  },
}));

// Icon style
const IconBox = styled(Box)({
  fontSize: "48px",
  marginBottom: "16px",
});

// Title gradient
const GradientTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: "32px",
  background: "linear-gradient(to right, #A78BFA, #38BDF8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center",
  marginBottom: "8px",
});

// Skills list
const skills = [
  {
    icon: <FaReact color="#61DBFB" />,
    title: "React.js",
    description: "Frontend and User-Interface Development.",
  },
  {
    icon: <SiNextdotjs color="#FFFFFF" />,
    title: "Next.js",
    description: "Frontend Development.",
  },
  {
    icon: <FaNodeJs color="#3C873A" />,
    title: "Node.js & Express.js",
    description: "Backend API Development.",
  },
  {
    icon: <FaAws color="#FF9900" />,
    title: "AWS",
    description: "Cloud Hosting & Deployment.",
  },
  {
    icon: <SiMongodb color="#4DB33D" />,
    title: "MongoDB",
    description: "Backend API Database Management.",
  },
  {
    icon: <FaGithub color="#FFFFFF" />,
    title: "GitHub",
    description: "Version Control & CI/CD.",
  },
  {
    icon: <SiSpringboot color="#6DB33F" />,
    title: "Spring Boot",
    description: "Java-based Backend Development.",
  },
  {
    icon: <FaDocker color="#0db7ed" />,
    title: "Docker & Kubernetes",
    description: "Containerized Scalable Deployment.",
  },
];

const ExpertiseSection = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#0B0F1A",
        padding: "60px 20px",
        minHeight: "100vh",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <GradientTitle>Expertise</GradientTitle>
      <Typography variant="subtitle1" sx={{ mb: 6 }}>
        Turning Ideas into Impact with These Skills.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid size={{xs:12,sm:6, md:4,lg:3}} key={index} >
            <RotatingGradientBorder>
              <InnerCard elevation={0}>
                <CardContent>
                  <IconBox>{skill.icon}</IconBox>
                  <Typography variant="h6" gutterBottom>
                    {skill.title}
                  </Typography>
                  <Typography variant="body2">{skill.description}</Typography>
                </CardContent>
              </InnerCard>
            </RotatingGradientBorder>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExpertiseSection;
