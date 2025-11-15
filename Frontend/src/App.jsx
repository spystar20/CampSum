import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import SideMenu from './Components/SideMenu';
import Accomendation from './Pages/Home/Accomendation';
import Campusbazzar from './Pages/Home/Campusbazzar';
import  StudentBlog  from './Pages/Home/Blogs';

import EventsUpdates from './Pages/Home/EventsUpdates';
import  LostAndFoundList  from './Pages/Home/LostAndFound';
import  MentalHealthSupportList  from './Pages/Home/MentalHealthSupport';
import RakhConnect from './Pages/Home/RakhConnect';
import  RoommateFinderList from './Pages/Home/RoomMateFinder';
import StudentDiscount from './Pages/Home/StudentDiscount';

import CommunityFeed from './Pages/Home/Community';
import { TiffinServicesList } from './Pages/Home/TiffinServices';
import NotFoundPage from './Pages/NotFound/NotFound';
import Login from './Pages/AuthPages/Login';
import Signup from './Pages/AuthPages/SignUp';
import BookMarket from './Pages/Home/BooksMarket';
import JobsPortal from './Pages/Home/JobMarket';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-[Poppins]">
      <Router>
        <Navbar onMenuClick={toggleMenu} />
        <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about-us" element={<A />} /> */}
          {/* <Route path="/contact-us" element={<Conta />} /> */}

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/accomendation" element={<Accomendation />} />
          <Route path="/campusbazzar" element={<Campusbazzar />} />
          <Route path="/cms" element={<StudentBlog />} />
          <Route path="/community" element={<CommunityFeed />} />
          <Route path="/bookmarket" element={<BookMarket />} />
          <Route path="/jobmarket" element={<JobsPortal />} />
          <Route path="/eventsupdates" element={<EventsUpdates />} />
          <Route path="/lostandfound" element={<LostAndFoundList />} />
          <Route path="/mentalhealthsupport" element={<MentalHealthSupportList />} />
          <Route path="/raktconnect" element={<RakhConnect />} />
          <Route path="/roommatefinder" element={<RoommateFinderList />} />
          <Route path="/studentdiscount" element={<StudentDiscount />} />
          <Route path="/tiffinservices" element={<TiffinServicesList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
