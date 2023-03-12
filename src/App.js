import Navbar from "./components/navbar/Navbar";
import "./assets/style.css";
import HeroSection from "./components/heroSection/HeroSection";
import HeroSlider from "./components/heroSlider/HeroSlider";
import PaymentGateway from "./components/paymentGateway/PaymentGateway";
import Testimonial from "./components/testimonial/Testimonial";
import Client from "./components/client/Client";
import SoftwareCollection from "./components/softwareCollection/SoftwareCollection";
import DashboardPreview from "./components/dashboardPreview/DashboardPreview";

function App() {
   return (
      <>
         <div className="hero-section default-bg">
            <Navbar />
            <HeroSection />
            <HeroSlider />
         </div>
         <PaymentGateway className="default-bg" />
         <Testimonial />
         <Client />
         <DashboardPreview />
         <SoftwareCollection />
      </>
   );
}

export default App;
