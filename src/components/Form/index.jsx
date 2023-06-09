import { Typography, Grid, TextField, Button, Divider } from "@mui/material";
import { contactInput, titleStyle, button } from "./style";

const Form = () => {
  return (
    <>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item lg={2} alignItems="center">
          <Typography sx={titleStyle}>Get In Touch</Typography>
        </Grid>
        <Grid
          item
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ p: "4rem 5rem" }}
        >
          <Grid item lg={3}>
            <TextField
              variant="outlined"
              placeholder="Your Name"
              sx={contactInput}
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              variant="outlined"
              placeholder="Email"
              sx={contactInput}
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              variant="outlined"
              placeholder="Phone"
              sx={contactInput}
            />
          </Grid>
          <Grid item lg={3}>
            <TextField
              variant="outlined"
              placeholder="City"
              sx={contactInput}
            />
          </Grid>
          <Grid item lg={12}>
            <TextField
              placeholder="Message"
              rows={4}
              multiline
              fullWidth
              sx={contactInput}
            />
          </Grid>
        </Grid>
        <Grid item justifyContent="flex-start" sx={{ mb: "1rem" }}>
          <Button color="error" variant="contained" size="large" sx={button}>
            SEND
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default Form;
