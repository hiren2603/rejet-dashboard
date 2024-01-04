import { styled } from "@mui/material";
import { theme } from "../../theme";

export const cardSection = {
  width: "90vw",
  height: "80vh",
  justifySelf: "center",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  // marginTop: "3rem",
  marginBottom: "3rem",
  marginLeft: "auto",
  marginRight: "auto",
  overflow: "hidden"
 
};

// export const cardRow = {
//   // flex: 1,
//   margin: "auto",
//   alignItems: "center",
//   justifyContent: "space-between",
//   height: { md: "100%", sm: "auto" },
//   width: { lg: "100%", sm: "100%" },
//   // position: "relative",
//   flexDirection: "row",
// };

export const cardContainer = {
  display: 'none',
  // position: "relative",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "3px",
  height: { lg: "500px", md: "400px", sm: "300px", xs: "350px" },
  width: { lg: "100%", md: "100%", sm: "100%", xs: "100%" },

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
  color: "#ffffff",
  fontSize: "18px",
  fontWeight: 300
}

export const cardTitle = {
  textTransform: "uppercase",
  fontSize: "72px",
  color: "#ffffff",
  fontWeight: 700,
  mb: 2
}
