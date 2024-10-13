import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Homepage'; // Correct path to your Home component
import ThingsToDoPage from './Pages/ThingsToDoPage'; // Use named import
import Travel from './Pages/Travel';
import HolidayRentals from './Pages/HolidayRentals';
import AboutUs from './Pages/AboutUs';
import './Var.css';

function App() {
    return (
        <Router>
            <Routes>
                {/* Default Route to Home */}
                <Route path="/" element={<Home />} />
                
                {/* Other Routes */}
                <Route path="/ThingsToDoPage" element= {<ThingsToDoPage/>}/> {/* Changed the path */}
                <Route path="/travel" element={<Travel />} />
                <Route path="/holidayrentals" element={<HolidayRentals />} />
                <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
        </Router>
    );
}

export default App;
