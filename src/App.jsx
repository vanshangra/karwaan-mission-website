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
import Contact from "../components/contact/contact";
import Stories from "../components/stories/stories";
import DonatePage from "../components/donate/donate";

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
            <Route path="/stories" element={<Stories />} />
            <Route path="/partners" element={<ComingSoon />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/explore-more" element={<ExploreMorePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

