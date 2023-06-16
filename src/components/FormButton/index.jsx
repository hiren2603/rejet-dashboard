import React from "react";
import { Button } from "@mui/material";

const buttonStyle = {
  width: "150px",
};

const FormButton = ({ label, onClick }) => {
  return (
    <Button
      variant="contained"
      color="error"
      size="large"
      onClick={onClick}
      sx={buttonStyle}
    >
      {label}
    </Button>
  );
};

export default FormButton;
