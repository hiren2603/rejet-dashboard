import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorImage  from "../../assets/404.svg"
import { Grid, Typography } from "@mui/material";

const ErrorPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(()=>{
      navigate("/");
    }, 1000)
    return ()=> clearTimeout(timer)
  },[]);

  return (
    <Grid container justifyContent="center" alignItems="center" >
        <Typography variant="h4" sx={{fontWeight: 600, color: "#FF725E"}}>Opps!! Page Not Found!</Typography>
      <Grid item lg={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2}}>
        <img src={ErrorImage} alt="error" style={{width: "60%"}}/>
      </Grid>
    </Grid>
  );
};

export default ErrorPage;
