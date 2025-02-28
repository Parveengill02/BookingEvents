import React, { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/HomePage/login.jsx';
import Header from './components/Header/index.jsx';
import Homepage from './pages/HomePage/index.jsx';
import VenuePage from './pages/Venue/index.jsx';
import Footer from './components/foot/index.jsx';
import VenueDetailPage from './pages/VenueDetailPage/index.jsx';
import Vendorpage from './pages/Vendors/index.jsx';
import VenueBooking from './pages/VenueBooking/index.jsx';
import VendorDetail from './pages/vendorbooking/vendorbook.jsx';
import EventIdea from './pages/IdeaPage/idea.jsx';
import DetailIdeaPage from './pages/IdeaDetail/Idetailpage.jsx';
import EventPage from './pages/wedding/wedding.jsx';
function App() {
  const [count, setCount] = useState(0)

 
  return (
    <div>
      
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/citypage" element={<VenuePage/>}/>
          <Route path="/venues/:name" element={<VenueDetailPage/>}/>
          <Route path="/vendors" element={<Vendorpage/>}/>
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/booking/:name" element={<VenueBooking/>}/>
          <Route path="/Venbook/:name" element={<VendorDetail/>}/>
          <Route path="/PageIdea" element={<EventIdea/>}/>
          <Route path="/Detailpageidea/:categories" element={<DetailIdeaPage/>}/>
          <Route path="/event/:name" element={<EventPage/>}/>
          
        </Routes>
      
        <Footer/>

      </Router>
      
    </div>
  );
}



export default App
