import { styled } from "@mui/material";
import { theme } from "../../theme";

export const cardSection = {
  width: "90%",
  justifySelf: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "3rem",
  marginLeft: "auto",
  marginRight: "auto",
};

export const cardRow = {
  // flex: 1,
  margin: "auto",
  alignItems: "center",
  justifyContent: "space-between",
  height: { md: "100%", sm: "auto" },
  width: { lg: "90%", sm: "95%" },
};

export const cardContainer = {
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "3px",
  boxShadow: "2px 2px 20px 1px #b6b6b6",
  height: { lg: "500px", md: "400px", sm: "300px", xs: "350px" },
  width: { lg: "30%", md: "30%", sm: "30%", xs: "100%" },
};

export const cardImgContainer = {
  alignItems: "center",
  justifyContent: "center",
  width: { lg: "100%", xs: "80%" },
  height: "450px",
  transition: "all 0.5s ease",
  "&:hover": {
    backgroundColor: "#ffe7e7",
    opacity: "0.5",
    transition: "all 0.5s ease",
  },
};

export const cardBtnContainer = {
  background: "#5b5b5b",
  width: "100%",
  height: "50px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "3px",
  "&:hover": {
    background: "#e31e25",
    transition: "all 0.3s ease",
  },
};

export const showMoreText = {
  position: "absolute",
  visibility: "visible",
  color: theme.palette.error.main,
  opacity: 1,
  fontSize: "22px",
  fontWeight: 500,
  cursor: "pointer",
};
export const hideMoreText = {
  visibility: "hidden",
  position: "absolute",
};

export const cardButtonStyle = {
  color: "#ffffff",
  overflowX: "hidden",
  fontSize: "18px",
  fontWeight: 600,
  textTransform: "uppercase",
  borderRadius: "3px",
};

export const CardImageComponent = styled("img")({
  transition: "all 0.5s ease",
  maxHeight: "80%",
  width: "70%",
  "&:hover": {
    transform: "scale(1.2)",
    transition: "all 0.5s ease",
  },
});
