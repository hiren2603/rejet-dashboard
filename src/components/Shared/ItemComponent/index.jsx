import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { listIconStyle, listItemText } from "../Styles";
import { LayoutContext } from "../../../Context";

const ItemComponent = ({ item, closeSideBar, handleNavigation, key }) => {
  const { open } = useContext(LayoutContext);

  return (
    <Link to={item.link} key={key}>
      <ListItem sx={{ display: "block" }} disablePadding>
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
            "&:hover": {
              background: "linear-gradient(145deg, #E31E25, #E31E25);",
              WebkitBoxShadow:
                "inset 0px 0px 0px black, inset 0px 0px 4px black",
              transition: "0.2s ease-in-out",
              transform: "scale(1.1)",
            },
          }}
          onClick={() => {
            closeSideBar();
          }}
        >
          <ListItemIcon sx={{ ...listIconStyle, mr: open ? 3 : "auto" }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText
            sx={{
              ...listItemText,
              opacity: open ? 1 : 0,
            }}
          >
            {item.key}
          </ListItemText>
        </ListItemButton>
      </ListItem>
    </Link>
  );
};
export default ItemComponent;
