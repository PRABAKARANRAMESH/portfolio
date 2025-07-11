import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper,
  TextField,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  InputAdornment,
  Divider,
  keyframes
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { 
  Send,
  User,
  Mail,
  Github,
  Linkedin,
  Mail as MailIcon,
  MapPin,
  Globe,
  Heart,
  Code,
  Lightbulb,
  Target,
  Rocket,
} from 'lucide-react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


// Animation keyframes
const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(5deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.08; }
  50% { opacity: 0.15; }
`;

const gradientBackground = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
//   background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
  backgroundSize: '400% 400%',
  animation: `${gradientBackground} 15s ease infinite`,
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4, 1),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 2),
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
  filter: 'blur(80px)',
  opacity: 0.08,
  animation: `${float} 8s ease-in-out infinite, ${pulse} 6s ease-in-out infinite`,
});

const TitleContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  position: 'relative',
  [theme.breakpoints.up('sm')]: {
    marginBottom: theme.spacing(7),
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(8),
  },
  [theme.breakpoints.up('lg')]: {
    marginBottom: theme.spacing(10),
  },
}));

const MainCard = styled(Paper)(() => ({
  backgroundColor: 'rgba(30, 41, 59, 0.9)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(71, 85, 105, 0.4)',
  borderRadius: 24,
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  transform: 'translateY(0)',
  transition: 'transform 0.5s ease, box-shadow 0.5s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
    borderRadius: 24,
  },
}));

const LeftSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(7),
  },
}));

const RightSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: 'rgba(15, 23, 42, 0.6)',
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(7),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  color: '#ffffff',
  marginBottom: theme.spacing(3),
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: 0,
    width: 60,
    height: 3,
    background: 'linear-gradient(90deg, #a855f7 0%, #06b6d4 100%)',
    borderRadius: 2,
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: 80,
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.625rem',
    marginBottom: theme.spacing(3.5),
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.75rem',
    marginBottom: theme.spacing(4),
  },
}));

const StatusItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
  padding: theme.spacing(2),
  borderRadius: 12,
  backgroundColor: 'rgba(71, 85, 105, 0.2)',
  border: '1px solid rgba(71, 85, 105, 0.3)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'rgba(168, 85, 247, 0.1)',
    borderColor: 'rgba(168, 85, 247, 0.4)',
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 20px rgba(168, 85, 247, 0.1)',
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2.5),
    gap: theme.spacing(2.5),
  },
}));

const StatusIcon = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'rotate(15deg) scale(1.1)',
  },
  [theme.breakpoints.up('sm')]: {
    width: 48,
    height: 48,
  },
}));

const StatusContent = styled(Box)({
  flex: 1,
  minWidth: 0,
});

const StatusTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: 600,
  color: '#ffffff',
  marginBottom: theme.spacing(0.5),
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.125rem',
  },
}));

const StatusDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: '#94a3b8',
  lineHeight: 1.5,
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.9375rem',
  },
}));

const SocialContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(2.5),
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  width: 48,
  height: 48,
  backgroundColor: 'rgba(71, 85, 105, 0.3)',
  border: '1px solid rgba(71, 85, 105, 0.4)',
  color: '#94a3b8',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(168, 85, 247, 0.2)',
    borderColor: 'rgba(168, 85, 247, 0.5)',
    color: '#ffffff',
    transform: 'translateY(-3px) scale(1.1)',
    boxShadow: '0 8px 20px rgba(168, 85, 247, 0.3)',
  },
  [theme.breakpoints.up('sm')]: {
    width: 56,
    height: 56,
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(71, 85, 105, 0.2)',
    borderRadius: 12,
    transition: 'all 0.3s ease',
    '& fieldset': {
      borderColor: 'rgba(71, 85, 105, 0.4)',
      borderWidth: 1,
      transition: 'all 0.3s ease',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(168, 85, 247, 0.5)',
      boxShadow: '0 0 0 4px rgba(168, 85, 247, 0.1)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#a855f7',
      borderWidth: 2,
      boxShadow: '0 0 0 4px rgba(168, 85, 247, 0.2)',
    },
    '& input': {
      color: '#ffffff',
      fontSize: '1rem',
      padding: theme.spacing(1.5, 2),
      transition: 'all 0.3s ease',
    },
    '& textarea': {
      color: '#ffffff',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#94a3b8',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    '&.Mui-focused': {
      color: '#a855f7',
      transform: 'translate(14px, -9px) scale(0.75)',
    },
  },
  '& .MuiFormHelperText-root': {
    color: '#ef4444',
    fontSize: '0.875rem',
    marginLeft: 0,
    marginTop: theme.spacing(0.5),
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1.5, 3),
  borderRadius: 12,
  background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
  backgroundSize: '200% 200%',
  animation: `${gradientBackground} 5s ease infinite`,
  color: 'white',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 8px 20px rgba(168, 85, 247, 0.3)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: 'linear-gradient(135deg, #9333ea 0%, #0891b2 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 28px rgba(168, 85, 247, 0.4)',
    '&::after': {
      opacity: 1,
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:disabled': {
    background: 'rgba(71, 85, 105, 0.5)',
    color: 'rgba(255, 255, 255, 0.5)',
    transform: 'none',
    boxShadow: 'none',
    animation: 'none',
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2, 4),
    fontSize: '1.0625rem',
  },
}));

const FooterSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(10),
  },
  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(12),
  },
}));

const FooterCard = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(15, 23, 42, 0.8)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(71, 85, 105, 0.3)',
  borderRadius: 16,
  padding: theme.spacing(3),
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.03) 0%, rgba(6, 182, 212, 0.03) 100%)',
    borderRadius: 16,
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
  },
}));

const FooterTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 700,
  color: '#ffffff',
  marginBottom: theme.spacing(2),
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.375rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
}));

const FooterDescription = styled(Typography)(({ theme }) => ({
  fontSize: '0.9375rem',
  color: '#94a3b8',
  lineHeight: 1.6,
  marginBottom: theme.spacing(2),
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
  },
}));

// const QuickLinkItem = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   gap: theme.spacing(1.5),
//   padding: theme.spacing(1, 0),
//   color: '#94a3b8',
//   fontSize: '0.9375rem',
//   cursor: 'pointer',
//   transition: 'all 0.3s ease',
//   position: 'relative',
//   zIndex: 2,
//   '&:hover': {
//     color: '#ffffff',
//     paddingLeft: theme.spacing(1),
//     '& svg': {
//       transform: 'translateX(3px)',
//     },
//   },
//   '& svg': {
//     transition: 'transform 0.3s ease',
//   },
//   [theme.breakpoints.up('sm')]: {
//     fontSize: '1rem',
//     gap: theme.spacing(2),
//   },
// }));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: theme.spacing(1, 0),
  color: '#94a3b8',
  fontSize: '0.9375rem',
  position: 'relative',
  zIndex: 2,
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#ffffff',
    '& svg': {
      transform: 'scale(1.1)',
    },
  },
  '& svg': {
    transition: 'transform 0.3s ease',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1rem',
    gap: theme.spacing(2),
  },
}));

const RocketIcon = styled(Rocket)({
  animation: `${float} 3s ease-in-out infinite`,
});

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters')
    .required('Message is required'),
});

const ContactMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const statusItems = [
    {
      icon: Code,
      title: 'Currently Innovating',
      description: 'Building the future with creativity and tech impact!'
    },
    {
      icon: Lightbulb,
      title: 'Inspired by Change',
      description: 'Driven to solve meaningful problems and make an impact.'
    },
    {
      icon: Target,
      title: 'Next Big Thing',
      description: 'Exploring new horizons, challenging limits, and dreaming big.'
    }
  ];


const handleSubmit = (values: any, { setSubmitting, resetForm }: any) => {
  const serviceID = 'service_9uvg1zg';
  const templateID = 'template_pralrun';
  const publicKey = '5N8XWky6p8LBQfNO5';

  const templateParams = {
    name: values.name,
    email: values.email,
    message: values.message,
    time: new Date().toLocaleString(),
  };

  emailjs
    .send(serviceID, templateID, templateParams, publicKey)
    .then(() => {
      alert('Message sent successfully!');
      resetForm();
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setSubmitting(false);
    });
};

  return (
    <StyledContainer>
      {/* Enhanced Background decorative elements */}
      <BackgroundDecoration
        sx={{
          top: '5%',
          left: '5%',
          width: 400,
          height: 400,
          background: 'rgba(168, 85, 247, 0.1)',
          animationDelay: '0s',
        }}
      />
      <BackgroundDecoration
        sx={{
          bottom: '10%',
          right: '8%',
          width: 500,
          height: 500,
          background: 'rgba(6, 182, 212, 0.08)',
          animationDelay: '2s',
        }}
      />
      <BackgroundDecoration
        sx={{
          top: '40%',
          right: '15%',
          width: 300,
          height: 300,
          background: 'rgba(20, 184, 166, 0.06)',
          animationDelay: '4s',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TitleContainer>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                fontWeight: 900,
                background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 50%, #14b8a6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 3,
                letterSpacing: '-0.02em',
              }}
            >
              Contact Me
            </Typography>
            <Typography
              sx={{
                color: '#94a3b8',
                fontSize: { xs: '1.125rem', sm: '1.25rem', md: '1.375rem', lg: '1.5rem' },
                maxWidth: 700,
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              Have a question or want to work together? Feel free to reach out!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <RocketIcon size={32} color="#06b6d4" />
            </Box>
          </TitleContainer>
        </motion.div>

        {/* Main Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MainCard elevation={0}>
            <Grid container>
              {/* Left Section - What's Cooking */}
              <Grid size={{ xs: 12, lg: 6 }}>
                <LeftSection>
                  <SectionTitle>What's Cooking?</SectionTitle>
                  
                  {statusItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <StatusItem>
                          <StatusIcon>
                            <IconComponent size={isMobile ? 20 : 24} color="white" />
                          </StatusIcon>
                          <StatusContent>
                            <StatusTitle>{item.title}</StatusTitle>
                            <StatusDescription>{item.description}</StatusDescription>
                          </StatusContent>
                        </StatusItem>
                      </motion.div>
                    );
                  })}

                  <Typography
                    sx={{
                      fontSize: { xs: '1.125rem', sm: '1.25rem' },
                      fontWeight: 600,
                      color: '#ffffff',
                      marginTop: 4,
                      marginBottom: 2,
                    }}
                  >
                    Let's Connect
                  </Typography>

                  <SocialContainer>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <SocialButton>
                        <Github size={isMobile ? 20 : 24} />
                      </SocialButton>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <SocialButton>
                        <Linkedin size={isMobile ? 20 : 24} />
                      </SocialButton>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <SocialButton>
                        <MailIcon size={isMobile ? 20 : 24} />
                      </SocialButton>
                    </motion.div>
                  </SocialContainer>
                </LeftSection>
              </Grid>

              {/* Right Section - Contact Form */}
              <Grid size={{ xs: 12, lg: 6 }}>
                <RightSection>
                  <SectionTitle>Send Me a Message</SectionTitle>
                  
                  <Formik
                    initialValues={{
                      name: '',
                      email: '',
                      message: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ errors, touched, isSubmitting }) => (
                      <Form>
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                        >
                          <Field name="name">
                            {({ field }: any) => (
                              <StyledTextField
                                {...field}
                                fullWidth
                                label="Your Name"
                                variant="outlined"
                                error={touched.name && !!errors.name}
                                helperText={touched.name && errors.name}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <User size={20} color="#94a3b8" />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            )}
                          </Field>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <Field name="email">
                            {({ field }: any) => (
                              <StyledTextField
                                {...field}
                                fullWidth
                                label="Your Email"
                                variant="outlined"
                                type="email"
                                error={touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                InputProps={{
                                  startAdornment: (
                                    <InputAdornment position="start">
                                      <Mail size={20} color="#94a3b8" />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            )}
                          </Field>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                        >
                          <Field name="message">
                            {({ field }: any) => (
                              <StyledTextField
                                {...field}
                                fullWidth
                                label="Your Message"
                                variant="outlined"
                                multiline
                                rows={6}
                                error={touched.message && !!errors.message}
                                helperText={touched.message && errors.message}
                                
                              />
                            )}
                          </Field>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 }}
                        >
                          <SubmitButton
                            type="submit"
                            disabled={isSubmitting}
                            startIcon={<Send size={20} />}
                          >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                          </SubmitButton>
                        </motion.div>
                      </Form>
                    )}
                  </Formik>
                </RightSection>
              </Grid>
            </Grid>
          </MainCard>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FooterSection>
            <Grid container spacing={{ xs: 3, sm: 4, md: 4 }}>
              {/* Portfolio Info */}
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div whileHover={{ y: -5 }}>
                  <FooterCard elevation={0}>
                    <FooterTitle>Prabakaran Ramesh Portfolio</FooterTitle>
                    <FooterDescription>
                      Thank you for visiting my personal portfolio website. 
                      Connect with me over socials.
                    </FooterDescription>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, position: 'relative', zIndex: 2 }}>
                      <Typography sx={{ color: '#94a3b8', fontSize: '0.9375rem' }}>
                        Keep Rising
                      </Typography>
                      <Heart size={16} color="#ef4444" fill="#ef4444" />
                    </Box>
                    <Divider sx={{ my: 2, borderColor: 'rgba(71, 85, 105, 0.3)' }} />
                    <Typography sx={{ color: '#94a3b8', fontSize: '0.875rem', position: 'relative', zIndex: 2 }}>
                      🚀 Exploring new technologies, innovating, and delivering results.
                    </Typography>
                  </FooterCard>
                </motion.div>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div whileHover={{ y: -5 }}>
                  <FooterCard elevation={0}>
                    <FooterTitle>Contact Info</FooterTitle>
                    <ContactInfoItem>
                      <MailIcon size={16} color="#f59e0b" />
                      <Typography component="span" sx={{cursor:"pointer"}}>prabakaranramesh62@gmail.com</Typography>
                    </ContactInfoItem>
                    <ContactInfoItem>
                      <MapPin size={16} color="#f59e0b" />
                      <Typography component="span" sx={{cursor:"pointer"}}>Villupuram, Tamil Nadu, India-605108</Typography>
                    </ContactInfoItem>
                    <Box sx={{ display: 'flex', gap: 2, mt: 3, position: 'relative', zIndex: 2 }}>
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <IconButton 
                          sx={{ 
                            color: '#94a3b8', 
                            '&:hover': { color: '#ffffff' },
                            backgroundColor: 'rgba(71, 85, 105, 0.2)',
                            border: '1px solid rgba(71, 85, 105, 0.3)',
                          }}
                        >
                          <Linkedin size={20} />
                        </IconButton>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <IconButton 
                          sx={{ 
                            color: '#94a3b8', 
                            '&:hover': { color: '#ffffff' },
                            backgroundColor: 'rgba(71, 85, 105, 0.2)',
                            border: '1px solid rgba(71, 85, 105, 0.3)',
                          }}
                        >
                          <Github size={20} />
                        </IconButton>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <IconButton 
                          sx={{ 
                            color: '#94a3b8', 
                            '&:hover': { color: '#ffffff' },
                            backgroundColor: 'rgba(71, 85, 105, 0.2)',
                            border: '1px solid rgba(71, 85, 105, 0.3)',
                          }}
                        >
                          <MailIcon size={20} />
                        </IconButton>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }}>
                        <IconButton 
                          sx={{ 
                            color: '#94a3b8', 
                            '&:hover': { color: '#ffffff' },
                            backgroundColor: 'rgba(71, 85, 105, 0.2)',
                            border: '1px solid rgba(71, 85, 105, 0.3)',
                          }}
                        >
                          <Globe size={20} />
                        </IconButton>
                      </motion.div>
                    </Box>
                  </FooterCard>
                </motion.div>
              </Grid>
            </Grid>
          </FooterSection>
        </motion.div>
      </Container>
    </StyledContainer>
  );
};

export default ContactMe;