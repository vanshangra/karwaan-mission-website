import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/navbar/navbar";
import HeroSection from "../components/herosection/herosection";
//import ImpactCounters from "../components/impactcounter/impactcounter";
import Footer from "../components/footer/footer";
import PdfSlideshow from "../components/slideshow/slideshow";
import ComingSoon from "../components/comingsoon/comingsoon";
import OurWork  from "../components/ourwork/ourwork";
import ExploreMorePage from "../components/explore/explore";  

const App = () => {
  return (
    <Router>
      <div className="bg-gray-50 text-gray-800 font-inter">
        <Navbar />
        <main>
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <PdfSlideshow />
                  <div className="my-10"></div>
                
                </>
              }
            />

            {/* Other Pages */}
            <Route path="/about" element={<ComingSoon />} />
            <Route path="/work" element={<OurWork />} />
            <Route path="/stories" element={<ComingSoon />} />
            <Route path="/partners" element={<ComingSoon />} />
            <Route path="/contact" element={<ComingSoon />} />
            <Route path="/donate" element={<ComingSoon />} />
            <Route path="/explore-more" element={<ExploreMorePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

