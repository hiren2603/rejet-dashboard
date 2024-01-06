import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { List, ListItemText } from "@mui/material";

const Details = ({ content }) => {
  return (
    <>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <CheckCircleIcon color="success" fontSize="5px" />
        <ListItemText
          sx={{ justifyContent: "start", color: "white", whiteSpace: "wrap" }}
        >
          {content}
        </ListItemText>
      </List>
    </>
  );
};

export default Details;
