import { List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
// import { theme } from "../theme";
import "@fontsource/montez";

// container
export const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8 px",
}));

// header // npm i @fontsource/montez
export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1.5,
  fontSize: "4em",
  fontFamily: '"montez", "cursive"',
  color: "secondary",
  marginLeft: "15px",
}));

export const MyLIst = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 5,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: "shaft",
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${"border"}`,
}));

export const ActionsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));
