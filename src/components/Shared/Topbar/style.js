import { styled } from "@mui/material";

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
