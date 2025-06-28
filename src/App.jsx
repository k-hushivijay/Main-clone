import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import StudioSection from "./Components/StudioSection";
import BusinessSection from "./Components/BusinessIdeasSection";
import MeetTeamSection from "./Components/MeetTeamSection";
import CustomerSection from "./Components/CustomerSection";
import PopularPublications from "./Components/PopularPublications";
import Footer from "./Components/Footer";
import "../src/index.css";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  
useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    < >
      <Navbar />
      <HeroSection />

      <StudioSection />

      <BusinessSection />
      <MeetTeamSection />
      <CustomerSection />
      <PopularPublications />
      <Footer />
    </>
  );
}

export default App;
