import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  About,
  Application,
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
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
