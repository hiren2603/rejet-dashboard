import { useState } from "react";
import {
  Box,
  Container,
  Toolbar,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Logo from "../../../assets/logo.png";
import { ContactButton, contactContainer } from "./style";

const Topbar = ({ open, drawerwidth, setOpen }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(false);

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== open,
  })(({ theme, open, drawerwidth }) => ({
    width: isSmallScreen ? "100%" : `calc(100% - (${theme.spacing(8)} + 1px))`,
    height: "10vh",
    display: "flex",
    justifyContent: "center",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerwidth,
      width: isSmallScreen ? "100%" : `calc(100% - ${drawerwidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    // ...(theme.breakpoints.down("sm") && {
    // width: "100%",
    // }),
  }));

  return (
    <>
      <AppBar position="fixed" open={open} drawerwidth={drawerwidth}>
        <Container sx={{ maxWidth: "1900px!important" }}>
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <img src={Logo} width={180} height={60} alt="logo" />
            {isSmallScreen ? (
              <>
                <Box
                  sx={{
                    flexGrow: 3,
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <IconButton onClick={setOpen}>
                    <MenuIcon />
                  </IconButton>
                </Box>
              </>
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
