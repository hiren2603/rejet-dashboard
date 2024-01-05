import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// animation variables
const variant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

//

const Slide = ({ slide, slideId }) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={variant}
        transition={{ duration: 6, delay: 0.2 }}
        exit={{ opacity: 0 }}
        animate={slideId == slide.id ? "visible" : "hidden"}
        key={slide.id}
        style={{
          flexWrap: "wrap",
          flexDirection: {
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
          width: "100%",
          justifyContent: "space-between",
          display: `${slideId == slide.id ? "flex" : "none"}`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: {
              xl: "flex-start",
              lg: "flex-start",
              md: "center",
            },
            order: { lg: 1, sm: 2, xs: 2 },
            width: {
              xl: "50%",
              lg: "50%",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
            minWidth: "50%",
            mb: { lg: 0, md: 0, sm: 4, xs: 4 },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                lg: "50px",
                md: "50px",
                sm: "40px",
                xs: "30px",
              },
              fontWeight: "700",
              whiteSpace: "wrap",
              color: "#ffffff",
              fontFamily: "poppins, sans-serif",
              textTransform: "uppercase",
              lineHeight: "1.3",
              userSelect: "none",
              mb: 2,
            }}
          >
            {slide.title}
          </Typography>
          <Typography
            sx={{
              color: "#ffffff",
              whiteSpace: "wrap",
              fontFamily: "poppins, sans-serif",
              userSelect: "none",
            }}
          >
            {slide.info}
          </Typography>
          <Button
            component={Link}
            to={slide.link}
            variant="contained"
            color="error"
            sx={{ pt: 2, pb: 2, mt: 4 }}
          >
            Learn More
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: {
              lg: "flex-end",
              md: "center",
              sm: "center",
              xs: "center",
            },
            height: "inherit",
            order: { lg: 1, sm: 1, xs: 1 },
            mb: { xl: 0, lg: 0, md: 2, sm: 4, xs: 4 },
            flex: "50%",
          }}
        >
          <Box
            component="img"
            src={slide.image}
            alt="product"
            sx={{
              height: "auto",
              width: { lg: "60%", md: "60%", sm: "60%", xs: "80%" },
              objectFit: "cover",
            }}
          />
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default Slide;
