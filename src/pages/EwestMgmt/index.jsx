import Head from "@/components/Head";
import React from "react";
import {
  Grid,
  Typography,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  Box,
  Card,
} from "@mui/material";
import PageHeading from "@/components/PageHeading";
import { productHeading, modelHeading, contentStyle, cellStyle } from "./style";
import { benefits, ewasteRules, dos, donts, data } from "helpers/ewasteManage";
import image from "@/assets/recycle.svg";

const EwestMgmt = () => {
  return (
    <>
      <Head
        title="E-west Mgmt"
        description="Radhe Enterprise E-west Management Page"
      />

      <Grid
        container
        width={"90%"}
        sx={{ margin: "2rem auto" }}
        alignItems="center"
        justifyContent="center"
        direction="column"
        rowGap={3}
      >
        <Grid item>
          <Typography sx={productHeading} textAlign={"center"} align="center">
            E-WASTE MANAGEMENT
          </Typography>
        </Grid>
        <Divider sx={{ width: "100%", backgroundColor: "black" }} />

        <Grid item>
          <Typography sx={modelHeading}>
            E-WASTE MANAGEMENT AND HANDLING RULES
          </Typography>
          <Typography variant="p" sx={{ lineHeight: "2" }}>
            {ewasteRules[0]}
          </Typography>
        </Grid>

        <Grid container item>
          <Typography sx={modelHeading}>
            BENIFITS OF E-WASTE RECYCLING
          </Typography>

          <Grid
            container
            item
            rowGap={4}
            columnGap={0}
            justifyContent={"space-between"}
          >
            {benefits?.map((item) => {
              return item.id === 1 ? (
                <Grid
                  container
                  item
                  key={item.id}
                  direction="row"
                  columnGap={10}
                  alignItems={"center"}
                >
                  <Grid item lg={6} md={5}>
                    <Typography sx={contentStyle}>{item.title}</Typography>
                    <Typography sx={{ lineHeight: "2", textAlign: "justify" }}>
                      {item.content}
                    </Typography>
                  </Grid>
                  <Grid item alignSelf="center">
                    <img src={image} height={400} />
                  </Grid>
                </Grid>
              ) : (
                <Grid
                  container
                  item
                  key={item.id}
                  lg={5}
                  md={5}
                  direction="column"
                >
                  <Typography sx={contentStyle}>{item.title}</Typography>
                  <Grid item lg>
                    <Typography sx={{ lineHeight: "2", textAlign: "justify" }}>
                      {item.content}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <Grid container item direction="row" columnGap={7}>
          <Grid item lg={5} md={5}>
            <Typography sx={modelHeading} align="center">
              Do's
            </Typography>
            {dos.map((item) => {
              return (
                <Typography
                  key={item}
                  sx={{ lineHeight: "2", textAlign: "justify" }}
                >
                  {item}
                </Typography>
              );
            })}
          </Grid>

          <Grid item lg={6} md={6}>
            <Typography sx={modelHeading} align="center">
              Dont's
            </Typography>
            {donts.map((item) => {
              return (
                <Typography
                  key={item}
                  sx={{ lineHeight: "2", textAlign: "justify" }}
                >
                  {item}
                </Typography>
              );
            })}
          </Grid>
        </Grid>

        <Grid item>
          <Typography sx={{ ...modelHeading, textAlign: "center" }}>
            E-WASTE MANAGEMENT PLAN
          </Typography>
          <Typography sx={{ lineHeight: "2", textAlign: "justify" }}>
            In developing country like India, most E-Waste lands up in the
            informal sector where it is recycled without any consideration to
            health and environment. We, being responsible citizen contributes
            our share of Environmental Responsibility and aiding in taking care
            of our environment. Abiding by all the pertinent laws associated
            with E-Waste Management, Our Company has been continuously working
            towards the same. Our company has partnered with PRO namely M/s Kar
            Parivartan LLP. Together with M/s Kar Parivartan LLP we have been
            doing its best in order to proffer environmentally sound management
            of electronic devices which have reached their end- of-life and to
            comply with the new India E-Waste Management and Handling rules in
            providing drop-of centers and environmentally sound management of
            end of life electronics. M/s Kar Parivartan LLP has obtained
            authorizations from the appropriate governmental agency. M/s Kar
            Parivartan LLP will receive and recycle customer returned equipment,
            including all the E-Waste.
          </Typography>
        </Grid>

        <Grid item>
          <Typography sx={{ ...modelHeading, fontSize: "20px" }}>
            WHERE AND HOW CAN YOU RECYCLE YOUR E-WASTE?
          </Typography>
          <Typography sx={{ lineHeight: "2", textAlign: "justify" }}>
            Our E-Waste program starts with receiving E-Waste pickup request
            from our end customers through toll free number after which our
            Authorized PRO Partner collects it and transports it to the
            collection centre. No fee is charged from the consumer for giving
            the goods for recycling and there is no monetary benefit included in
            the Recycling Program. The solo aim is to serve the Environment by
            keeping it clean. To recycle your waste electronic items, all you
            have to do is drop E-Waste pick up request by calling us on M/s Kar
            Parivartan LLP’s Toll Free No. 1800 572 1687 from Monday to Friday
            between 10:00 AM to 5:00 PM. Also, customers can drop their E-Waste
            in the drop- box provided at various collection centres of KAR
            PARIVARTAN LLP.
          </Typography>
        </Grid>

        <Typography
          sx={{ ...modelHeading, textAlign: "center", fontSize: "18px" }}
        >
          LIST OF COLLECTION CENTERS
        </Typography>

        <Card
          sx={{
            width: "100%",
            overflowX: {
              xs: "scroll",
              sm: "scroll",
              lg: "hidden",
              md: "hidden",
            },
          }}
        >
          <TableContainer>
            <Table>
              <TableHead style={{ backgroundColor: "black", color: "white" }}>
                <TableRow>
                  <TableCell sx={cellStyle}>Index</TableCell>
                  <TableCell sx={cellStyle}>State</TableCell>
                  <TableCell sx={cellStyle}>Location</TableCell>
                  <TableCell style={{ width: "19%" }} sx={cellStyle}>
                    Address
                  </TableCell>
                  <TableCell sx={cellStyle}>Contact Person</TableCell>
                  <TableCell sx={cellStyle}>Contact No</TableCell>
                  <TableCell style={{ width: "15%" }} sx={cellStyle}>
                    Toll Free No
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((item) => {
                  return (
                    <TableRow key={item.index}>
                      <TableCell>{item.index}</TableCell>
                      <TableCell style={{ width: "15%" }}>
                        {item.state}
                      </TableCell>
                      <TableCell>{item.location}</TableCell>
                      <TableCell
                        style={{ width: "19%", wordWrap: "break-word" }}
                      >
                        {item.address}
                      </TableCell>
                      <TableCell>{item.contactPerson}</TableCell>
                      <TableCell>{item.contactNo}</TableCell>
                      <TableCell style={{ width: "15%" }}>
                        {item.tollFreeNo}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Grid>
    </>
  );
};

export default EwestMgmt;
