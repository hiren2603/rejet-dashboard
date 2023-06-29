import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { WhatsappFloat } from "./style";
import { Box } from "@mui/material";

const Whatsapp = () => {
  return (
    <>
      <Box
        sx={{
          visibility: {
            xs: "hidden",
            lg: "visible",
            md: "visible",
            sm: "visible",
          },
        }}
      >
        <WhatsappFloat
          href="https://wa.me/+919909981123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon
            color="white"
            sx={{ mt: "16px", height: "30px", width: "40px" }}
          />
        </WhatsappFloat>
      </Box>
    </>
  );
};

export default Whatsapp;
