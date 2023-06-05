import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { listIconStyle, listButtonStyle, listItemText } from "../Styles/Styles";
import MultiComponents from "../MultiComponents";
import NestedComponent from "../NestedComponent";

const MultiComponent = ({
  open,
  item,
  openCategory,
  openSubcategory,
  handleSubCategory,
  closeSideBar,
  handleCategory,
  handleNavigation,
}) => {
  return (
    <>
      <List>
        <ListItemButton
          sx={{ ...listButtonStyle, px: open ? 2.5 : 5.3 }}
          onClick={() => {
            handleCategory();
          }}
        >
          <ListItemIcon sx={{ ...listIconStyle, mr: open ? 3 : "auto" }}>
            {item.icon}
          </ListItemIcon>

          <ListItemText sx={{ ...listItemText, opacity: open ? 1 : 0 }}>
            {item.key}
          </ListItemText>

          {openCategory ? (
            <ExpandLess sx={{ ...listIconStyle, opacity: open ? 1 : 0 }} />
          ) : (
            <ExpandMore sx={{ ...listIconStyle, opacity: open ? 1 : 0 }} />
          )}
        </ListItemButton>
        <Collapse in={openCategory} timeout={"auto"} unmountOnExit>
          {item.multicomponents?.map((innerItem) => {
            return (
              <>
                <NestedComponent
                  key={innerItem.id}
                  open={open}
                  handleSubCategory={handleSubCategory}
                  handleCategory={handleCategory}
                  openSubcategory={openSubcategory}
                  item={innerItem}
                  handleNavigation={handleNavigation}
                />
              </>
            );
          })}
        </Collapse>
      </List>
    </>
  );
};
export default MultiComponent;
