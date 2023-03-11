import Navbar from "./components/navbar/Navbar";
import "./assets/style.css";
import HeroSection from "./components/heroSection/HeroSection";
import HeroSlider from "./components/heroSlider/HeroSlider";
import PaymentGateway from "./components/paymentGateway/PaymentGateway";
import Testimonial from "./components/testimonial/Testimonial";
import Client from "./components/client/Client";

function App() {
   return (
      <>
         <div className="hero-section">
            <Navbar />
            <HeroSection />
            <HeroSlider />
         </div>
         <PaymentGateway />
         <Testimonial />
         <Client />
      </>
   );
}

export default App;
