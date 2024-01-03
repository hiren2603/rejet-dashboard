import { ThemeProvider, colors, createTheme } from "@mui/material";

// export const Provider = ({ children }) => {
//   return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
// };

export const theme = createTheme({
  typography : {
    color : "white",
    // fontFamily: [
    //   'Roboto',
    //   'poppins',
    //   'sans-serif'
    // ]
  },
  palette: {
    primary: {
      main: "#161922",
    },
    secondary: {
      main: "#5b5b5b",
    },
    info: {
      main: "#1B98F5",
      dark: "#030303",
    },
    success: {
      main: "#00D84A",
    },
    error: {
      main: "#ea232e",
    },
    background:{
      default: "#161922"
    },
    text:{
      default: "#ffffff"
    }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            WebkitBoxShadow: "inset 0 0 6px rgba(255,255,255,0.00)",
            backgroundColor: "#161922",
            // backgroundColor: colors.red[400],
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: colors.grey[700],
            borderRadius: "5px",
          },
        },
      },
    },
  },
});
