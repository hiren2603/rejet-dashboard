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

const Topbar = ({ open, drawerwidth, setOpen }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
            {isSmallScreen && (
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
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Topbar;
