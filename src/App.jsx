import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/home/home.jsx";
import Contact from "./pages/contact/Contact";
import Register from "./pages/register/Register.jsx";


// import Learning from "./pages/Learning";
// import UGProgram from "./pages/UGProgram";
// import Outcomes from "./pages/Outcomes";
// import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />

        
        {/* <Route path="/learning" element={<Learning />} />
        <Route path="/ug" element={<UGProgram />} />
        <Route path="/outcomes" element={<Outcomes />} /> */}

        {/* 404 */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}
