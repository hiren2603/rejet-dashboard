export const cardSection = {
  width: "90vw",
  justifySelf: "center",
  alignItems: "center",
  justifyContent: "center",
  margin: { lg: "3rem 4rem", sm: "1rem 0" },
};

export const cardRow = {
  flex: 1,
  alignItems: "center",
  justifyContent: "space-evenly",
  width: { lg: "100%", sm: "100%" },
  height: { sm: "auto" },
  flexWrap: { sm: "wrap" },
};

export const cardContainer = {
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "3px",
  boxShadow: "2px 2px 20px 1px #b6b6b6",
  cursor: "pointer",
  height: "400px",
  width: { lg: "25%", sm: "80%" },
};

export const cardImgContainer = {
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
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
