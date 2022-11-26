import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AppbarContainer, AppbarHeader, MyLIst } from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

export default function AppbarDesktop({ matches }) {
  return (
    <AppbarContainer>
      <AppbarHeader>Ruben Mejia</AppbarHeader>
      <MyLIst type="row">
        <ListItemText
          primary="About me"
          primaryTypographyProps={{
            fontSize: 22,
          }}
          // secondaryTypographyProps={{
          //   fontSize: 15,
          // }}
        />
        <ListItemText
          primary="Skills"
          primaryTypographyProps={{
            fontSize: 22,
          }}
        />
        <ListItemText
          primary="Projects"
          primaryTypographyProps={{
            fontSize: 22,
          }}
        />
        <ListItemText
          primary="Resume"
          primaryTypographyProps={{
            fontSize: 22,
          }}
        />
        <ListItemText
          primary="Contact"
          primaryTypographyProps={{
            fontSize: 22,
          }}
        />
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyLIst>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
// npm i @mui/icons-material
