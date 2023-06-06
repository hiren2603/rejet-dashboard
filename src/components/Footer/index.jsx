import Logo from "../../assets/logo.png";
import { LocationOn } from "@mui/icons-material";
import {
  Box,
  Stack,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
  styled,
} from "@mui/material";
import {
  headerTitle,
  headerDivider,
  footerDivider,
  quickLinkStyle,
  resQuickLinkStyle,
  mainStackStyle,
} from "./style";
import CustomDivider from "../CustomDivider";

const Footer = ({ drawerwidth, open }) => {
  const theme = useTheme();
  const smallSize = useMediaQuery(theme.breakpoints.down("sm"));
  const FooterContainer = styled("div")(({ theme }) => ({
    width: `100%`,
    padding: "20px 4px",
    gap: 1,
    backgroundColor: "#000000",
    bottom: "0px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // ...(open && {
    //   width: smallSize ? "105%" : `calc(100% - ${drawerwidth}px)`,
    //   marginLeft: smallSize ? "193px" : "0px",
    // }),

    ...(smallSize &&
      open && {
        width: "100%",
        marginLeft: "0",
      }),
    ...(!smallSize &&
      open && {
        marginLeft: drawerwidth,
        width: `calc(100% - ${drawerwidth}px)`,
      }),
    // ...(open && {
    //   marginLeft: smallSize ? "0px" : `${drawerwidth}`,
    //   width: smallSize ? "100%" : `calc(100% - ${drawerwidth}px)`,
    // }),
  }));
  return (
    <>
      <FooterContainer>
        <Stack
          direction={smallSize ? "column" : "row"}
          sx={
            smallSize
              ? { alignItems: "center", justifyContent: "center", gap: 2 }
              : { alignItems: "flex-start", justifyContent: "space-evenly" }
          }
        >
          <Stack sx={smallSize ? { alignItems: "center" } : { gap: 3 }}>
            <Typography sx={headerTitle}>Quick Links</Typography>
            <CustomDivider />
            <Box sx={smallSize ? resQuickLinkStyle : quickLinkStyle}>
              <Typography>Home</Typography>
              <Typography>About</Typography>
              <Typography>Applications</Typography>
              <Typography>E-Waste Management</Typography>
              <Typography>Contact</Typography>
            </Box>
          </Stack>

          <Stack sx={smallSize ? { alignItems: "center" } : { gap: 3 }}>
            <Typography sx={headerTitle}>Products</Typography>
            <CustomDivider />
            <Box sx={smallSize ? resQuickLinkStyle : quickLinkStyle}>
              <Typography>Inkjet</Typography>
              <Typography>Co2</Typography>
              <Typography>Fiber</Typography>
              <Typography>Desktop</Typography>
              <Typography>UV</Typography>
              <Typography>TIJ</Typography>
            </Box>
          </Stack>

          <Stack sx={smallSize ? { alignItems: "center" } : { gap: 3 }}>
            <Typography sx={headerTitle}>Contanct Us</Typography>
            <CustomDivider />
            <Box sx={smallSize ? resQuickLinkStyle : quickLinkStyle}>
              <Typography>Call : 99099 81123</Typography>
              <Typography>E-mail : info@rejettech.com</Typography>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <LocationOn />
                Find Us On Map
              </Typography>
            </Box>
          </Stack>

          <Stack sx={smallSize ? { alignItems: "center" } : { gap: 3 }}>
            <Typography sx={headerTitle}>Location</Typography>
            <CustomDivider />
            <Box sx={smallSize ? resQuickLinkStyle : quickLinkStyle}>
              <img src={Logo} alt="logo" height={45} width={130} />
              <Typography>Plot No. 36, Suvery No. 277/,</Typography>
              <Typography>Opp. Kaneria Oil Industries,</Typography>
              <Typography>Rani Industrial Area,</Typography>
              <Typography>Shapar (Veraval) 360024-Rajkot</Typography>
              <Typography>(Gujrat), India</Typography>
            </Box>
          </Stack>
        </Stack>
        <Divider sx={{ backgroundColor: "#c9c9c9" }} />
        <Stack sx={{ alignItems: "center", color: "#c0c0c0" }}>
          <Typography>Copyright © 2021 Radhe Enterprise</Typography>
          <Typography>Developed By Gravity Infotech</Typography>
        </Stack>
      </FooterContainer>
    </>
  );
};
export default Footer;
