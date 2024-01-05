import { styled } from "@mui/material";

export const productHeading = {
  fontSize: "36px",
  textTransform: "uppercase",
  textAlign: "center",
  color: "#000000",
  textShadow: "2px 2px 4px rgba(255, 100, 100, 0.8)",
  fontWeight: 700,
  margin: "2rem 0",
};

export const modelHeading = {
  fontSize: "26px",
  textTransform: "uppercase",
  marginBottom: "0.5rem",
  color: "#ffffff",
  fontWeight: 600,
  mb: 2,
  mt: 2,
};

export const modelDetails = {
  display: "flex",
  gap: 20,
  lineHeight: "1.8rem",
};

export const headings = {
  color: "#ffffff",
  fontWeight: "580",
  fontSize: "20px",
  textTransform: "uppercase",
  mb: 2,
  mt: 2,
};

export const ProductImg = styled("img")({
  justifySelf: "center",
  alignSelf: "flex-start",
  height: "80%",
});
