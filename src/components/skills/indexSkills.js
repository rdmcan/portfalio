import {
  useMediaQuery,
  Stack,
  Link,
  Typography,
  Container,
} from "@mui/material";
import {
  SiJavascript,
  SiCsharp,
  SiJava,
  SiKotlin,
  SiHtml5,
  SiCss3,
  SiTypescript,
  //
  SiNodedotjs,
  SiReact,
  SiAngularjs,
  SiBootstrap,
  SiScikitlearn,
  //
  SiHeroku,
  SiFlask,
  SiPython,
  //
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  //
  SiGit,
  SiGithub,
  SiNuget,
  SiVisualstudio,
  SiVisualstudiocode,
  SiEclipseide,
  SiLatex,
  SiWolframmathematica,
  SiDocker,
  SiCisco,
  // TbMathFunction
  // IoHardwareChipSharp  Computer Hardware
} from "react-icons/si";
import {
  SkillContainer,
  SkillContent,
  SkillTitle,
  SkillItem,
} from "../../styles/skills";
import { useTheme } from "@mui/system";
import Divider from "@mui/material/Divider";
import Fade from "react-reveal/Fade";

export default function Skills() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <SkillContainer>
      <SkillTitle variant="h6">Skills</SkillTitle>
      <Fade cascade>
        <SkillContent>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
          >
            <SkillItem>
              <Stack direction="column">
                <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                  Languages
                </SkillItem>
                <SkillItem>
                  <SiJavascript /> Javascript
                </SkillItem>
                <SkillItem>
                  <SiHtml5 /> HTML/CSS
                </SkillItem>
                <SkillItem>
                  <SiCsharp /> C#
                </SkillItem>
                <SkillItem>
                  <SiJava /> Java
                </SkillItem>
                <SkillItem>
                  <SiKotlin /> Kotlin
                </SkillItem>
              </Stack>
            </SkillItem>
            <SkillItem>
              <Stack direction="column">
                <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                  Frameworks
                </SkillItem>
                <SkillItem>
                  <SiNodedotjs /> NodeJS
                </SkillItem>
                <SkillItem>
                  <SiReact /> ReactJS
                </SkillItem>
              </Stack>
            </SkillItem>
            <SkillItem>
              <Stack direction="column">
                <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                  Databases
                </SkillItem>
                <SkillItem>
                  <SiMysql /> MySQL
                </SkillItem>
                <SkillItem>
                  <SiMongodb /> MongoDB
                </SkillItem>
                <SkillItem>
                  <SiFirebase /> FireBase
                </SkillItem>
              </Stack>
            </SkillItem>
            <SkillItem>
              <Stack direction="column">
                <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                  Tools
                </SkillItem>
                <SkillItem>
                  <SiGit /> Git
                </SkillItem>
                <SkillItem>
                  <SiGithub /> GitHub
                </SkillItem>
                <SkillItem>
                  <SiNuget /> Nuget
                </SkillItem>
                <SkillItem>
                  <SiVisualstudio /> VS
                </SkillItem>
                <SkillItem>
                  <SiVisualstudiocode /> VS Code
                </SkillItem>
                <SkillItem>
                  <SiEclipseide /> Eclipse
                </SkillItem>
              </Stack>
            </SkillItem>
            <SkillItem>
              <Stack direction="column">
                <SkillItem style={{ fontWeight: "bold", fontSize: "21px" }}>
                  Others
                </SkillItem>
                <SkillItem>
                  <SiWolframmathematica /> Mathematica
                </SkillItem>
                <SkillItem>
                  <SiLatex /> Latex
                </SkillItem>
                <SkillItem>
                  <SiCisco /> R/S
                </SkillItem>
              </Stack>
            </SkillItem>
          </Stack>
        </SkillContent>
      </Fade>
    </SkillContainer>
  );
}
