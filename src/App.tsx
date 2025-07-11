import { CssBaseline, Box } from "@mui/material";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import { MainLayout } from "./layouts/mainlayout";
import CustomCursor from "./components/custom-cursour";

function App() {
  return (
    <Box>
    <CssBaseline />
    {/* <CustomCursor/> */}
    <MainLayout/>
    </Box>
    // <Box sx={{ 
    //   background: "#0F172A", 
    //   minHeight: "100vh",
    //   overflowY:'auto',
    //     "&::-webkit-scrollbar": {
    //       display: "none",
    //     },
    //   position: "relative"
    // }}>
    //   <CssBaseline />
    //   <Box sx={{ position: "sticky", top: 0, width: "100%", zIndex: 1000 }}>
    //     <Header />
    //   </Box>
    //   <Hero />
    // </Box>
  );
}

export default App;