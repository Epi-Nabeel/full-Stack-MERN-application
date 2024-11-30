import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AdminPage from './components/AdminPage';
import CarDetails from './components/CarDetails';
import ApiData from './components/ApiData';

function App() {
    return (
        <Router>
            <div className="App">
                {/* Navigation Bar */}
                <Navigation />

                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/car-details" element={<CarDetails />} />
                    {/* Dynamic Route for Individual Car Details */}
                    <Route path="/car-details/:id" element={<CarDetails />} />
                    {/* Route for API Data Page */}
                    <Route path="/api-data" element={<ApiData />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
