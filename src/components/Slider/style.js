import { styled } from "@mui/material";

export const slideStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  transition: "all 2s ease",
  backgroundColor: "#00000080",
  backgroundBlendMode: "overlay",
  height: "90vh",
  width: "100%",
};

export const SlideTitle = styled("span")({
  textTransform: "uppercase",
  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
  fontWeight: "900",
});

export const imageTitleStyle = {
  color: "#f31f25",
  fontSize: { lg: "90px", md: "70px", sm: "50px", xs: "30px" },
};

export const imageTypeStyle = {
  color: "white",
  textShadow: "4px 2px 2px rgba(255, 0, 0, 0.781)",
  fontSize: { lg: "90px", md: "70px", sm: "50px", xs: "30px" },
};

export const iconContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#fcfcfc",
  position: "absolute",
  top: "47%",
  height: "2.5rem",
  width: "2.5rem",
  borderRadius: "50%",
  cursor: "pointer",
};
export const leftIconContainer = {
  left: "10px",
};

export const rightIconContainer = {
  right: "10px",
};
