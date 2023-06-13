import { Link } from "react-router-dom";
import { styled } from "@mui/material";

const ProductButton = () => {
  const CustomLink = styled("button")({
    marginBottom: "1rem",
    color: "#E31E25",
    padding: "0.5rem 1rem",
    outline: "none",
    cursor: "pointer",
    width: "170px",
    fontSize: "18px",
    border: "1px solid #E61D25",
    borderRadius: "4px",
    boxShadow: "inset 0 0 0 0 #E31E25",
    transition: "ease-out 0.3s",
    textAlign: "center",
    margin: "2rem 0",
    "&:hover": {
      boxShadow: "inset 168px 0 0 0 #E31E25",
      color: "#ffffff",
    },
  });

  return (
    <Link to="/applications">
      <CustomLink>View In Actions</CustomLink>
    </Link>
  );
};

export default ProductButton;
