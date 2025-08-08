import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SkillsDisplay from "./skilCircle";

const Hero = ({ onContactClick }: { onContactClick: () => void }) => {


    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "resume.pdf";
    link.download = "PrabakaranRamesh_Resume.pdf";
    link.click();
  };
  return (
  <Box
  sx={{
    p: 6,
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    height: "100%",
  }}
>
  <Box maxWidth={500} sx={{ mt: { xs: 4, md: 0 } }}>
    <Button
      variant="contained"
      sx={{
        background: "#1E293B",
        mb: 2,
        borderRadius: 20,
        textTransform: "none",
        fontWeight: "bold",
      }}
    >
      Welcome to My Portfolio 👋
    </Button>

    <Typography variant="h4" fontWeight="bold" gutterBottom>
      <span style={{ color: "#38BDF8" }}>Prabakaran Ramesh</span>
    </Typography>

    <Typography
  variant="h5"
  fontWeight="bold"
  sx={{
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "2px solid #E879F9",
    animation: "typingLoop 4s steps(10) infinite, blink 0.6s step-end infinite",
    color: "#E879F9",
    width: "10ch", // matches character count in text
  }}
>
  I'm , Developer ✨
</Typography>

    <Typography variant="body1" sx={{ mb: 2, mt: 2 }}>
  I craft modern, high-performance web applications that blend great design with seamless functionality.
</Typography>

<Typography variant="body1" sx={{ mb: 2 }}>
  Passionate about clean code, intuitive user experiences, and solving real-world problems through technology.
</Typography>

<Typography variant="body1" sx={{ mb: 2 }}>
  <span style={{ color: "#FACC15", fontWeight: 600 }}>
    Let’s build something impactful — Happy coding..! 💻
  </span>
</Typography>


    <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
      <Button
        variant="outlined"
        sx={{ color: "white", borderColor: "white" }}
        onClick={handleDownload}
      >
        Download Resume ⬇
      </Button>
      <Button variant="contained" sx={{ background: "#7C3AED" }} onClick={onContactClick}>
        Let’s Connect
      </Button>
    </Stack>

    <Stack direction="row" spacing={2}>
      <IconButton sx={{ color: "white" }} href="https://github.com/PRABAKARANRAMESH" target="_blank">
        <GitHubIcon />
      </IconButton>
      <IconButton sx={{ color: "white" }} href="https://www.linkedin.com/in/prabakaranramesh" target="_blank">
        <LinkedInIcon />
      </IconButton>
      <IconButton sx={{ color: "white" }}  href="https://mail.google.com/mail/?view=cm&fs=1&to=prabakaranramesh62@gmail.com">
        <EmailIcon />
      </IconButton>
      <IconButton sx={{ color: "white" }} href="https://wa.me/+916379370523" target="_blank">
        <WhatsAppIcon />
      </IconButton>
    </Stack>
  </Box>

  <SkillsDisplay />
</Box>

  );
};

export default Hero;
