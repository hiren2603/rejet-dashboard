import { styled, Button } from "@mui/material";

export const InnerText = styled("span")({
  color: "#E21D25",
  fontWeight: "600",
  textTransform: "uppercase",
  fontSize: "30px",
});

export const headingText = {
  color: "#000000",
  textShadow: "2px 2px 2px #0000004f",
  fontWeight: "600",
  textTransform: "uppercase",
  fontSize: "30px",
};

export const DownloadButton = styled("a")({
  width: "50%",
  height: "50px",
  justifySelf: "flex-end",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
  backgroundColor: "#5b5b5b",
  fontWeight: "500",
  outline: "none",
  borderRadius: "4px",
  position: "relative",
  zIndex: "1",
  transition: "ease-out .3s",
  "&:hover": {
    cursor: "hover",
    color: "#ffffff",
  },
  "&:before": {
    transition: "0.3s all ease",
    position: "absolute",
    top: "0",
    left: "50%",
    bottom: "0",
    right: "50%",
    opacity: "0",
    content: "",
    backgroundColor: "#E21D25",
    zIndex: 1,
    borderRadius: "4px",
  },
  "&:hover:before": {
    transition: ".5s all ease",
    left: "0",
    right: "0",
    opacity: "1",
    zIndex: "-1",
  },
});
