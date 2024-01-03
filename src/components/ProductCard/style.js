import { styled } from "@mui/material";
import { theme } from "../../theme";

export const cardSection = {
  width: "95%",
  height: "80vh",
  justifySelf: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // marginTop: "3rem",
  marginBottom: "3rem",
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
  position: "relative"
};

export const cardContainer = {
  position: "absolute",
  // background: "#ffffff",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "3px",
  // boxShadow: "2px 2px 20px 1px rgba(0, 0, 0, 0.5)",
  height: { lg: "500px", md: "400px", sm: "300px", xs: "350px" },
  width: { lg: "100%", md: "100%", sm: "100%", xs: "100%" },
  overflowX: 'hidden'
};

export const cardImgContainer = {
  flex: "1",
  alignItems: "center",
  justifyContent: "center",
  width: { lg: "100%", xs: "80%" },
  height: "450px",
  transition: "all 0.5s ease"
};
export const cardInfoContainer ={
  flex: "1",
  display: 'flex'
}

export const cardBtnContainer = {
  width: "100%",
  height: "60px",
  display: "flex",
  justifyContent: "center",
  // alignItems: "center",
  borderRadius: "3px",
  mt: 5 
};

export const cardButtonStyle = {
  color: "#ffffff",
  backgroundColor: "#EA232E",
  height: "100%",
  width: "30%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: 600,
  textTransform: "uppercase",
  borderRadius: "3px",
  "&:hover": {
    backgroundColor: "#EA232E",
    transition: "all 0.3s ease",
  },
};

export const CardImageComponent = styled("img")({
  transition: "all 0.5s ease",
  maxHeight: "80%",
  width: "70%",
});

export const cardDetail ={
  color: "#ffffff"
}

export const cardTitle = {
  color: "#ffffff",
  fontWeight: 700,
  mb: 2
}
