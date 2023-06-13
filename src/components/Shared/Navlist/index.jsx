import { List } from "@mui/material";
import { Fragment, useContext } from "react";
import { redirect } from "react-router-dom";
import { NavigationList } from "../../../helpers/NavigationList";
import ItemComponent from "../ItemComponent";
import MultiComponent from "../MultiComponent";
import { LayoutContext } from "@/Context";

const Navlist = ({
  closeSideBar,
  openCategory,
  openSubCategory,
  handleCategory,
  handleSubCategory,
}) => {
  const handleNavigation = (linkText) => {
    console.log(linkText);
    redirect(`${linkText}`);
  };
  const { open } = useContext(LayoutContext);
  return (
    <>
      <List>
        {NavigationList.map((item, index) => {
          if (item.multicomponent) {
            return (
              <Fragment key={item.id}>
                <MultiComponent
                  open={open}
                  item={item}
                  openCategory={openCategory}
                  openSubcategory={openSubCategory}
                  handleSubCategory={handleSubCategory}
                  closeSideBar={closeSideBar}
                  handleCategory={handleCategory}
                  handleNavigation={handleNavigation}
                />
              </Fragment>
            );
          } else {
            return (
              <Fragment key={item.id}>
                <ItemComponent
                  open={open}
                  item={item}
                  closeSideBar={closeSideBar}
                  handleNavigation={handleNavigation}
                />
              </Fragment>
            );
          }
        })}
      </List>
    </>
  );
};

export default Navlist;
