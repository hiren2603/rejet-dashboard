import CheckIcon from "@mui/icons-material/Check";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { List, ListItemIcon, ListItemText } from "@mui/material";

const Details = ({ content }) => {
  return (
    <>
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CheckCircleIcon color="success" fontSize="5px" />
        <ListItemText sx={{ justifyContent: "start" }}>{content}</ListItemText>
      </List>
    </>
  );
};

export default Details;
