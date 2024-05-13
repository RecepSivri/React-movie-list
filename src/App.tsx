
import './App.css';
import Header from './header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import MainPage from './pages/mainPage/MainPage';
import ActionPage from './pages/actionPage/ActionPage';
import DramPage from './pages/dramPage/DramPage';
import FamilyPage from './pages/familyPage/FamilyPage';
import DocumentaryPage from './pages/documentaryPage/DocumentaryPage';
import HorrorPage from './pages/horrorPage/HorrorPage';
import ComedyPage from './pages/comedyPage/ComedyPage';
function App() {
  const { ready } = useTranslation('en');

  if (ready) {
    return (
      <div className="App">
      <BrowserRouter>
       <Header/>
  
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="action" element={<ActionPage />} />
            <Route path="dram" element={<DramPage />} />
            <Route path="family" element={<FamilyPage />} />
            <Route path="documentary" element={<DocumentaryPage />} />
            <Route path="horror" element={<HorrorPage />} />
            <Route path="comedy" element={<ComedyPage />} />

        </Routes>
        <footer>asd</footer>
      </BrowserRouter>

      </div>
    );
  }
  return <span>Loading...</span>;
  
  
}

export default App;
