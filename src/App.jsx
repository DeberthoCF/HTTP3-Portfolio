import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Accueil from "./pages/Accueil";
import Equipe from "./pages/Equipe";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;