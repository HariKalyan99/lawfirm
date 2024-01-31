import "./App.css";
import ImageListGrid from "./components/ImageListGrid";
import IntroPage from "./components/IntroPage";
import Landhere from "./components/Landhere";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landhere />
      <IntroPage />
      <ImageListGrid />
    </div>
  );
}

export default App;
