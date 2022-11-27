import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
// import { Colors } from "../theme";
// https://react.school/material-ui/grid

export const SkillContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "300px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const SkillTitle = styled(Typography)(({ theme }) => ({
  fontSize: "34px",
  fontWeight: "bold",
  marginBottom: "22px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "42px",
  },
}));

export const SkillContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    borderRadius: 400 / 2,
  },
}));

export const SkillItem = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: "left",
}));
