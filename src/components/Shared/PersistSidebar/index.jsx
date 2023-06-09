import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Stack,
  useTheme,
  styled,
} from "@mui/material";
import { CloseSharp } from "@mui/icons-material";
import Navlist from "../Navlist";
import { useContext } from "react";
import { LayoutContext } from "../../../Context";

const PersistSidebar = ({
  closeSideBar,
  handleDrawerOpen,
  handleCategory,
  handleSubCategory,
  openCategory,
  openSubCategory,
}) => {
  const theme = useTheme();
  const { open } = useContext(LayoutContext);
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    backgroundColor: theme.palette.error.main,
    alignItems: "center",
    height: "10vh",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <>
      <Drawer
        anchor="left"
        open={open}
        PaperProps={{
          elevation: 10,
          sx: {
            background: theme.palette.error.main,
          },
        }}
      >
        <DrawerHeader>
          <Stack>
            <IconButton onClick={closeSideBar}>
              <CloseSharp sx={{ color: "#fff" }} />
            </IconButton>
          </Stack>
        </DrawerHeader>
        <Divider />
        <Box>
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
    </>
  );
};
export default PersistSidebar;
