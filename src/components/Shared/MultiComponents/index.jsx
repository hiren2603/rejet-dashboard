import { useContext } from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { listIconStyle } from "../Styles";
import { LayoutContext } from "@/Context";

const MultiComponents = ({ open, closeSideBar, item }) => {
  const { open } = useContext(LayoutContext);

  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemButton
            sx={{
              "&:hover": {
                background: "linear-gradient(145deg, #EA232E, #EA232E);",
                WebkitBoxShadow:
                  "inset 0px 0px 0px black, inset 0px 0px 4px black",
                transition: "0.2s ease-in-out",
                transform: "scale(1.1)",
              },
            }}
            onClick={closeSideBar}
          >
            <ListItemIcon
              sx={{
                ...listIconStyle,
                mr: open ? 3 : "auto",
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText>{item.key}</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};
export default MultiComponents;
