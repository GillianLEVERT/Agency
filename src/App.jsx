import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/components/pages/Home";
import Works from "./assets/components/pages/Works";
import About from "./assets/components/pages/About";
import NotFound from "./assets/components/pages/NotFound";
import StudyCase from "./assets/components/pages/Works/StudyCase";
import "./style.scss";
import NavBar from "./assets/components/navbar/Nav";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/works/:path" element={<StudyCase />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
