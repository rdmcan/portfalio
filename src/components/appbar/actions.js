import { Divider, ListItemButton, ListItemIcon } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import {
  ActionsContainerMobile,
  ActionsContainerDesktop,
  MyLIst,
} from "../../styles/appbar";
// 47 min

export default function Actions({ matches }) {
  const Component = matches ? ActionsContainerMobile : ActionsContainerDesktop;

  return (
    <Component>
      <MyLIst type="row">
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ disply: "flex", justifyContent: "center" }}>
            <ShoppingCartIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ disply: "flex", justifyContent: "center" }}>
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon sx={{ disply: "flex", justifyContent: "center" }}>
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
      </MyLIst>
    </Component>
  );
}
