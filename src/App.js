import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme/index";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Aboutme from "./components/aboutme";
import Particles from "react-tsparticles"; // npm i react-tsparticles
import Skills from "./components/skills/indexSkills";

function App() {
  useEffect(() => {
    document.title = "React Material";
  });

  return (
    <ThemeProvider theme={theme}>
      <Appbar />
      <Banner />
      <Aboutme />
      <Skills />
    </ThemeProvider>
  );
}

export default App;
