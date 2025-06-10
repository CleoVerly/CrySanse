import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticelPage from "./pages/ArticelPage";
import WeightPage from "./pages/WeightPage";
import CryPage from "./pages/CryPage";
import DetailArticlePage from "./pages/DetailArticlePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tentang" element={<AboutPage />} />
        <Route path="/artikel" element={<ArticelPage />} />
        <Route path="/berat" element={<WeightPage />} />
        <Route path="/analisis" element={<CryPage />} />
        <Route path="/detailartikel/:id" element={<DetailArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;