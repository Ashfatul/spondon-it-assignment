import Navbar from "./components/navbar/Navbar";
import "./assets/style.css";
import HeroSection from "./components/heroSection/HeroSection";
import HeroSlider from "./components/heroSlider/HeroSlider";
import PaymentGateway from "./components/paymentGateway/PaymentGateway";

function App() {
   return (
      <>
         <div className="hero-section">
            <Navbar />
            <HeroSection />
            <HeroSlider />
         </div>
         <PaymentGateway />
      </>
   );
}

export default App;
