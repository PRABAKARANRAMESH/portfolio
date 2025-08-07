import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { styled, keyframes } from "@mui/system";

import {
  FaReact, FaNodeJs, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare
} from "react-icons/fa";
import {
  SiNextdotjs, SiFastapi, SiTypescript, SiRedux, SiGitlab,
  SiFigma, SiPostman, SiSwagger
} from "react-icons/si";

// Rotating border animation
const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

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

const IconBox = styled(Box)({
  fontSize: "48px",
  marginBottom: "16px",
});

const GradientTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: "32px",
  background: "linear-gradient(to right, #A78BFA, #38BDF8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center",
  marginBottom: "8px",
});

// Skills Section
const skillItems = [
  {
    icon: <FaReact color="#61DBFB" />,
    title: "React.js",
    description: "Frontend UI Development with components.",
  },
  {
    icon: <SiNextdotjs color="#FFFFFF" />,
    title: "Next.js",
    description: "Production-grade React framework.",
  },
  {
    icon: <FaNodeJs color="#3C873A" />,
    title: "Node.js & Express.js",
    description: "Backend REST APIs and Services.",
  },
  {
    icon: <SiFastapi color="#009688" />,
    title: "FastAPI",
    description: "High-performance Python API backend.",
  },
  {
    icon: <FaJsSquare color="#F7DF1E" />,
    title: "JavaScript",
    description: "Dynamic logic for the web.",
  },
  {
    icon: <SiTypescript color="#3178C6" />,
    title: "TypeScript",
    description: "Typed JavaScript for scalable apps.",
  },
  {
    icon: <FaHtml5 color="#E44D26" />,
    title: "HTML5",
    description: "Semantic structure for the web.",
  },
  {
    icon: <FaCss3Alt color="#1572B6" />,
    title: "CSS3",
    description: "Responsive, styled user interfaces.",
  },
  {
    icon: <SiRedux color="#764ABC" />,
    title: "Redux",
    description: "State management for React apps.",
  },
];

// Tools Section
const toolItems = [
  {
    icon: <FaGithub color="#FFFFFF" />,
    title: "GitHub",
    description: "Code hosting and collaboration.",
  },
  {
    icon: <SiGitlab color="#FC6D26" />,
    title: "GitLab",
    description: "CI/CD & repo management.",
  },
  {
    icon: <SiFigma color="#F24E1E" />,
    title: "Figma",
    description: "Design and UI prototyping.",
  },
  {
    icon: <SiPostman color="#FF6C37" />,
    title: "Postman",
    description: "API testing and debugging.",
  },
  {
    icon: <SiSwagger color="#85EA2D" />,
    title: "Swagger",
    description: "API documentation and testing.",
  },
];

const ExpertiseSection = () => {
  return (
    <Box
      sx={{
        padding: "60px 20px",
        minHeight: "100vh",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <GradientTitle>Expertise</GradientTitle>
      <Typography variant="subtitle1" sx={{ mb: 6 }}>
        Turning Ideas into Impact with These Skills & Tools.
      </Typography>

      {/* Skills Section */}
      <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, color: "#38BDF8" }}>
        Skills
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {skillItems.map((skill, index) => (
          <Grid size={{xs: 12, sm: 6, md: 4, lg: 3}} key={index}>
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

      {/* Tools Section */}
      <Typography variant="h5" sx={{ mt: 10, mb: 4, fontWeight: 600, color: "#A78BFA" }}>
        Tools
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {toolItems.map((tool, index) => (
          <Grid size={{xs: 12, sm: 6, md: 4, lg: 3}}  key={index}>
            <RotatingGradientBorder>
              <InnerCard elevation={0}>
                <CardContent>
                  <IconBox>{tool.icon}</IconBox>
                  <Typography variant="h6" gutterBottom>
                    {tool.title}
                  </Typography>
                  <Typography variant="body2">{tool.description}</Typography>
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
