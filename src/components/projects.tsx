import { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import {  
  Code2,
  Database,
  Layers
} from 'lucide-react';

import convexImage from '../assets/image/Convex.png';
import TixieImage from '../assets/image/Tixie.png';
const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: '60vh',
  // background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3, 1),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4, 2),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6, 3),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(8, 4),
  },
}));

const BackgroundDecoration = styled(Box)({
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(60px)',
  opacity: 0.1,
});

const TitleContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    marginBottom: theme.spacing(5),
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(6),
  },
  [theme.breakpoints.up('lg')]: {
    marginBottom: theme.spacing(8),
  },
}));

const FilterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(1.5),
    marginBottom: theme.spacing(5),
  },
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(2),
    marginBottom: theme.spacing(6),
  },
}));

const FilterChip = styled(Chip)(({ theme }) => ({
  backgroundColor: 'rgba(30, 41, 59, 0.4)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(71, 85, 105, 0.3)',
  color: '#94a3b8',
  fontSize: '0.875rem',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
    borderColor: 'rgba(168, 85, 247, 0.5)',
    color: '#ffffff',
    transform: 'translateY(-2px)',
  },
  '&.active': {
    backgroundColor: 'rgba(168, 85, 247, 0.3)',
    borderColor: 'rgba(168, 85, 247, 0.6)',
    color: '#ffffff',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
    padding: theme.spacing(0.5, 2),
  },
}));

const ProjectCard = styled(Paper)(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'rgba(30, 41, 59, 0.4)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(71, 85, 105, 0.3)',
  borderRadius: 16,
  overflow: 'hidden',
  height: '100%',
  minHeight: 400,
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
    borderRadius: 16,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    borderColor: 'rgba(168, 85, 247, 0.5)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(168, 85, 247, 0.2)',
    '&::before': {
      opacity: 1,
    },
    '& .project-image': {
      transform: 'scale(1.05)',
    },
  },
  [theme.breakpoints.up('sm')]: {
    minHeight: 450,
  },
  [theme.breakpoints.up('md')]: {
    minHeight: 500,
  },
  [theme.breakpoints.up('lg')]: {
    minHeight: 520,
  },
}));

const ProjectImage = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 200,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  transition: 'transform 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.up('sm')]: {
    height: 220,
  },
  [theme.breakpoints.up('md')]: {
    height: 240,
  },
  [theme.breakpoints.up('lg')]: {
    height: 260,
  },
}));

const ProjectContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2.5),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
  },
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 'bold',
  color: '#ffffff',
  marginBottom: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.375rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(1.5),
  },
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: '#94a3b8',
  lineHeight: 1.6,
  textAlign: 'justify',
  marginBottom: theme.spacing(2),
  flex: 1,
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.9375rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
    marginBottom: theme.spacing(2.5),
  },
}));

// const TechStack = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   flexWrap: 'wrap',
//   gap: theme.spacing(0.75),
//   marginBottom: theme.spacing(2),
//   [theme.breakpoints.up('sm')]: {
//     gap: theme.spacing(1),
//     marginBottom: theme.spacing(2.5),
//   },
// }));

// const TechChip = styled(Chip)(({ theme }) => ({
//   backgroundColor: 'rgba(71, 85, 105, 0.3)',
//   color: '#e2e8f0',
//   fontSize: '0.75rem',
//   height: 24,
//   '& .MuiChip-icon': {
//     fontSize: '0.875rem',
//     color: 'inherit',
//   },
//   [theme.breakpoints.up('sm')]: {
//     fontSize: '0.8125rem',
//     height: 28,
//   },
// }));

// const ProjectActions = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   gap: theme.spacing(1),
//   [theme.breakpoints.up('sm')]: {
//     gap: theme.spacing(1.5),
//   },
// }));

// const ActionButton = styled(Button)(({ theme }) => ({
//   flex: 1,
//   borderRadius: 8,
//   textTransform: 'none',
//   fontWeight: 600,
//   fontSize: '0.875rem',
//   padding: theme.spacing(1, 2),
//   transition: 'all 0.3s ease',
//   [theme.breakpoints.up('sm')]: {
//     fontSize: '0.9375rem',
//     padding: theme.spacing(1.25, 2.5),
//   },
// }));

// const PrimaryButton = styled(ActionButton)({
//   background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
//   color: 'white',
//   border: 'none',
//   '&:hover': {
//     background: 'linear-gradient(135deg, #9333ea 0%, #0891b2 100%)',
//     transform: 'translateY(-2px)',
//     boxShadow: '0 8px 20px rgba(168, 85, 247, 0.3)',
//   },
// });

// const SecondaryButton = styled(ActionButton)({
//   backgroundColor: 'transparent',
//   color: '#94a3b8',
//   border: '1px solid rgba(71, 85, 105, 0.5)',
//   '&:hover': {
//     backgroundColor: 'rgba(71, 85, 105, 0.2)',
//     borderColor: 'rgba(168, 85, 247, 0.5)',
//     color: '#ffffff',
//     transform: 'translateY(-2px)',
//   },
// });

const FeaturedProjects = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const filters = [
    { label: 'All', icon: Layers },
    { label: 'HEPL', icon: Code2 },
    { label: 'Hysas', icon: Code2 },
    { label: 'My Website', icon: Code2 },
    { label: 'Others', icon: Database }
  ];

  const projects = [
    {
      id: 1,
      title: 'Go My Exam (LMS)',
      description: 'Developed a dynamic Learning Management System (LMS) at Hysas Technologies. This platform enables organizations to create, manage, and track educational content and assessments, supporting multi-tenant architecture and role-based access for admins, faculty, and students.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Hysas',
      liveUrl: '#',
      sourceUrl: '#'
    },
    {
      id: 2,
      title: 'Convex (PM Tool)',
      description: 'Developed Convex at HEPL, a powerful project management tool tailored for handling Projects, Milestones, Tasks, and Subtasks. It facilitates real-time team collaboration, role-based access, deadline tracking, and progress monitoring to enhance organizational productivity.',
      image: convexImage,
      category: 'HEPL',
      liveUrl: '#',
      sourceUrl: '#'
    },
    {
      id: 3,
      title: 'TIXIE (Ticketing Tool)',
      description: 'Built TIXIE, an internal organizational ticketing tool that allows users to raise, assign, and resolve issues across various departments. The platform improves operational efficiency by tracking ticket statuses, priority, and resolution time while ensuring accountability and communication between teams.',
      image: TixieImage,
      category: 'HEPL',
      liveUrl: '#',
      sourceUrl: '#'
    },
    // {
    //   id: 3,
    //   title: 'KubeMERN',
    //   description: 'A simple Todo application built using the MERN stack, deployed on a Kubernetes-based microservices architecture for scalability and containerized orchestration.',
    //   image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    //   technologies: [
    //     { name: 'Kubernetes', icon: Cloud },
    //     { name: 'Docker', icon: Database },
    //     { name: 'GitHub', icon: Code2 },
    //     { name: 'React', icon: Code2 },
    //     { name: 'Node.js', icon: Server },
    //     { name: 'Express', icon: Server },
    //     { name: 'MongoDB', icon: Database }
    //   ],
    //   category: 'DevOps',
    //   liveUrl: '#',
    //   sourceUrl: '#'
    // }
  ];
  const [activeFilter, setActiveFilter] = useState('All');


  return (
    <StyledContainer>
      {/* Background decorative elements */}
      <BackgroundDecoration
        sx={{
          top: 100,
          left: 60,
          width: 400,
          height: 300,
          background: 'rgba(168, 85, 247, 0.1)',
        }}
      />
      <BackgroundDecoration
        sx={{
          bottom: 100,
          right: 60,
          width: 400,
          height: 400,
          background: 'rgba(6, 182, 212, 0.1)',
        }}
      />
      <BackgroundDecoration
        sx={{
          top: '30%',
          left: '70%',
          width: 200,
          height: 200,
          background: 'rgba(20, 184, 166, 0.1)',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Title Section */}
        <TitleContainer>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', lg: '3rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: 2,
            }}
          >
             Projects
          </Typography>
          <Typography
            sx={{
              color: '#94a3b8',
              fontSize: { xs: '1rem', sm: '1.125rem', lg: '1.25rem' },
              maxWidth: 700,
              margin: '0 auto',
            }}
          >
            A collection of my recent work across various technologies and domains. Each project represents unique challenges and solutions.
          </Typography>
        </TitleContainer>

        {/* Filter Chips */}
        <FilterContainer>
         {filters.map((filter, index) => {
  const IconComponent = filter.icon;
  const isActive = activeFilter === filter.label;

  return (
    <FilterChip
      key={index}
      icon={<IconComponent size={16} />}
      label={filter.label}
      onClick={() => setActiveFilter(filter.label)}
      className={isActive ? 'active' : ''}
    />
  );
})}
        </FilterContainer>

        {/* Projects Grid */}
        <Grid 
          container 
          spacing={{ xs: 3, sm: 4, md: 4, lg: 4 }} 
          justifyContent="center"
          alignItems="stretch"
        >
       {projects.filter((project) =>
    activeFilter === 'All' || project.category === activeFilter
  ).length === 0 ? (
    <Grid size={{xs:12}} >
      <Box sx={{ textAlign: 'center', py: 6 }}>
        <Typography variant="h6" sx={{ color: '#94a3b8' }}>
          No projects found for the selected category.
        </Typography>
      </Box>
    </Grid>
  ) : (
    projects
      .filter((project) =>
        activeFilter === 'All' || project.category === activeFilter
      )
      .map((project) => (
            <Grid 
              size={{ xs: 12, sm: 6, md: 4 }} 
              key={project.id}
              sx={{
                display: 'flex',
                '& > *': {
                  width: '100%',
                },
              }}
            >
              <ProjectCard elevation={0}>
                <ProjectImage
                  className="project-image"
                  sx={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: 'cover',
                  }}
                />
                
                <ProjectContent>
                  <ProjectTitle>
                    {project.title}
                  </ProjectTitle>
                  
                  <ProjectDescription>
                    {project.description}
                  </ProjectDescription>

                  {/* <Box sx={{ marginTop: 'auto' }}>
                    <Typography
                      sx={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: '#e2e8f0',
                        marginBottom: 1,
                      }}
                    >
                      Technologies Used
                    </Typography>
                    
                    <TechStack>
                      {project.technologies.map((tech, index) => {
                        const IconComponent = tech.icon;
                        return (
                          <TechChip
                            key={index}
                            icon={<IconComponent size={14} />}
                            label={tech.name}
                            size="small"
                          />
                        );
                      })}
                    </TechStack>

                    <ProjectActions>
                      <SecondaryButton
                        startIcon={<Github size={isMobile ? 16 : 18} />}
                        href={project.sourceUrl}
                      >
                        Source Code
                      </SecondaryButton>
                      <PrimaryButton
                        startIcon={<ExternalLink size={isMobile ? 16 : 18} />}
                        href={project.liveUrl}
                      >
                        Live Demo
                      </PrimaryButton>
                    </ProjectActions>
                  </Box> */}
                </ProjectContent>
              </ProjectCard>
            </Grid>
          )))}
        </Grid>
      </Container>
    </StyledContainer>
  );
};

export default FeaturedProjects;