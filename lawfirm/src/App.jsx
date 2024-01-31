import "./App.css";
import ClientCarousel from "./components/ClientsCarousel";
import ImageListGrid from "./components/ImageListGrid";
import IntroPage from "./components/IntroPage";
import Landhere from "./components/Landhere";
import Navbar from "./components/Navbar";
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
    </div>
  );
}

export default App;
