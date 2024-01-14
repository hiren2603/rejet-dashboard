import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  ThemeProvider,
  CssBaseline,
  Box,
  CircularProgress,
} from "@mui/material";
import { Layout } from "@/components/Shared";
import ScrollToTop from "@/components/ScrollToTop";
import { theme } from "@/theme";
import ErrorPage from "@/pages/ErrorPage";
import { LayoutContext } from "@/Context";
import { HelmetProvider } from "react-helmet-async";
import {
  About,
  Applications,
  Contact,
  Home,
  Re200plus,
  Re224,
  Re225,
  Re2000,
  Re2000p,
  Re1000,
  Co2,
  Desktop,
  Fiber,
  Uv,
  ReTenOne,
  ReHandy,
  EwestMgmt,
} from "@/pages";

const App = () => {
  const helmetContext = {};
  const [drawerwidth] = useState(200);
  const [open, setOpen] = useState(false);
  const [persistState, setPersistState] = useState(false);
  const [isComponentReady, setIsComponentReady] = useState(false);

  const handleComponentReady = () => {
    setIsComponentReady(true);
  };

  const LoaderStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  useEffect(() => {
    setTimeout(handleComponentReady, 1000);
  }, []);

  if (!isComponentReady) {
    return (
      <Box sx={LoaderStyle}>
        <CircularProgress color="error" size={40} />
      </Box>
    );
  } else {
    return (
      <HelmetProvider context={helmetContext}>
        <ThemeProvider theme={theme}>
          <LayoutContext.Provider
            value={{
              open,
              setOpen,
              drawerwidth,
              persistState,
              setPersistState,
            }}
          >
            <CssBaseline />
            <ScrollToTop />
            <Layout>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route>
                  {/* <Route exact path="/products/" element={<Navigate replace to="/" />} /> */}
                  <Route
                    exact
                    path="/products/inkjet/re200+"
                    element={<Re200plus />}
                  />
                  <Route
                    exact
                    path="/products/inkjet/re224"
                    element={<Re224 />}
                  />
                  <Route
                    exact
                    path="/products/inkjet/re225"
                    element={<Re225 />}
                  />
                  <Route
                    exact
                    path="/products/inkjet/re2000"
                    element={<Re2000 />}
                  />
                  <Route
                    exact
                    path="/products/inkjet/re2000p"
                    element={<Re2000p />}
                  />
                  <Route
                    exact
                    path="/products/dod/re1000"
                    element={<Re1000 />}
                  />
                  <Route exact path="/products/laser/co2" element={<Co2 />} />
                  <Route
                    exact
                    path="/products/laser/fiber"
                    element={<Fiber />}
                  />
                  <Route exact path="/products/laser/uv" element={<Uv />} />
                  <Route
                    exact
                    path="/products/laser/desktop"
                    element={<Desktop />}
                  />
                  <Route
                    exact
                    path="/products/tij/re10"
                    element={<ReTenOne />}
                  />
                  <Route
                    exact
                    path="/products/tij/re-handy"
                    element={<ReHandy />}
                  />
                </Route>
                <Route exact path="/applications" element={<Applications />} />
                <Route exact path="/ewest-management" element={<EwestMgmt />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </Layout>
          </LayoutContext.Provider>
        </ThemeProvider>
      </HelmetProvider>
    );
  }
};

export default App;
