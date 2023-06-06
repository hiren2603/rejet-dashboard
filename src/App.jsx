import { Route, Routes } from "react-router-dom";
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
  Handy,
  One,
  OneOne,
  EwestMgmt,
} from "./pages";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Layout } from "./components";
import { theme } from "./theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products">
              <Route path="/products/inkjet/re200+" element={<Re200plus />} />
              <Route path="/products/inkjet/re224" element={<Re224 />} />
              <Route path="/products/inkjet/re225" element={<Re225 />} />
              <Route path="/products/laser/co2" element={<Co2 />} />
              <Route path="/products/laser/fiber" element={<Fiber />} />
              <Route path="/products/laser/uv" element={<Uv />} />
              <Route path="/products/laser/desktop" element={<Desktop />} />
            </Route>
            <Route path="/applications" element={<Applications />} />
            <Route path="/ewest-management" element={<EwestMgmt />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
