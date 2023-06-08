export const cardSection = {
  width: "90vw",
  justifySelf: "center",
  alignItems: "center",
  justifyContent: "center",
  margin: "4rem 0",
  gap: 6,
};

export const cardContainer = {
  borderRadius: "3px",
  cursor: "pointer",
  height: "400px",
  width: "25%",
  boxShadow: "2px 2px 20px 1px #b6b6b6",
};

export const cardImgContainer = {
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  "& : hover": {
    backgroundColor: "#ffe7e7",
    opacity: "0.5",
    transition: "all 0.5s ease",
  },
};

export const cardBtnContainer = {
  background: "#5b5b5b",
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "3px",
  "&:hover": {
    background: "#e31e25",
    transition: "all 0.3s ease",
  },
};

export const cardButton = {
  color: "#fff",
  overflowX: "hidden",
  fontSize: "18px",
  fontWeight: "600",
  textTransform: "uppercase",
  borderRadius: "3px",
};
