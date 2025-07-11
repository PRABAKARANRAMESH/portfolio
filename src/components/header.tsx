import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from "@mui/icons-material/Code";

const navItems = ["Home", "About", "Expertise", "Projects", "Education & Experience", "Contact"];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [scrolled, setScrolled] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };


  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveItem(id);
      if (isMobile) {
        setDrawerOpen(false); // close drawer after clicking
      }
    }
  };

  
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);

    const sectionOffsets: { [key: string]: number } = {};

    navItems.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        sectionOffsets[id] = rect.top;
      }
    });

    const visibleSection = navItems.find((id) => {
      const offset = sectionOffsets[id];
      return offset !== undefined && offset >= 0 && offset < window.innerHeight / 2;
    });

    if (visibleSection && visibleSection !== activeItem) {
      setActiveItem(visibleSection);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [activeItem]);

//   const drawerList = (
//     <Box
//       sx={{
//         width: 250,
//         backgroundColor: "#0b0b1e",
//         height: "100%",
//         color: "white",
//       }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {navItems.map((text) => (
//           <ListItem
//   key={text}
//   disablePadding
//   sx={{
//     backgroundColor: activeItem === text ? "#1e1e3f" : "transparent",
//     "&:hover": { backgroundColor: "#2a2a4d" },
//   }}
// >
//   <ListItemText
//     primary={text}
//     onClick={() => scrollToSection(text)}
//     sx={{
//       px: 2,
//       py: 1.5,
//       cursor: "pointer",
//       fontWeight: 600,
//       color: activeItem === text ? "#A78BFA" : "#fff",
//     }}
//   />
// </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

const drawerList = (
  <Box
    sx={{
      width: 280,
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)',
      height: "100%",
      color: "white",
      px: 2,
      pt: 4,
    }}
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <Typography variant="h6" sx={{ mb: 3, px: 1, color: "#A78BFA" }}>
      PRABAKARAN <span style={{ fontSize: 10, color: "#ccc" }}>RAMESH</span>
    </Typography>

    <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      {navItems.map((text) => (
        <ListItem
          key={text}
          onClick={() => scrollToSection(text)}
          sx={{
            borderRadius: 2,
            px: 2,
            py: 1.5,
            cursor: "pointer",
            background: activeItem === text
              ? "linear-gradient(90deg, #4f46e5, #8b5cf6)"
              : "rgba(255, 255, 255, 0.05)",
            boxShadow: activeItem === text ? "0 0 10px #8b5cf6" : "none",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.1)",
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <CodeIcon sx={{ fontSize: 20, color: "#A78BFA" }} />
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                fontWeight: 600,
                fontSize: 15,
                color: "#fff",
              }}
            />
          </Box>
          <Typography sx={{ fontSize: 18, color: "#a5b4fc" }}>›</Typography>
        </ListItem>
      ))}
    </List>
  </Box>
);



  return (
    <>
      <AppBar
  position="fixed"
  sx={{
    px: 2,
    boxShadow: "none",
    backgroundColor: scrolled ? "rgba(15, 23, 42, 0.8)" : "transparent",
    backdropFilter: scrolled ? "blur(10px)" : "none",
    transition: "background-color 0.3s ease, backdrop-filter 0.3s ease",
    borderBottom: scrolled ? "1px solid rgb(255, 255, 255)" : "none",
  }}
>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left logo */}
          <Box display="flex" alignItems="center" gap={4}>
            <IconButton
              sx={{
                backgroundColor: "#0e0e0e",
                width: 40,
                height: 40,
                "&:hover": { backgroundColor: "#1a1a1a" },
              }}
            >
              <CodeIcon sx={{ color: "white" }} />
            </IconButton>
            <Box>
              <Typography variant="h6" sx={{ color: "#A78BFA", fontWeight: 700 }}>
                PRABAKARAN RAMESH
              </Typography>
              {/* <Typography sx={{ fontSize: 10, color: "#9ca3af" }}>RAMESH</Typography> */}
            </Box>
          </Box>

          {/* Right navigation */}
          {isMobile ? (
            <IconButton onClick={toggleDrawer(true)} sx={{ color: "#fff" }}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box
              display="flex"
              alignItems="center"
              gap={5}
              sx={{
                px: 4,
                py: 1,
                borderRadius: 50,
                backgroundColor: "transparent",
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  sx={{
                    position: "relative",
                    borderRadius: 0,
                    textTransform: "none",
                    px: 2,
                    fontWeight: 600,
                    color: item === activeItem ? "#A78BFA" : "#fff",
                    backgroundColor: "transparent",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -2,
                      width: "100%",
                      height: "3px",
                      borderRadius: "4px",
                      background: "linear-gradient(to right, #3b82f6, #a855f7)",
                      transform: item === activeItem ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      transition: "transform 0.3s ease-in-out",
                    },
                    "&:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
};

export default Header;
