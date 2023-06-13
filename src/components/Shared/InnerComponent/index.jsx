import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { listItemText } from "../Styles";
import { Link } from "react-router-dom";

const InnerComponent = ({ item, handleNavigation, closeSideBar }) => {
  return (
    <Link to={item.link}>
      <List sx={{ px: 2.5 }} disablePadding>
        <ListItem>
          <ListItemButton
            sx={{
              "&:hover": {
                background: "linear-gradient(145deg, #E31E25, #E31E25);",
                WebkitBoxShadow:
                  "inset 0px 0px 0px black, inset 0px 0px 4px black",
                transition: "0.2s ease-in-out",
                transform: "scale(1.1)",
              },
            }}
            onClick={() => {
              // handleNavigation(item.link);
              closeSideBar();
            }}
          >
            <ListItemText sx={listItemText}>{item.key}</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Link>
  );
};
export default InnerComponent;
