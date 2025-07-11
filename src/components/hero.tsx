import { Box, Typography, Button, Stack, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import SkillsDisplay from "./skilCircle";

const Hero = ({ onContactClick }: { onContactClick: () => void }) => {
  return (
    <Box
      sx={{
        p:6,
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        // background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
        color: "white",
        height: "100%",
      }}
    >
      <Box maxWidth={500} sx={{mt: { xs: 4, md: 0 } }}>
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
          Hey there! 👋
        </Button>
        <Typography variant="h4" fontWeight="bold">
         Hello I'm <span style={{ color: "#38BDF8" }}>Prabakaran Ramesh</span>
        </Typography>

      <Typography
  variant="h5"
  fontWeight="bold"
  sx={{
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "2px solid #E879F9",
    animation: "typingLoop 4s steps(22) infinite, blink 0.6s step-end infinite",
    color: "#E879F9",
    width: "22ch", // Full width to allow typing/deleting
  }}
>
  Frontend Developer ✨
</Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          I love learning new technologies and building solutions that make a
          difference. Thanks for visiting my portfolio!{" "}
          <span style={{ color: "#FACC15", fontWeight: 600 }}>
            Happy coding..! 💻
          </span>
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <Button
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
          >
            My Resume ⬇
          </Button>
          <Button variant="contained" sx={{ background: "#7C3AED" }} onClick={onContactClick}>
            Contact Me
          </Button>
        </Stack>

        <Stack direction="row" spacing={2}>
          <IconButton sx={{ color: "white" }}>
            <GitHubIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <EmailIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <CodeIcon />
          </IconButton>
        </Stack>
      </Box>
      <SkillsDisplay />
    </Box>
  );
};

export default Hero;
