import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  AboutmeContainer,
  AboutmeTitle,
  AboutmeDescription,
  AboutmeImage,
  AboutmeContent,
  AboutDescContainer,
} from "../../styles/aboutme/indexAboutme";
import Fade from "react-reveal/Fade";

export default function Aboutme() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AboutmeContainer>
      <AboutmeContent>
        <AboutmeTitle variant="h6">About me</AboutmeTitle>
        <Fade cascade>
          <AboutDescContainer>
            <AboutmeImage src="/images/banner/DSCN0148.png" />
            <AboutmeDescription variant="h6">
              Hi, I'm Ruben and I'm a graduate student ... I'm experienced in
            </AboutmeDescription>
          </AboutDescContainer>
        </Fade>
      </AboutmeContent>
    </AboutmeContainer>
  );
}
