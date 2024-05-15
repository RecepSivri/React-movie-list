
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
import AdventurePage from './pages/adventurePage/AdventurePage';
import WarPage from './pages/warPage/WarPage';
import HistoryPage from './pages/historyPage/HistoryPage';


import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

function App() {

  const [api, contextHolder] = notification.useNotification();
  const { ready } = useTranslation('en');
  const openNotificationWithIcon = (type: NotificationType, header: string, message: string) => {
    api[type]({
      message: header,
      description: message
    });
  };
  if (ready) {
    return (
      <div className="App">
      {contextHolder}
      <BrowserRouter>
       <Header/>
        <Routes>
            <Route path="/" element={<MainPage  toastr = {openNotificationWithIcon}/>} />
            <Route path="action" element={<ActionPage toastr = {openNotificationWithIcon}/>} />
            <Route path="dram" element={<DramPage toastr = {openNotificationWithIcon}/>} />
            <Route path="family" element={<FamilyPage toastr = {openNotificationWithIcon}/>} />
            <Route path="documentary" element={<DocumentaryPage toastr = {openNotificationWithIcon}/>} />
            <Route path="horror" element={<HorrorPage toastr = {openNotificationWithIcon}/>} />
            <Route path="comedy" element={<ComedyPage toastr = {openNotificationWithIcon}/>} />
            <Route path="adventure" element={<AdventurePage toastr = {openNotificationWithIcon}/>} />
            <Route path="war" element={<WarPage toastr = {openNotificationWithIcon}/>} />
            <Route path="history" element={<HistoryPage toastr = {openNotificationWithIcon}/>} />

        </Routes>
        <footer>asd</footer>
      </BrowserRouter>

      </div>
    );
  }
  return <span>Loading...</span>;
  
  
}

export default App;
