import Topbar from "../Topbar";
import Footer from "../Footer";
import Whatsapp from "@/components/Whastapp";
import { Box} from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <Box
        sx={{ position: "relative", display: "flex", flexDirection: "column" }}
      >
        <Topbar />
        <Box
          sx={{ marginTop : "10vh"}}
        >
          {children}
        </Box>
        <Whatsapp />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;