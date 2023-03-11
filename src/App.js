import Navbar from "./components/navbar/Navbar";
import "./assets/style.css";
import HeroSection from "./components/heroSection/HeroSection";

function App() {
   return (
      <>
         <div className="hero-section">
            <Navbar />
            <HeroSection />
         </div>
      </>
   );
}

export default App;
