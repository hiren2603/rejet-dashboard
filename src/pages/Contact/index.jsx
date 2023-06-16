import Head from "@/components/Head";
import Map from "@/components/Map";
import Form from "@/components/Form";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { BRANCHES, HO, INQUIRY } from "helpers/contact";
import { sectionHeadingStyle, subHeadingStyles } from "./style";

const Contact = () => {
  return (
    <Grid container sx={{ width: "90%", m: "0 auto", mt: 5 }}>
      <Head title="Contact" description="Radhe Enterprise Contact Page" />
      {/* <PageHeading heading="Contact Us" /> */}
      <Grid container item md={8} sm={12} xs={12}>
        <Grid item md={12} sm={12} xs={12}>
          <Typography variant="h5" sx={sectionHeadingStyle}>
            Locations
          </Typography>
          <Divider />
        </Grid>
        <Grid item md={8} sm={12} xs={12}>
          <Typography variant="h5" sx={subHeadingStyles} mb={2}>
            {HO.head}
          </Typography>
          <img src={HO.image} alt="company_logo" width="auto" />
          <Typography fontWeight={600} lineHeight={2}>
            {HO.address}
          </Typography>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Typography variant="h5" sx={subHeadingStyles} mb={2}>
            {BRANCHES.head}
          </Typography>
          {BRANCHES.branchList.map((branch) => (
            <Typography fontWeight={600} lineHeight={2} key={branch.id}>
              {branch.name}
            </Typography>
          ))}
        </Grid>
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
        <Typography variant="h5" sx={sectionHeadingStyle}>
          Inquiry
        </Typography>
        <Divider />
        <Grid item>
          {INQUIRY.map((item) => (
            <Box key={item.id} sx={{ display: "flex", alignItems: "center" }}>
              <item.icon
                sx={{
                  mr: "1rem",
                  color:
                    item.id === 1 ? "green" : item.id === 2 ? "red" : "blue",
                }}
              />
              <Typography component="span" fontWeight={600} lineHeight={2}>
                {item.key}:
              </Typography>
              <Typography component="span" fontWeight={600} lineHeight={2}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
      <Map />
      <Form />
    </Grid>
  );
};

export default Contact;
