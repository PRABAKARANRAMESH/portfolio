import {
  Box,
  Typography,
  Container,
  Chip,
  useTheme,
  useMediaQuery,
  CardContent,
  Card,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  GraduationCap,
  BookOpen,
  School,
  Calendar,
  MapPin,
  Code,
} from "lucide-react";

const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  //   background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2, 1),
  [theme.breakpoints.up("xs")]: {
    padding: theme.spacing(3, 1.5),
  },
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4, 2),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(5, 2.5),
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(6, 3),
  },
  [theme.breakpoints.up("xl")]: {
    padding: theme.spacing(8, 4),
  },
}));

const BackgroundDecoration = styled(Box)({
  position: "absolute",
  borderRadius: "50%",
  filter: "blur(80px)",
  opacity: 0.08,
  animation: "float 6s ease-in-out infinite",
  "@keyframes float": {
    "0%, 100%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-20px)" },
  },
});

const FloatingElement = styled(Box)({
  position: "absolute",
  opacity: 0.1,
  animation: "rotate 20s linear infinite",
  "@keyframes rotate": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
});

const TitleContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(3),
  position: "relative",
  [theme.breakpoints.up("xs")]: {
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.up("sm")]: {
    marginBottom: theme.spacing(5),
  },
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(6),
  },
  [theme.breakpoints.up("lg")]: {
    marginBottom: theme.spacing(7),
  },
  [theme.breakpoints.up("xl")]: {
    marginBottom: theme.spacing(8),
  },
}));

const TitleGlow = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "200%",
  height: "200%",
  background:
    "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
  filter: "blur(40px)",
  zIndex: 0,
});

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  maxWidth: "100%",
  margin: "0 auto",

  // Mobile: Simple left-aligned timeline
  [theme.breakpoints.down("md")]: {
    paddingLeft: theme.spacing(4),
    "&::before": {
      content: '""',
      position: "absolute",
      left: theme.spacing(2),
      top: 0,
      bottom: 0,
      width: 3,
      background:
        "linear-gradient(180deg, transparent 0%, #a855f7 10%, #06b6d4 50%, #14b8a6 90%, transparent 100%)",
      borderRadius: "2px",
      boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
    },
  },

  // Tablet and Desktop: Center timeline
  [theme.breakpoints.up("md")]: {
    maxWidth: 1000,
    "&::before": {
      content: '""',
      position: "absolute",
      left: "50%",
      top: 0,
      bottom: 0,
      width: 3,
      background:
        "linear-gradient(180deg, transparent 0%, #a855f7 10%, #06b6d4 50%, #14b8a6 90%, transparent 100%)",
      transform: "translateX(-50%)",
      borderRadius: "2px",
      boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
    },
  },
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  position: "relative",
  marginBottom: theme.spacing(4),
  display: "flex",
  alignItems: "flex-start",

  // Mobile (xs): Stack vertically with left alignment
  [theme.breakpoints.down("sm")]: {
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(3),
  },

  // Small mobile (sm): Better spacing
  [theme.breakpoints.between("sm", "md")]: {
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(4),
  },

  // Tablet and up (md+): Alternating layout
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(6),
    "&:nth-of-type(odd)": {
      flexDirection: "row",
      "& .timeline-content": {
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(10),
        textAlign: "left",
        "&::before": {
          content: '""',
          position: "absolute",
          top: theme.spacing(1),
          left: -16,
          borderLeft: "16px solid rgba(30, 41, 59, 0.9)",
          borderTop: "10px solid transparent",
          borderBottom: "10px solid transparent",
        },
      },
      "& .timeline-icon": {
        order: 1,
      },
    },
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
      "& .timeline-content": {
        marginRight: theme.spacing(4),
        marginTop: theme.spacing(8),
        textAlign: "left",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: theme.spacing(1),
          right: -16,
          borderRight: "16px solid rgba(30, 41, 59, 0.9)",
          borderTop: "10px solid transparent",
          borderBottom: "10px solid transparent",
        },
      },
      "& .timeline-icon": {
        order: 1,
      },
    },
  },

  // Large desktop (lg+): More spacing
  [theme.breakpoints.up("lg")]: {
    marginBottom: theme.spacing(8),
    "&:nth-of-type(odd) .timeline-content": {
      marginLeft: theme.spacing(0),
    },
    "&:nth-of-type(even) .timeline-content": {
      marginRight: theme.spacing(0),
    },
  },
}));

const TimelineIcon = styled(Box)(({ theme }) => ({
  borderRadius: "50%",
  background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 50%, #14b8a6 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 3,
  boxShadow:
    "0 8px 24px rgba(168, 85, 247, 0.4), 0 0 0 4px rgba(15, 23, 42, 1), 0 0 0 8px rgba(168, 85, 247, 0.2)",
  transition: "all 0.3s ease",
  cursor: "pointer",
  flexShrink: 0,

  "&::before": {
    content: '""',
    position: "absolute",
    inset: -8,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #a855f7, #06b6d4, #14b8a6)",
    opacity: 0,
    transition: "opacity 0.3s ease",
    zIndex: -1,
  },

  "&:hover": {
    transform: "scale(1.1)",
    "&::before": {
      opacity: 0.3,
    },
  },

  // Mobile sizes
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    left: theme.spacing(-7.3),
    width: 38,
    height: 38,
  },

  [theme.breakpoints.between("sm", "md")]: {
    position: "absolute",
    left: theme.spacing(-9.5),
    width: 56,
    height: 56,
  },

  // Tablet and desktop
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    left: theme.spacing(59),
    width: 52,
    height: 52,
  },

  [theme.breakpoints.up("lg")]: {
    position: "absolute",
    left: theme.spacing(59),
    width: 50,
    height: 50,
  },

  [theme.breakpoints.up("xl")]: {
    width: 58,
    height: 58,
  },
}));

const TimelineContent = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(30, 41, 59, 0.9)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(71, 85, 105, 0.4)",
  borderRadius: 16,
  position: "relative",
  flex: 1,
  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    width: 0,
    height: 0,
    borderTop: "20px solid transparent",
    borderBottom: "20px solid transparent",
    transform: "translateY(-50%)",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(168, 85, 247, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)",
    borderRadius: 16,
    opacity: 0,
    transition: "opacity 0.4s ease",
  },

  "&:hover": {
    borderColor: "rgba(168, 85, 247, 0.6)",
    boxShadow:
      "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px rgba(168, 85, 247, 0.3)",
    "&::after": {
      opacity: 1,
    },
  },

  // Mobile padding and sizing
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4),
    marginTop: theme.spacing(1),
    borderRadius: 12,
    "&:hover": {
      transform: "translateY(-4px) scale(1.01)",
    },
  },

  [theme.breakpoints.between("sm", "md")]: {
    padding: theme.spacing(2.5),
    borderRadius: 14,
    "&:hover": {
      transform: "translateY(-6px) scale(1.015)",
    },
  },

  // Tablet and desktop
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(3),
    maxWidth: 420,
    "&:hover": {
      transform: "translateY(-8px) scale(1.02)",
    },
  },

  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(3.5),
    maxWidth: 450,
  },

  [theme.breakpoints.up("xl")]: {
    padding: theme.spacing(4),
    maxWidth: 480,
  },
}));

const YearBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: 16,
  backgroundColor: "rgba(15, 23, 42, 0.95)",
  border: "2px solid rgba(168, 85, 247, 0.6)",
  borderRadius: 20,
  fontSize: "0.75rem",
  fontWeight: 700,
  color: "#a855f7",
  backdropFilter: "blur(12px)",
  boxShadow: "0 8px 20px rgba(168, 85, 247, 0.2)",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
  zIndex: 2,

  // Mobile
  [theme.breakpoints.down("sm")]: {
    // top: -12,
    padding: theme.spacing(0.5, 1.5),
    fontSize: "0.7rem",
  },

  [theme.breakpoints.between("sm", "md")]: {
    // top: -14,
    padding: theme.spacing(0.75, 2),
    fontSize: "0.75rem",
  },

  // Tablet and desktop
  [theme.breakpoints.up("md")]: {
    // top: -16,
    padding: theme.spacing(1, 2.5),
    fontSize: "0.8rem",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "0.875rem",
    padding: theme.spacing(1, 2),
  },
}));

const StatusBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  left: 16,
  backgroundColor: "rgba(6, 182, 212, 0.15)",
  border: "1px solid rgba(6, 182, 212, 0.4)",
  borderRadius: 16,
  fontSize: "0.7rem",
  fontWeight: 600,
  color: "#06b6d4",
  backdropFilter: "blur(8px)",
  zIndex: 2,

  // Mobile
  [theme.breakpoints.down("sm")]: {
    // top: -12,
    padding: theme.spacing(0.5, 1.25),
    fontSize: "0.65rem",
  },

  [theme.breakpoints.between("sm", "md")]: {
    // top: -14,
    padding: theme.spacing(0.75, 1.5),
    fontSize: "0.7rem",
  },

  // Tablet and desktop
  [theme.breakpoints.up("md")]: {
    // top: -16,
    padding: theme.spacing(1, 2),
    fontSize: "0.75rem",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "0.8rem",
  },
}));

const DegreeTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  color: "#ffffff",
  marginBottom: theme.spacing(0.75),
  position: "relative",
  zIndex: 2,
  lineHeight: 1.2,

  // Mobile
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
    marginBottom: theme.spacing(0.5),
  },

  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "1.25rem",
    marginBottom: theme.spacing(0.75),
  },

  // Tablet and desktop
  [theme.breakpoints.up("md")]: {
    fontSize: "1.375rem",
    marginBottom: theme.spacing(1),
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "1.5rem",
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: "1.625rem",
  },
}));

const DegreeSubtitle = styled(Typography)(({ theme }) => ({
  color: "#06b6d4",
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  position: "relative",
  zIndex: 2,

  // Mobile
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
    marginBottom: theme.spacing(0.75),
  },

  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "0.9375rem",
    marginBottom: theme.spacing(1),
  },

  // Tablet and desktop
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
    marginBottom: theme.spacing(1.25),
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "1.0625rem",
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: "1.125rem",
  },
}));

const InstitutionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.75),
  marginBottom: theme.spacing(1.5),
  position: "relative",
  zIndex: 2,

  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(1),
  },

  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(2),
  },
}));

const InstitutionName = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#e2e8f0",
  flex: 1,

  // Mobile
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },

  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "0.9375rem",
  },

  // Tablet and desktop
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "1.0625rem",
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: "1.125rem",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  color: "#94a3b8",
  lineHeight: 1.6,
  marginBottom: theme.spacing(2),
  position: "relative",
  zIndex: 2,
  marginTop: theme.spacing(1),
  textAlign: "justify",

  // Mobile
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8125rem",
    marginBottom: theme.spacing(1.5),
    lineHeight: 1.5,
  },

  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "0.875rem",
    marginBottom: theme.spacing(1.75),
  },

  // Tablet and desktop
  [theme.breakpoints.up("md")]: {
    fontSize: "0.9375rem",
    marginBottom: theme.spacing(2.5),
    lineHeight: 1.7,
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "1rem",
  },

  [theme.breakpoints.up("xl")]: {
    fontSize: "1.0625rem",
  },
}));

const SubjectsContainer = styled(Box)(() => ({
  position: "relative",
  zIndex: 2,
}));

const SubjectsTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  color: "#e2e8f0",
  marginBottom: theme.spacing(1),
  textTransform: "uppercase",
  letterSpacing: "0.05em",

  // Mobile
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
    marginBottom: theme.spacing(0.75),
  },

  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "0.8125rem",
    marginBottom: theme.spacing(1),
  },

  // Tablet and desktop
  [theme.breakpoints.up("md")]: {
    fontSize: "0.875rem",
    marginBottom: theme.spacing(1.25),
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "0.9375rem",
  },
}));

const SubjectsGrid = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(0.75),

  [theme.breakpoints.up("sm")]: {
    gap: theme.spacing(1),
  },

  [theme.breakpoints.up("md")]: {
    gap: theme.spacing(1.25),
  },
}));

const SubjectChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "rgba(71, 85, 105, 0.4)",
  color: "#e2e8f0",
  fontWeight: 600,
  border: "1px solid rgba(71, 85, 105, 0.3)",
  transition: "all 0.3s ease",

  "&:hover": {
    backgroundColor: "rgba(168, 85, 247, 0.25)",
    borderColor: "rgba(168, 85, 247, 0.5)",
    color: "#ffffff",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 16px rgba(168, 85, 247, 0.2)",
  },

  // Mobile
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.7rem",
    height: 24,
  },

  [theme.breakpoints.between("sm", "md")]: {
    fontSize: "0.75rem",
    height: 28,
  },

  // Tablet and desktop
  [theme.breakpoints.up("md")]: {
    fontSize: "0.8125rem",
    height: 32,
  },

  [theme.breakpoints.up("lg")]: {
    fontSize: "0.875rem",
    height: 36,
  },
}));

const CGPAHighlight = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: theme.spacing(0.75),
  backgroundColor: "rgba(20, 184, 166, 0.15)",
  border: "1px solid rgba(20, 184, 166, 0.3)",
  borderRadius: 10,
  marginTop: theme.spacing(0.75),
  fontWeight: 600,
  color: "#14b8a6",

  // Mobile
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(0.5, 1.25),
    fontSize: "0.75rem",
  },

  [theme.breakpoints.between("sm", "md")]: {
    padding: theme.spacing(0.75, 1.5),
    fontSize: "0.8125rem",
  },

  // Tablet and desktop
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(1, 2),
    fontSize: "0.875rem",
    gap: theme.spacing(1),
  },
}));

const Education = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  // const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const experienceData = [
    {
      id: 1,
      degree: "Software Developer",
      subtitle: "INTERN",
      institution: "Hysas Technologies Private Limited",
      year: "01 Feb 2024 - 30 April 2024",
      status: "Completed",
     description:
    "Completed a paid internship as a frontend developer, successfully delivering a Learning Management System (LMS) project using React.js. Focused on building responsive UI components, integrating APIs, and ensuring seamless user experience. Gained hands-on experience in Agile practices and real-world product development.",
  icon: Code,
      showCGPA: false,
    },
    {
      id: 2,
      degree: "Frontend Developer",
      subtitle: "Trainee",
      institution: "Hema EnterPrise Private Limited (HEPL)",
      year: `03 Jun 2024 - ${new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
})}`,
      status: "Completed",
       description:
    "Currently contributing to frontend development using React, MUI, and Redux. Involved in building responsive, scalable UI components and integrating APIs for real-time functionality. Collaborating in an Agile environment with cross-functional teams to deliver production-ready features.",
  icon: Code,
      showCGPA: false,
    },
  ];

  const educationData = [
    {
      id: 1,
      degree: "Secondary School Education",
      subtitle: "State Board",
      institution: "Government Boys Higher Secondary School, Valavanur",
      year: "2016 - 2017",
      status: "Completed",
      description:
        "Completed secondary education with excellent academic performance and strong foundation in core subjects.",
      icon: School,
      showCGPA: false,
    },
    {
      id: 2,
      degree: "Higher Secondary Education",
      subtitle: "State Board",
      institution: "Government Boys Higher Secondary School, Valavanur",
      year: "2018 - 2019",
      status: "Completed",
      description:
        "Completed higher secondary education with strong foundation in sciences and mathematics, preparing for engineering entrance examinations.",
      icon: BookOpen,
      showCGPA: false,
    },
    {
      id: 3,
      degree: "Bachelor of Engineering",
      subtitle: "Computer Science & Engineering",
      institution: "IFET College of Engineering Villupuram",
      year: "2022 - 2026",
      status: "Completed",
      description:
        "Pursuing a comprehensive degree with focus on software development, cloud computing, and emerging technologies. Actively engaged in practical projects and research.",
      icon: GraduationCap,
      cgpa: "7.94",
      showCGPA: true,
    },
  ];

  // Dynamic icon sizing based on device
  const getIconSize = () => {
    if (isMobile) return 20;
    if (isSmallTablet) return 24;
    if (isTablet) return 28;
    return 32;
  };

  const getCalendarIconSize = () => {
    if (isMobile) return 12;
    if (isTablet) return 14;
    return 16;
  };

  const getMapIconSize = () => {
    if (isMobile) return 14;
    if (isTablet) return 16;
    return 18;
  };

  return (
    <StyledContainer>
      {/* Enhanced Background decorative elements */}
      <BackgroundDecoration
        sx={{
          top: "10%",
          left: "5%",
          width: { xs: 200, sm: 300, md: 400, lg: 500 },
          height: { xs: 200, sm: 300, md: 400, lg: 500 },
          background: "rgba(168, 85, 247, 0.1)",
          animationDelay: "0s",
        }}
      />
      <BackgroundDecoration
        sx={{
          bottom: "15%",
          right: "8%",
          width: { xs: 250, sm: 350, md: 450, lg: 600 },
          height: { xs: 250, sm: 350, md: 450, lg: 600 },
          background: "rgba(6, 182, 212, 0.08)",
          animationDelay: "2s",
        }}
      />
      <BackgroundDecoration
        sx={{
          top: "40%",
          right: "15%",
          width: { xs: 150, sm: 200, md: 300, lg: 400 },
          height: { xs: 150, sm: 200, md: 300, lg: 400 },
          background: "rgba(20, 184, 166, 0.06)",
          animationDelay: "4s",
        }}
      />

      {/* Floating geometric elements */}
      <FloatingElement
        sx={{
          top: "20%",
          left: "80%",
          width: { xs: 40, sm: 50, md: 60 },
          height: { xs: 40, sm: 50, md: 60 },
          border: "2px solid rgba(168, 85, 247, 0.2)",
          borderRadius: "50%",
        }}
      />
      <FloatingElement
        sx={{
          bottom: "30%",
          left: "10%",
          width: { xs: 30, sm: 35, md: 40 },
          height: { xs: 30, sm: 35, md: 40 },
          border: "2px solid rgba(6, 182, 212, 0.2)",
          borderRadius: "4px",
          transform: "rotate(45deg)",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 10,
          px: { xs: 1, sm: 2, md: 3 },
        }}
      >
        {/* Enhanced Title Section */}
        <TitleContainer>
          <TitleGlow />
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "1.75rem",
                sm: "2.25rem",
                md: "2.75rem",
                lg: "3.25rem",
                xl: "3.75rem",
              },
              fontWeight: 900,
              background:
                "linear-gradient(135deg, #a855f7 0%, #06b6d4 50%, #14b8a6 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: { xs: 1.5, sm: 2, md: 2.5, lg: 3 },
              position: "relative",
              zIndex: 1,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Education & Experience Journey
          </Typography>
          <Typography
            sx={{
              color: "#94a3b8",
              fontSize: {
                xs: "0.875rem",
                sm: "1rem",
                md: "1.125rem",
                lg: "1.25rem",
                xl: "1.375rem",
              },
              maxWidth: { xs: "100%", sm: 600, md: 700 },
              margin: "0 auto",
              lineHeight: 1.6,
              position: "relative",
              zIndex: 1,
              px: { xs: 1, sm: 0 },
            }}
          >
            My academic foundation that shaped my passion for technology and
            innovation
          </Typography>
        </TitleContainer>

        <Grid container spacing={3}>
          {educationData.map((edu) => {
            const IconComponent = edu.icon;
            return (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={edu.id}>
                <Card
                  sx={{
                    background: "#1e293b",
                    color: "#f1f5f9",
                    height: "100%",
                    borderRadius: 3,
                    boxShadow: 3,
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: 6, // Optional: increase shadow on hover
    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box
                      sx={{
                        backgroundColor: "#0ea5e9",
                        borderRadius: "50%",
                        padding: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 2,
                      }}
                    >
                      <IconComponent size={24} color="#fff" />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bold", color: "#94a3b8" }}
                      >
                        {edu.year}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#38bdf8" }}>
                        {edu.status}
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ px: 0 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {edu.degree}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontStyle: "italic", mb: 1 }}
                    >
                      {edu.subtitle}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ display: "flex", alignItems: "center", mb: 1 }}
                    >
                      <MapPin size={16} style={{ marginRight: 4 }} />
                      {edu.institution}
                    </Typography>
                    {edu.showCGPA && (
                      <Typography
                        variant="body2"
                        sx={{ color: "#facc15", fontWeight: "bold", mb: 1 }}
                      >
                        <GraduationCap size={16} style={{ marginRight: 4 }} />
                        CGPA: {edu.cgpa} / 10
                      </Typography>
                    )}
                    <Typography variant="body2" sx={{ color: "#cbd5e1" }}>
                      {edu.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          {/* Enhanced Timeline */}
          <TimelineContainer>
            {experienceData.reverse().map((education) => {
              const IconComponent = education.icon;
              return (
                <TimelineItem key={education.id}>
                  <TimelineIcon className="timeline-icon">
                    <IconComponent size={getIconSize()} color="white" />
                  </TimelineIcon>

                  <TimelineContent className="timeline-content">
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <YearBadge>
                        <Calendar size={getCalendarIconSize()} />
                        {education.year}
                      </YearBadge>

                      <StatusBadge>{education.status}</StatusBadge>
                    </Box>
                    <br />
                    <DegreeTitle>{education.degree}</DegreeTitle>

                    <DegreeSubtitle>{education.subtitle}</DegreeSubtitle>

                    <InstitutionContainer>
                      <MapPin size={getMapIconSize()} color="#94a3b8" />
                      <InstitutionName>{education.institution}</InstitutionName>
                    </InstitutionContainer>
                    <Description>{education.description}</Description>
                  </TimelineContent>
                </TimelineItem>
              );
            })}
          </TimelineContainer>
        </Box>
      </Container>
    </StyledContainer>
  );
};

export default Education;
