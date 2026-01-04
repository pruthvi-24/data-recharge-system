import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Plans from './components/Plans';
import Payment from './components/Payment';
import Bill from './components/Bill';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/bill" element={<Bill />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
