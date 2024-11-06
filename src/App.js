import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Homepage'; // Correct path to your Home component
import ThingsToDoPage from './Pages/ThingsToDoPage'; // Use named import
import Travel from './Pages/Travel';
import HolidayRentals from './Pages/HolidayRentals';
import AboutUs from './Pages/AboutUs';
import SignInPage from './Pages/SignInPage';
import TestPage from './Pages/TestPage';
import './Var.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/ThingsToDoPage" element= {<ThingsToDoPage/>}/> {/* Changed the path */}
                <Route path="/travel" element={<Travel />} />
                <Route path="/HolidayRentals" element={<HolidayRentals />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/SignInPage" element={<SignInPage />} />
            </Routes>
        </Router>
    );  
}

export default App;
