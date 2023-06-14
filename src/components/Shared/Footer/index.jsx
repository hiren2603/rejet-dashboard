import { LocationOn } from "@mui/icons-material";
import {
  Box,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiPaper from "@mui/material/Paper";
import { useContext } from "react";
import { LayoutContext } from "../../../Context";
import Logo from "../../../assets/logo.png";
import CustomDivider from "../CustomDivider";
import { headerTitle, quickLinkStyle, resQuickLinkStyle } from "./style";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const midScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { drawerwidth, open } = useContext(LayoutContext);

  const footerColumnStyle = {
    alignItems: "center",
    gap: midScreen ? 4 : 2,
  };

  const FooterContainer = styled(MuiPaper, {
    shouldForwardProp: (prop) => prop !== open,
  })(({ theme }) => ({
    width: isSmallScreen ? "100%" : `calc(100% - (${theme.spacing(8)}))`,
    marginLeft: !isSmallScreen ? "4rem" : 0,
    padding: "20px 4px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#000000",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: !isSmallScreen ? drawerwidth : 0,
      width: isSmallScreen ? "100%" : `calc(100% - ${drawerwidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  return (
    <>
      <FooterContainer square>
        <Stack
          direction={isSmallScreen ? "column" : "row"}
          sx={{
            width: "90%",
            m: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: 1,
          }}
        >
          <Stack sx={footerColumnStyle}>
            <Typography sx={headerTitle}>Quick Links</Typography>
            <CustomDivider />
            <Box sx={isSmallScreen ? resQuickLinkStyle : quickLinkStyle}>
              <Typography>Home</Typography>
              <Typography>About</Typography>
              <Typography>Applications</Typography>
              <Typography>E-Waste Management</Typography>
              <Typography>Contact</Typography>
            </Box>
          </Stack>

          <Stack sx={footerColumnStyle}>
            <Typography sx={headerTitle}>Products</Typography>
            <CustomDivider />
            <Box sx={isSmallScreen ? resQuickLinkStyle : quickLinkStyle}>
              <Typography>Inkjet</Typography>
              <Typography>Co2</Typography>
              <Typography>Fiber</Typography>
              <Typography>Desktop</Typography>
              <Typography>UV</Typography>
              <Typography>TIJ</Typography>
            </Box>
          </Stack>

          <Stack sx={footerColumnStyle}>
            <Typography align={midScreen ? "center" : "left"} sx={headerTitle}>
              Contanct Us
            </Typography>
            <CustomDivider />
            <Box sx={isSmallScreen ? resQuickLinkStyle : quickLinkStyle}>
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

          <Stack sx={footerColumnStyle}>
            <Typography sx={headerTitle}>Location</Typography>
            <CustomDivider />
            <Box sx={isSmallScreen ? resQuickLinkStyle : quickLinkStyle}>
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
