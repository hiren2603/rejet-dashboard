import Head from "@/components/Head";
import { Divider, Grid, Typography } from "@mui/material";
import { sectionHeadingStyle } from "./style";
import PageHeading from "@/components/PageHeading";
import { HO, BRANCHES } from "helpers/contact";

const Contact = () => {
  return (
    <Grid container sx={{ width: "90%", mx: "auto", mt: 5 }}>
      <Head title="Contact" description="Radhe Enterprise Contact Page" />
      <PageHeading heading="Contact Us" />
      <Grid item my={2} md={7}>
        <Typography variant="h5" sx={sectionHeadingStyle}>
          Locations
        </Typography>
        <Divider sx={{ mr: "2rem" }} />
      </Grid>
      <Grid item md={5} my={2}>
        <Typography variant="h5" sx={sectionHeadingStyle}>
          Inquiry
        </Typography>
        <Divider />
      </Grid>
      <Grid item md={5}>
        <Typography variant="h5" sx={sectionHeadingStyle} mb={2}>
          {HO.head}
        </Typography>
        <img src={HO.image} alt="company_logo" />
        <Typography fontWeight={600} lineHeight={2}>
          {HO.address}
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Typography variant="h5" sx={sectionHeadingStyle} mb={2}>
          {BRANCHES.head}
        </Typography>
        {BRANCHES.branchList.map((branch) => (
          <Typography fontWeight={600} lineHeight={2} key={branch.id}>
            {branch.name}
          </Typography>
        ))}
      </Grid>
      <Grid item md={5}></Grid>
    </Grid>
  );
};

export default Contact;
