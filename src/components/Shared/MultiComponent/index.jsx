import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Fragment, useContext } from "react";
import NestedComponent from "../NestedComponent";
import { listButtonStyle, listIconStyle, listItemText } from "../Styles/Styles";
import { LayoutContext } from "../../../Context";

const MultiComponent = ({
  item,
  openCategory,
  openSubcategory,
  handleSubCategory,
  closeSideBar,
  handleCategory,
  handleNavigation,
}) => {
  const { open } = useContext(LayoutContext);
  return (
    <Fragment key={item.id}>
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
          {item.multicomponents.map((innerItem) => {
            return (
              <Fragment key={innerItem.key}>
                <NestedComponent
                  open={open}
                  handleSubCategory={handleSubCategory}
                  handleCategory={handleCategory}
                  openSubcategory={openSubcategory}
                  item={innerItem}
                  handleNavigation={handleNavigation}
                  closeSideBar={closeSideBar}
                />
              </Fragment>
            );
          })}
        </Collapse>
      </List>
    </Fragment>
  );
};
export default MultiComponent;
