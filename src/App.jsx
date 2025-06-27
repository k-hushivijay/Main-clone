import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import StudioSection from "./Components/StudioSection";
import BusinessSection from "./Components/BusinessIdeasSection";
import MeetTeamSection from "./Components/MeetTeamSection";
import CustomerSection from "./Components/CustomerSection";
import PopularPublications from "./Components/PopularPublications";
import Footer from "./Components/Footer";
import "../src/index.css";

function App() {
  return (
    <>
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
