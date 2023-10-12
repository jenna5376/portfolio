import Navbar from "./Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom"
import Bondit from "./pages/CaseStudies/Bondit";
import Checkmate from "./pages/CaseStudies/Checkmate";
import Cibi from "./pages/CaseStudies/Cibi";
import DailyUi from "./pages/CaseStudies/DailyUi";
import DrawTogether from "./pages/CaseStudies/DrawTogether";
import EquitableSyllabusProject from "./pages/CaseStudies/EquitableSyllabusProject";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/checkmate" element={<Checkmate/>}/>
        <Route path="/cibi" element={<Cibi/>}/>
        <Route path="/bondit" element={<Bondit/>}/>
        <Route path="/equitable-syllabus-project" element={<EquitableSyllabusProject/>}/>
        <Route path="/draw-together" element={<DrawTogether/>}/>
        <Route path="/daily-ui" element={<DailyUi/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
