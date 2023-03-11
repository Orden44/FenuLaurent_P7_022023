import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import NoMatch from "./pages/Error";
// import Logement from "./pages/Logement";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<NoMatch />} />
{/*      <Route path="/logement/:logementId" element={<Logement />} />  */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />  
    </BrowserRouter>
  );
}
export default App