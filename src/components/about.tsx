import React from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Zap, Check } from 'lucide-react';
// import mypic from '../assets/image/cropped_circle_image.png';
import mypic from '../assets/image/Gemini_Generated_Image_t7xr6wt7xr6wt7xr.png';

// Styled components
const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
//   background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(4),
  },
}));

const BackgroundDecoration = styled(Box)({
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(60px)',
  opacity: 0.1,
});

const AccentLine = styled(Box)({
  position: 'absolute',
  height: '2px',
  opacity: 0.6,
});

const ProfileContainer = styled(Box)(({ theme }) => ({
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'flex-start',
  },
}));

const ProfileGlow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  width: 288,
  height: 288,
  borderRadius: '50%',
//   background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(6, 182, 212, 0.2) 50%, rgba(20, 184, 166, 0.2) 100%)',
  filter: 'blur(40px)',
  animation: 'pulse 2s infinite',
  [theme.breakpoints.up('sm')]: {
    width: 320,
    height: 320,
  },
  [theme.breakpoints.up('lg')]: {
    width: 384,
    height: 384,
  },
  '@keyframes pulse': {
    '0%, 100%': { opacity: 0.2 },
    '50%': { opacity: 0.3 },
  },
}));

const ProfileBorder = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 288,
  height: 288,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 50%, #14b8a6 100%)',
  padding: 4,
  [theme.breakpoints.up('sm')]: {
    width: 320,
    height: 320,
  },
  [theme.breakpoints.up('lg')]: {
    width: 384,
    height: 384,
  },
}));

const ProfileInner = styled(Box)({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  backgroundColor: '#0f172a',
  padding: 14,
});

const ProfileImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '50%',
  border: '2px solid rgba(71, 85, 105, 0.5)',
});

const DashedCircle = styled(Box)({
  position: 'absolute',
  top: -7,
  left: -8,
  width: 'calc(100% + 15px)',
  height: 'calc(100% + 15px)',
  borderRadius: '50%',
  border: '2px dashed rgba(168, 85, 247, 0.8)',
  borderStyle: 'dashed',
  borderWidth: '2px',
  animation: 'rotate 10s linear infinite',
  pointerEvents: 'none',
  zIndex: 1,
  '@keyframes rotate': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
});

const TitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(2),
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 32,
  height: 32,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
  [theme.breakpoints.up('sm')]: {
    width: 40,
    height: 40,
  },
}));

const TitleLine = styled(Box)({
  flex: 1,
  height: 2,
  background: 'linear-gradient(90deg, #06b6d4 0%, #a855f7 50%, transparent 100%)',
  marginLeft: 16,
});

const DescriptionPaper = styled(Paper)(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'rgba(30, 41, 59, 0.4)',
  backdropFilter: 'blur(12px)',
  border: '1px solid rgba(71, 85, 105, 0.3)',
  borderRadius: 12,
  padding: theme.spacing(2),
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
    borderRadius: 12,
    filter: 'blur(4px)',
    zIndex: -1,
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(4),
  },
}));

const SkillItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1),
  borderRadius: 8,
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(30, 41, 59, 0.2)',
    transform: 'scale(1.02)',
    '& .skill-text': {
      color: '#ffffff',
    },
  },
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(2),
    padding: theme.spacing(1.5),
  },
}));

const CheckIcon = styled(Box)({
  width: 20,
  height: 20,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #06b6d4 0%, #14b8a6 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  boxShadow: '0 4px 12px rgba(6, 182, 212, 0.25)',
  '@media (min-width: 600px)': {
    width: 24,
    height: 24,
  },
});

const AccentBottom = styled(Box)(({ theme }) => ({
  width: 96,
  height: 4,
  background: 'linear-gradient(90deg, #a855f7 0%, #06b6d4 50%, #14b8a6 100%)',
  borderRadius: 2,
  boxShadow: '0 4px 12px rgba(6, 182, 212, 0.25)',
  [theme.breakpoints.up('sm')]: {
    width: 128,
  },
  [theme.breakpoints.up('lg')]: {
    width: 160,
  },
}));

const AboutMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const skills = [
    "Passionate Full-Stack Developer",
    "Problem-solver with a love for innovation", 
    "Building scalable & efficient applications",
    "Focused on leveraging Cloud technologies for modern, reliable solutions",
    "Always learning and adapting"
  ];

  return (
    <StyledContainer>
      {/* Background decorative elements */}
      <BackgroundDecoration
        sx={{
          top: 80,
          left: 40,
          width: 256,
          height: 256,
          background: 'rgba(168, 85, 247, 0.1)',
        }}
      />
      <BackgroundDecoration
        sx={{
          bottom: 80,
          right: 40,
          width: 320,
          height: 320,
          background: 'rgba(6, 182, 212, 0.1)',
        }}
      />
      <BackgroundDecoration
        sx={{
          top: '50%',
          left: '25%',
          width: 128,
          height: 128,
          background: 'rgba(20, 184, 166, 0.1)',
        }}
      />
      
      {/* Diagonal accent lines */}
      <AccentLine
        sx={{
          top: 128,
          left: 80,
          width: 128,
          background: 'linear-gradient(90deg, #a855f7 0%, transparent 100%)',
          transform: 'rotate(45deg)',
        }}
      />
      <AccentLine
        sx={{
          bottom: 160,
          right: 128,
          width: 160,
          background: 'linear-gradient(90deg, transparent 0%, #06b6d4 100%)',
          transform: 'rotate(-45deg)',
        }}
      />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        <Grid container spacing={{ xs: 4, lg: 8 }} alignItems="center">
          
          {/* Profile Image Section */}
          <Grid size={{ xs: 12, lg: 6 }} sx={{ order: { xs: 1, lg: 1 } }}>
            <ProfileContainer>
              <Box position="relative" >
                <ProfileGlow />
                
                <ProfileBorder>
                  <ProfileInner>
                    <Box position="relative" sx={{ width: '100%', height: '100%' }}>
                      <DashedCircle />
                      <ProfileImage
                        src={mypic}
                        alt="Profile"
                        style={{ position: 'relative', zIndex: 2 }}
                      />
                    </Box>
                  </ProfileInner>
                </ProfileBorder>
                
                {/* Decorative accent lines around image */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '25%',
                    left: -32,
                    width: { xs: 48, sm: 64 },
                    height: 2,
                    background: 'linear-gradient(90deg, #a855f7 0%, transparent 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '25%',
                    right: -32,
                    width: { xs: 64, sm: 80 },
                    height: 2,
                    background: 'linear-gradient(90deg, transparent 0%, #06b6d4 100%)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: -48,
                    width: 32,
                    height: 32,
                    border: '1px solid rgba(20, 184, 166, 0.5)',
                    borderRadius: '50%',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '33%',
                    left: -48,
                    width: 24,
                    height: 24,
                    border: '1px solid rgba(168, 85, 247, 0.5)',
                    borderRadius: '50%',
                  }}
                />
              </Box>
            </ProfileContainer>
          </Grid>

          {/* Content Section */}
          <Grid size={{ xs: 12, lg: 6 }} sx={{ order: { xs: 2, lg: 2 } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 3, sm: 4 } }}>
              
              {/* Title with icon and line */}
              <TitleContainer>
                <IconContainer>
                  <Zap color="white" size={isMobile ? 16 : 20} />
                </IconContainer>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '1.875rem', lg: '2.25rem' },
                    fontWeight: 'bold',
                    color: 'white',
                    letterSpacing: '0.1em',
                  }}
                >
                  ABOUT ME
                </Typography>
                <TitleLine />
              </TitleContainer>

              {/* Description Box */}
              <DescriptionPaper elevation={0}>
                <Typography
                  sx={{
                    color: '#d1d5db',
                    lineHeight: 1.6,
                    fontSize: { xs: '0.875rem', sm: '1rem', lg: '1.125rem' },
                  }}
                >
                  I'm always curious and eager to learn new things. I enjoy turning 
                  ideas into solutions and working with others to create something 
                  meaningful. I believe growth comes from both challenges and 
                  experience. Let's connect and share ideas—I'd love to hear from you!
                </Typography>
              </DescriptionPaper>

              {/* Skills List */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, sm: 2 } }}>
                {skills.map((skill, index) => (
                  <SkillItem key={index}>
                    <CheckIcon>
                      <Check color="white" size={isMobile ? 12 : 16} />
                    </CheckIcon>
                    <Typography
                      className="skill-text"
                      sx={{
                        color: '#d1d5db',
                        fontSize: { xs: '0.875rem', sm: '1rem' },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {skill}
                    </Typography>
                  </SkillItem>
                ))}
              </Box>

              {/* Bottom accent line */}
              <AccentBottom />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledContainer>
  );
};

export default AboutMe;