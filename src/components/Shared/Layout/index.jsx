import { useContext, useState } from "react";
import Topbar from "../Topbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { LayoutContext } from "@/Context";

const Layout = ({ children }) => {
  const theme = useTheme();
  const { open, setOpen, drawerwidth } = useContext(LayoutContext);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [openCategory, setOpenCategory] = useState(false);
  const [openSubCategory, setOpenSubCategory] = useState({
    inkjet: false,
    laser: false,
    thermal: false,
  });
  const { inkjet, laser, thermal } = openSubCategory;

  const handleDrawer = () => {
    setOpen(!open);
  };

  const closeSideBar = () => {
    setOpen(false);
    setOpenCategory(false);
    setOpenSubCategory({
      inkjet: false,
      laser: false,
      thermal: false,
    });
  };

  const handleCategory = () => {
    if (!open) handleDrawer();
    setOpenCategory(!openCategory);
  };

  const handleSubCategory = (componentKey) => {
    if (!open) handleDrawer();
    if (componentKey === "inkjet") {
      setOpenSubCategory({
        inkjet: !inkjet,
        laser: false,
        thermal: false,
      });
    } else if (componentKey === "laser") {
      setOpenSubCategory({
        inkjet: false,
        laser: !laser,
        thermal: false,
      });
    } else if (componentKey === "thermal") {
      setOpenSubCategory({
        inkjet: false,
        laser: false,
        thermal: !thermal,
      });
    }
  };

  return (
    <>
      <Box
        sx={{ position: "relative", display: "flex", flexDirection: "column" }}
      >
        <Topbar open={open} drawerwidth={drawerwidth} setOpen={handleDrawer} />
        <Sidebar
          handleDrawerOpen={handleDrawer}
          closeSideBar={closeSideBar}
          handleCategory={handleCategory}
          handleSubCategory={handleSubCategory}
          openCategory={openCategory}
          openSubCategory={openSubCategory}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginTop: "10vh",
            marginLeft: !isSmallScreen && theme.spacing(8),
            ...(!isSmallScreen &&
              open && {
                marginLeft: `${drawerwidth}px`,
                width: `calc(100% - (${drawerwidth}px))`,
              }),
            ...(isSmallScreen &&
              open && {
                margin: "0px",
                width: "100%",
                marginTop: "10vh",
              }),
          }}
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
