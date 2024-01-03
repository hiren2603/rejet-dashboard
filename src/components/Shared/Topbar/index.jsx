import { useState } from "react";
import {
  Box,
  Container,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Logo from "../../../assets/logo.png";
import { ContactButton, contactContainer, LinkContainer, DropDownLink, DropDown, SubDropDown, NavLinkContainer } from "./style";
import { Link } from "react-router-dom";
import { MenuOpenOutlined } from "@mui/icons-material";

const Topbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [menu, setMenu] = useState({
    inkjet: false,
    laser: false,
    thermal: false
  });
  let { inkjet, laser, thermal } = menu;

  const multiToggle = () => {
    setDropDown(false);
    setMenu({
      inkjet: false,
      laser: false,
      thermal: false
    })
  }

  const linkOpen = (name) => {
    setMenu((prevSubLink) => ({
      laser: name === "laser",
      thermal: name === "thermal",
      inkjet: name === "inkjet",
    }));
  };

  const linkClose = () => {
    setMenu({
      inkjet: false,
      laser: false,
      thermal: false
    })
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
      <AppBar
        position="fixed"
        // open={open}
        // drawerwidth={drawerwidth}
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
            {isSmallScreen ? (
              <>
                <Box
                  sx={{
                    flexGrow: 3,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton>
                    <MenuIcon />
                  </IconButton>
                </Box>
              </>
            ) : (
              <NavLinkContainer>
                <LinkContainer>
                  <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                </LinkContainer>
                <LinkContainer>
                  <Link
                    to="#"
                    // onMouseEnter={() => setDropDown(true)}
                    // onMouseLeave={() => multiToggle()}
                    onClick={() => setDropDown(true)}
                  >
                    Products
                  </Link>
                  {dropDown && (
                    <DropDown>
                      <DropDownLink
                        onMouseOver={() => linkOpen("inkjet")}
                        onMouseLeave={() => linkClose()}
                      >
                        <Link to="#" >Inkjet</Link>
                        {inkjet && (
                          <SubDropDown>
                            <DropDownLink>
                              <Link to="/products/inkjet/re200+" onClick={() => { multiToggle() }}>Re200+</Link>
                            </DropDownLink>
                            <DropDownLink>
                              <Link to="/products/inkjet/re224" onClick={() => { multiToggle() }}>Re224</Link>
                            </DropDownLink>
                            <DropDownLink>
                              <Link to="/products/inkjet/re225" onClick={() => { multiToggle() }}>Re225</Link>
                            </DropDownLink>
                            <DropDownLink>
                              <Link to="/products/inkjet/re2000" onClick={() => { multiToggle() }}>Re2000</Link>
                            </DropDownLink>
                            <DropDownLink>
                              <Link to="/products/inkjet/re2000p" onClick={() => { multiToggle() }}>Re2000p</Link>
                            </DropDownLink>
                            <DropDownLink>
                              <Link to="/products/inkjet/re1000" onClick={() => { multiToggle() }}>Re1000</Link>
                            </DropDownLink>
                          </SubDropDown>
                        )}
                      </DropDownLink>

                      <DropDownLink
                        onMouseOver={() => linkOpen("thermal")}
                        onMouseLeave={() => linkClose()}
                      >
                        <Link to="#">Thermal</Link>
                        {thermal && (
                          <SubDropDown>
                            <DropDownLink>
                              <Link to="/products/tij/re10" onClick={() => { multiToggle() }}>Re10.1</Link>
                            </DropDownLink>
                            <DropDownLink>
                              <Link to="/products/tij/re-handy" onClick={() => { multiToggle() }}>ReHandy</Link>
                            </DropDownLink>
                          </SubDropDown>
                        )}
                      </DropDownLink>

                      <DropDownLink
                        onMouseOver={() => linkOpen("laser")}
                        onMouseLeave={() => linkClose()}
                      >
                        <Link to="#">Laser</Link>
                        {laser && (
                          <SubDropDown>
                            <DropDownLink>
                              <Link to="/products/laser/co2" onClick={() => { multiToggle() }}>Co2</Link>
                            </DropDownLink>
                            <DropDownLink>
                              <Link to="/products/laser/desktop" onClick={() => { multiToggle() }}>Desktop</Link>
                            </DropDownLink>
                            <DropDownLink>
                              <Link to="/products/laser/fiber" onClick={() => { multiToggle() }}>Fiber</Link>
                            </DropDownLink>
                            <DropDownLink>
                              <Link to="/products/laser/uv" onClick={() => { multiToggle() }}>UV</Link>
                            </DropDownLink>
                          </SubDropDown>
                        )}
                      </DropDownLink>
                    </DropDown>
                  )}
                </LinkContainer>
                <LinkContainer>
                  <Link to="/applications">Applications</Link>
                </LinkContainer>
                <LinkContainer>
                  <Link to="/ewest-management">Applications</Link>
                </LinkContainer>
                <LinkContainer>
                  <Link to="/about">About</Link>
                </LinkContainer>
                <LinkContainer>
                  <Link to="/contact">Contact Us</Link>
                </LinkContainer>
              </NavLinkContainer>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Topbar;
