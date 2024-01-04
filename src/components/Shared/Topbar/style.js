import { styled, useTheme } from "@mui/material";
// const theme = useTheme();

export const NavLinkContainer = styled("div")(({ theme }) => ({
  gridColumn: "3/4",
  flex: "80%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    display: "none"
  },
  [theme.breakpoints.down("md")]: { display: "none" }
}))

export const MobileLinkContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "100%",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  position: "absolute",
  left: "-7vh",
  // top: "6vh",
  height: "80vh",
  width: "120vw",
  transition: "all .5s ease-in",
  zIndex: "9",
  backgroundColor: "#161922",
 

  [theme.breakpoints.down("sm")]: {
    top: "0",
    left: "-12vh",
  },
  [theme.breakpoints.down("md")]: { top: "13vh", left: "-16vh" },
}))

export const LinkContainer = styled("div")({
  position: "relative",
  alignItems: "center",
  textTransform: "capitalize",
  fontSize: "18px",
  letterSpacing: "1px",
  color: "#ffffff",
  transition: "all 0.3s ease",
  "& a": {
    color: "#ffffff",
    fontSize: "18px",
    transition: "all 0.5s ease-in",
  },
  "& a:hover": {
    color: "#E31E25",
    transition: "all 0.5s ease",
    fontWeight: "500"
  }
})

export const DropDown = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: 'column',
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  left: "-30%",
  width: "130px",
  backgroundColor: "#161922",
  zIndex: "10"
}))

export const DropDownLink = styled("div")({
  padding: "5px 10px",
  display: "flex",
  position: "relative",
  alignItems: "center",
  justifyCenter: "center",
  width: "100%",
  borderBottom: "1px solid #ffffff",
  "& a": {
    color: "#ffffff",
    fontSize: "18px",
    textTransform: "capitalize",
    transition: "1s ease-in"
  },
  "& a:hover": {
    color: "#E31E25",
    transition: "all 0.5s ease",
    fontWeight: "500"
  }
})

export const SubDropDown = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: 'absolute',
  left: "101%",
  top: "0rem",
  width: "150px",
  backgroundColor: "#161922",
})

export const ContactButton = styled("a")({
  backgroundColor: "#ea232e",
  color: "#ffffff",
  width: "7rem",
  height: "2rem",
  fontSize: "16px",
  textTransform: "capitalize",
  fontWeight: "500",
  borderRadius: "2px",
  border: "1px solid #ea232e",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "1rem",
  "&:hover": {
    backgroundColor: "transparent",
    border: "1px solid #ea232e",
    color: "#fff",
  },
  "&:last-child": {
    backgroundColor: "transparent",
    color: "#fff",
  },
  "&:last-child:hover": {
    backgroundColor: "#e31e25",
    color: "#fff",
  },
});

export const contactContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  visibility: { lg: "visible", md: "visible", sm: "visible", xs: "hidden" },
};
