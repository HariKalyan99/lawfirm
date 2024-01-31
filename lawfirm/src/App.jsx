import "./App.css";
import ClientCarousel from "./components/ClientsCarousel";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
import ImageListGrid from "./components/ImageListGrid";
import IntroPage from "./components/IntroPage";
import Landhere from "./components/Landhere";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Team from "./components/Team";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landhere />
      <IntroPage />
      <ImageListGrid />
      <ClientCarousel />
      <Team />
      <FaqSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
