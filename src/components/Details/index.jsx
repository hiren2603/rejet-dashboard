import CheckIcon from "@mui/icons-material/Check";
import { List, ListItemIcon, ListItemText } from "@mui/material";

const Details = ({ content }) => {
  return (
    <>
      <List
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <ListItemIcon>
          <CheckIcon color="success" fontSize="5px" />
        </ListItemIcon>
        <ListItemText sx={{ justifyContent: "start" }}>{content}</ListItemText>
      </List>
    </>
  );
};

export default Details;
