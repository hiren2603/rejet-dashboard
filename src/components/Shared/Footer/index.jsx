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
import MuiLink from "@mui/material/Link";
import { useContext } from "react";
import { LayoutContext } from "../../../Context";
import Logo from "../../../assets/logo.png";
import CustomDivider from "../CustomDivider";
import {
  headerTitle,
  quickLinkStyle,
  resQuickLinkStyle,
  footerLinkStyle,
} from "./style";
import { Link, Link as RoutingLink } from "react-router-dom";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const midScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { drawerwidth, open } = useContext(LayoutContext);

  const StyledLink = styled(MuiLink)`
    color: "#c0c0c0";
    &: hover {
      color: "white";
    }
  `;

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
              <RoutingLink to="/" style={footerLinkStyle}>
                Home
              </RoutingLink>
              <RoutingLink to="/about" style={footerLinkStyle}>
                About
              </RoutingLink>
              <RoutingLink to="/applications" style={footerLinkStyle}>
                Applications
              </RoutingLink>
              <RoutingLink to="/ewest-management" style={footerLinkStyle}>
                E-Waste Management
              </RoutingLink>
              <RoutingLink to="/contact" style={footerLinkStyle}>
                Contact
              </RoutingLink>
            </Box>
          </Stack>

          <Stack sx={footerColumnStyle}>
            <Typography sx={headerTitle}>Products</Typography>
            <CustomDivider />
            <Box sx={isSmallScreen ? resQuickLinkStyle : quickLinkStyle}>
              <RoutingLink to="/products/inkjet/re200+" style={footerLinkStyle}>
                Inkjet
              </RoutingLink>
              <RoutingLink to="/products/laser/co2" style={footerLinkStyle}>
                Co2
              </RoutingLink>
              <RoutingLink to="/products/laser/fiber" style={footerLinkStyle}>
                Fiber
              </RoutingLink>
              <RoutingLink to="/products/laser/desktop" style={footerLinkStyle}>
                Desktop
              </RoutingLink>
              <RoutingLink to="/products/laser/uv" style={footerLinkStyle}>
                UV
              </RoutingLink>
              <RoutingLink to="/products/tij/tp01" style={footerLinkStyle}>
                TIJ
              </RoutingLink>
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
                <RoutingLink to={"/contact"} style={{...footerLinkStyle, display : "flex", alignItems : "center"}}>
                  <LocationOn />
                  Find Us On Map
                </RoutingLink>
              </Typography>
            </Box>
          </Stack>

          <Stack sx={footerColumnStyle}>
            <Typography sx={headerTitle}>Location</Typography>
            <CustomDivider />
            <Box sx={isSmallScreen ? resQuickLinkStyle : quickLinkStyle}>
              <Link to="/"><img src={Logo} alt="logo" height={45} width={130} /></Link>
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
