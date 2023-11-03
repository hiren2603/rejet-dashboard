import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Stack,
  ClickAwayListener,
  Divider, 
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import Navlist from "../Navlist";
import PersistSidebar from "../PersistSidebar";
import { useContext } from "react";
import { LayoutContext } from "../../../Context";

const Sidebar = ({
  // eslint-disable-next-line react/prop-types
  closeSideBar,
  handleDrawerOpen,
  handleCategory,
  handleSubCategory,
  openCategory,
  openSubCategory
}) => {
  const theme = useTheme();
  const { open, drawerwidth } = useContext(LayoutContext);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const openedMixin = (theme) => ({
    width: drawerwidth,
    backgroundColor: theme.palette.error.main,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.error.main,
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    backgroundColor: theme.palette.error.main,
    alignItems: "center",
    height: "11vh",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerwidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    backgroundColor: theme.palette.error.main,
    // border: "1px solid black",
    "&::scrollbar": {
      width: "5px",
    },
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  return (
    <>
      <Box sx={{ display: "flex" }} onKeyDown={closeSideBar}>
        {isSmallScreen ? (
          <>
            <PersistSidebar
              open={open}
              closeSideBar={closeSideBar}
              handleDrawerOpen={handleDrawerOpen}
              handleCategory={handleCategory}
              handleSubCategory={handleSubCategory}
              openCategory={openCategory}
              openSubCategory={openSubCategory}
            />
          </>
        ) : (
          <>
            <ClickAwayListener onClickAway={closeSideBar}>
              <Drawer
                variant={"permanent"}
                open={open}
                PaperProps={{
                  elevation: 10,
                }}
              >
                <DrawerHeader>
                  {open ? (
                    <Stack>
                      <IconButton onClick={closeSideBar}>
                        <KeyboardDoubleArrowLeftIcon sx={{ color: "#fff" }} />
                      </IconButton>
                    </Stack>
                  ) : (
                    <Stack>
                      <IconButton onClick={handleDrawerOpen}>
                        <MenuIcon sx={{ color: "#fff" }} />
                      </IconButton>
                    </Stack>
                  )}
                </DrawerHeader>
                <Divider />
                <Box onKeyDown={closeSideBar}>
                  <Navlist
                    open={open}
                    closeSideBar={closeSideBar}
                    openCategory={openCategory}
                    openSubCategory={openSubCategory}
                    handleCategory={handleCategory}
                    handleSubCategory={handleSubCategory}
                  />
                </Box>
              </Drawer>
            </ClickAwayListener>
          </>
        )}
      </Box>
    </>
  );
};
export default Sidebar;