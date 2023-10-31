import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {
  About,
  Applications,
  Contact,
  Home,
  Re200plus,
  Re224,
  Re225,
  Co2,
  Desktop,
  Fiber,
  Uv,
  TpHandy,
  TpOne,
  TpOneOne,
  EwestMgmt,
} from "@/pages";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Layout } from "@/components/Shared";
import { theme } from "@/theme";
import ErrorPage from "@/pages/ErrorPage";
import { LayoutContext } from "@/Context";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  const [drawerwidth] = useState(200);
  const [open, setOpen] = useState(false);
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <ThemeProvider theme={theme}>
        <LayoutContext.Provider value={{ open, setOpen, drawerwidth }}>
          <CssBaseline />
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route>
                <Route exact path="/products/" element={<Navigate replace to="/" />} />
                <Route path="/products/inkjet/re200+" element={<Re200plus />} />
                <Route path="/products/inkjet/re224" element={<Re224 />} />
                <Route path="/products/inkjet/re225" element={<Re225 />} />
                <Route path="/products/laser/co2" element={<Co2 />} />
                <Route path="/products/laser/fiber" element={<Fiber />} />
                <Route path="/products/laser/uv" element={<Uv />} />
                <Route path="/products/laser/desktop" element={<Desktop />} />
                <Route path="/products/tij/tp01" element={<TpOne />} />
                <Route path="/products/tij/tp01.1" element={<TpOneOne />} />
                <Route path="/products/tij/handy" element={<TpHandy />} />
              </Route>
              <Route path="/applications" element={<Applications />} />
              <Route path="/ewest-management" element={<EwestMgmt />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Layout>
        </LayoutContext.Provider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
