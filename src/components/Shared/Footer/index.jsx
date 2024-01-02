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
import Class from "./Footer.module.css";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const midScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { drawerwidth, open } = useContext(LayoutContext);

  // const StyledLink = styled(MuiLink)`
  //   color: "#c0c0c0";
  //   &: hover {
  //     color: "white";
  //   }
  // `;

  const StyledLink = {
    fontSize: "16px",
    color: "#c0c0c0",
    "&:hover": {
      color: "red",
    },
  };

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
    backgroundColor: "#161922",
    boxShadow: "0px -1px 2px 1px rgba(0, 0, 0, 0.4)",
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
              <RoutingLink to="/" className={Class.footerLinkStyle}>
                Home
              </RoutingLink>
              <RoutingLink to="/about" className={Class.footerLinkStyle}>
                About
              </RoutingLink>
              <RoutingLink to="/applications" className={Class.footerLinkStyle}>
                Applications
              </RoutingLink>
              <RoutingLink
                to="/ewest-management"
                className={Class.footerLinkStyle}
              >
                E-Waste Management
              </RoutingLink>
              <RoutingLink to="/contact" className={Class.footerLinkStyle}>
                Contact
              </RoutingLink>
            </Box>
          </Stack>

          <Stack sx={footerColumnStyle}>
            <Typography sx={headerTitle}>Products</Typography>
            <CustomDivider />
            <Box sx={isSmallScreen ? resQuickLinkStyle : quickLinkStyle}>
              <RoutingLink
                to="/products/inkjet/re200+"
                className={Class.footerLinkStyle}
              >
                Inkjet
              </RoutingLink>
              <RoutingLink
                to="/products/laser/co2"
                className={Class.footerLinkStyle}
              >
                Co2
              </RoutingLink>
              <RoutingLink
                to="/products/laser/fiber"
                className={Class.footerLinkStyle}
              >
                Fiber
              </RoutingLink>
              <RoutingLink
                to="/products/laser/desktop"
                className={Class.footerLinkStyle}
              >
                Desktop
              </RoutingLink>
              <RoutingLink
                to="/products/laser/uv"
                className={Class.footerLinkStyle}
              >
                UV
              </RoutingLink>
              <RoutingLink
                to="/products/tij/tp01"
                className={Class.footerLinkStyle}
              >
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
                <RoutingLink
                  to={"/contact"}
                  style={{
                    ...footerLinkStyle,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
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
              <Link to="/">
                <img src={Logo} alt="logo" height={45} width={130} />
              </Link>
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
