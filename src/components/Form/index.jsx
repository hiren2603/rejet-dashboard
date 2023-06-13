import { Typography, Grid, TextField, Button, Divider } from "@mui/material";
import { contactInput, titleStyle, buttonStyle } from "./style";

const Form = () => {
  return (
    <Grid
      container
      sx={{
        width: { lg: "85%", md: "85%", sm: "85%", xs: "85%" },
        m: "auto",
        mt: 0,
        mb: 0,
      }}
    >
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography sx={titleStyle}>Get In Touch</Typography>
        <Divider />
      </Grid>
      <Grid container spacing={2} pt={2} pb={2}>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <TextField
            variant="outlined"
            placeholder="Your Name"
            sx={contactInput}
          />
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <TextField variant="outlined" placeholder="Email" sx={contactInput} />
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <TextField variant="outlined" placeholder="Phone" sx={contactInput} />
        </Grid>
        <Grid item lg={3} md={6} sm={12} xs={12}>
          <TextField variant="outlined" placeholder="City" sx={contactInput} />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <TextField
            placeholder="Message"
            rows={4}
            multiline
            fullWidth
            sx={contactInput}
          />
        </Grid>
      </Grid>
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        mb={2}
        textAlign="center"
        justifyContent="center"
      >
        <Button color="error" variant="contained" size="large" sx={buttonStyle}>
          SEND
        </Button>
      </Grid>
    </Grid>
  );
};
export default Form;
