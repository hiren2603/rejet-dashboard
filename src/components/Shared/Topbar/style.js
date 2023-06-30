import { styled } from "@mui/material";

export const ContactButton = styled("a")({
  backgroundColor: "red",
  color: "#ffffff",
  width: "7rem",
  height: "2rem",
  fontSize: "16px",
  textTransform: "capitalize",
  fontWeight: "500",
  borderRadius: "2px",
  border: "1px solid #e31e25",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "1rem",
  "&:hover": {
    backgroundColor: "transparent",
    border: "1px solid #e31e25",
    color: "#000",
  },
  "&:last-child": {
    backgroundColor: "transparent",
    color: "black",
  },
  "&:last-child:hover": {
    backgroundColor: "red",
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
