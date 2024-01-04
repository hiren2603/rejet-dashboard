import { useState } from "react";
import {
  Box,
  Container,
  Drawer,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Logo from "../../../assets/logo.png";
import LinkSection from "./LinkSection";
import { ContactButton, contactContainer, NavLinkContainer, MobileLinkContainer } from "./style";
import { Link } from "react-router-dom";
import { MenuOpenOutlined } from "@mui/icons-material";

const Topbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [menu, setMenu] = useState({
    inkjet: false,
    thermal: false,
    laser: false
  });
  let { inkjet, thermal, laser } = menu;

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleMenu = (name, value) => {
    if (name === "inkjet") {
      setMenu({
        inkjet: value,
        thermal: false,
        laser: false
      })
    } else if (name === "thermal") {
      setMenu({
        inkjet: false,
        thermal: value,
        laser: false
      })
    } else if (name === "laser") {
      setMenu({
        inkjet: false,
        thermal: false,
        laser: value
      })
    }
  }

  const multiToggle = () => {
    setMenu({
      inkjet: false,
      thermal: false,
      laser: false
    });
    setDropDown(false);
    setIsOpen(false);
  }

  const AppBar = styled(MuiAppBar)(() => ({
    // width: isSmallScreen ? "100%" : `calc(100% - (${theme.spacing(8)} + 1px))`,
    width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "center",
  }));

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ height: 75 }}
      >
        <Container sx={{ maxWidth: "1900px!important" }}>
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Link to="/">
              <img src={Logo} width={180} height={60} alt="logo" />
            </Link>

            {isOpen ? (
              <MobileLinkContainer>
                <LinkSection
                  dropDown={dropDown}
                  setDropDown={setDropDown}
                  menu={menu}
                  toggleDrawer={toggleDrawer}
                  handleMenu={handleMenu}
                  multiToggle={multiToggle}
                />
              </MobileLinkContainer>
            ) : (
              <NavLinkContainer>
                <LinkSection
                  dropDown={dropDown}
                  setDropDown={setDropDown}
                  menu={menu}
                  toggleDrawer={toggleDrawer}
                  handleMenu={handleMenu}
                  multiToggle={multiToggle}
                />
              </NavLinkContainer>
            )}

            {isSmallScreen && (
              <Box
                sx={{
                  flexGrow: 3,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {isOpen ? (
                  <IconButton sx={{ color: "white" }} onClick={() => { toggleDrawer() }}>
                    <CloseIcon color="white" />
                  </IconButton>
                ) : (
                  <IconButton sx={{ color: "white" }} onClick={() => { toggleDrawer() }}>
                    <MenuIcon color="white" />
                  </IconButton>
                )}
              </Box>
            )}

          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Topbar;