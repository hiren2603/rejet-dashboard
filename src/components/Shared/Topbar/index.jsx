import { useState, useEffect } from "react";
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
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Logo from "../../../assets/logo.png";
import LinkSection from "./LinkSection";
import {
  ContactButton,
  contactContainer,
  NavLinkContainer,
  MobileLinkContainer,
} from "./style";
import { Link } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [menu, setMenu] = useState({
    inkjet: false,
    thermal: false,
    laser: false,
    dod: false,
  });
  let { inkjet, thermal, laser } = menu;

  useEffect(() => {
    // Add and remove 'no-scroll' class to body based on the drawer state
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleMenu = (name, value) => {
    if (name === "inkjet") {
      setMenu({
        inkjet: value,
        laser: false,
        thermal: false,
        dod: false,
      });
    } else if (name === "thermal") {
      setMenu({
        inkjet: false,
        laser: false,
        thermal: value,
        dod: false,
      });
    } else if (name === "laser") {
      setMenu({
        inkjet: false,
        thermal: false,
        dod: false,
        laser: value,
      });
    } else if (name === "dod") {
      setMenu({
        inkjet: false,
        thermal: false,
        laser: false,
        dod: value,
      });
    }
  };

  const multiToggle = () => {
    setMenu({
      inkjet: false,
      thermal: false,
      laser: false,
      dod: false,
    });
    setDropDown(false);
    setIsOpen(false);
  };

  const AppBar = styled(MuiAppBar)(() => ({
    // width: isSmallScreen ? "100%" : `calc(100% - (${theme.spacing(8)} + 1px))`,
    width: "100%",
    height: "10vh",
    display: "flex",
    justifyContent: "center",
  }));

  return (
    <>
      <AppBar elevation={0} position="fixed" sx={{ height: 75 }}>
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
                  multiToggle={multiToggle}
                />
              </MobileLinkContainer>
            ) : (
              <NavLinkContainer>
                <LinkSection
                  dropDown={dropDown}
                  setDropDown={setDropDown}
                  multiToggle={multiToggle}
                />
              </NavLinkContainer>
            )}

            {isSmallScreen ? (
              <Box
                sx={{
                  flexGrow: 3,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                {isOpen ? (
                  <IconButton
                    sx={{ color: "white" }}
                    onClick={() => {
                      toggleDrawer();
                    }}
                  >
                    <CloseIcon color="white" />
                  </IconButton>
                ) : (
                  <IconButton
                    sx={{ color: "white" }}
                    onClick={() => {
                      toggleDrawer();
                    }}
                  >
                    <MenuIcon color="white" />
                  </IconButton>
                )}
              </Box>
            ) : (
              <Box sx={contactContainer}>
                <ContactButton
                  href="tel:769-827-1412"
                  onClick={() => setIsOpen(false)}
                >
                  <CallIcon />
                  Call Now
                </ContactButton>

                <ContactButton
                  href="mailto:info@rejettech.com"
                  onClick={() => setIsOpen(false)}
                >
                  <EmailIcon color="white" />
                  Send Mail
                </ContactButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Topbar;
