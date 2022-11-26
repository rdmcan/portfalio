import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { Colors } from "../theme";

export const AboutmeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "0px 0px",
  marginTop: "480px",
  marginBottom: "480px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const AboutmeContent = styled(Box)(() => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
}));

export const AboutDescContainer = styled(Box)(() => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "row",
  maxWidth: 420,
  padding: "30px",
}));

export const AboutmeTitle = styled(Typography)(({ theme }) => ({
  //   lineHeight: 1.5,
  fontSize: "29px",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const AboutmeImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // width: "150px",
  // height: "180px",
  borderRadius: 400 / 2,

  // border: "2px solid #000000",
  marginTop: "20px",
  marginBottom: "20px",

  [theme.breakpoints.down("md")]: {
    width: "150px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    borderRadius: 400 / 2,
  },
}));

export const AboutmeDescription = styled(Typography)(({ theme }) => ({
  //   lineHeight: 1.25,
  //   letterSpacing: 1.25,
  marginTop: "1em",
  [theme.breakpoints.down("sm")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));
