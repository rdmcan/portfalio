import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi"; // npm i react-icons

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "550px",
  height: "300px",
  border: "2px solid #000000",
  // marginTop: "2px",
  marginBottom: "40px",

  [theme.breakpoints.down("md")]: {
    width: "150px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    borderRadius: 400 / 2,
  },
}));

export const BannerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  // justifyContent: "center",
  // width: "100%",
  // height: "100%",
  // padding: "0px 0px",
  // background: Colors.light_gray,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const BannerContent = styled(Box)(() => ({
  alignItems: "center",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  // padding: "30px",
  // marginTop: "8em",
}));

export const BannerTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.36rem",
  fontWeight: "Medium",
  fontFamily: "source-code-pro, monospace",
  // textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const BannerTxtContent = styled(Typography)(({ theme }) => ({
  marginTop: "200px",
  marginLeft: "150px",
  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const socialArr = [
  {
    aria: "Linkedin",
    icon: <FiLinkedin />,
    href: "https://linkedin.com/in/",
  },
  {
    aria: "GitHub",
    icon: <FiGithub />,
    href: "https://github.com/",
  },
  {
    aria: "Email",
    icon: <FiMail />,
    href: "mailto:rdmcan@hotmail.com",
  },
];
