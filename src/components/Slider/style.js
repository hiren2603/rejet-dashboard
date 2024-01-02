import { styled } from "@mui/material";


export const SlideTitle = styled("span")({
  textTransform: "uppercase",
  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
  fontWeight: "900",
});

export const imageTitleStyle = {
  color: "#f31f25",
  fontSize: { lg: "90px", md: "70px", sm: "50px", xs: "30px" },
};

export const slideTextStyle = {
  position: {lg: "absolute", md: "absolute", sm: "absolute", xs: "absolute"},
  top: "50%",
  left: "50%",
  transform:"translate(-50%, -10%)",
  display: {lg: "flex", md: "flex", sm: "flex", sx: "flex"},
  flexDirection: "column",
  transition: "all 2s ease",
  height: "90vh",
  width: "100%",
  textAlign: "center",
  transition: "all 0.5s ease"
};

export const slideTitle = {
  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
  display: {lg: "block", md: "block",  sm: "block" ,xs: "block"},
  fontSize: {lg: "36px", md: "30px", sm: "24px", xs: "20px"},
  fontWeight: "600",
  lineHeight: 1.5,
  userSelect: "none",
};
export const slideDetails ={
  color: "#efefef",
  display: {lg: 'block', md: "block", sm: "block", xs: "block"},
  fontSize: {lg: "26px", md: "22px", sm: "20px", xs: "14px"},
  lineHeight: 1.5,
  userSelect: "none"
}

export const slideTag ={
  color: "#ffbd3a",
  display: {lg: "block", md: "block", sm: "block" , xs: "block"},
  fontSize:{ lg: "24px", md: "20px", sm: "18px", xs: "16px"},
  lineHeight: 2,
  textTransform: "uppercase",
  fontWeight: 600,
  userSelect: "none",
}

export const imageTypeStyle = {
  color: "white",
  textShadow: "4px 2px 2px rgba(255, 0, 0, 0.781)",
  fontSize: { lg: "90px", md: "70px", sm: "50px", xs: "30px" },
};

export const iconContainerStyle = {
  display: {lg: "flex", md: "flex", sm: "none", xs: 'none' },
  alignItems: "center",
  justifyContent: "center",
  background: "#fcfcfc",
  position: "absolute",
  top: "47%",
  height: "2.5rem",
  width: "2.5rem",
  borderRadius: "50%",
  cursor: "pointer",
  zIndex:10
};
export const leftIconContainer = {
  left: "10px",
};

export const rightIconContainer = {
  right: "10px",
};

export const overlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,.4)",
  backgroundRepeat: "no-repeat",
}
