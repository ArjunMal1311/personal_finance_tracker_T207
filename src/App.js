import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import CheckValidation from './components/Login_Register/CheckValidation';
import DashboardPage from './components/DashboardPage';
import Income from './components/Calculations/Income';
import Expense from './components/Calculations/Expense';
import Balance from "./components/Balance/Balance"
import SignUp from "./components/Login_Register/SignUp"
import Login from "./components/Login_Register/Login"
import IsPrivate from "./components/Login_Register/Private"
import Navbar from "./components/Header_Footer/Navbar"
import Footer from "./components/Header_Footer/Footer"
import FixedDeposit from './components/Calculator/Calculator';
import Calculator from './components/MainCalculator/Calculator';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        Registration + Login Routes
        <Route path="/auth/signup" element={<CheckValidation><SignUp /></CheckValidation>} />
        <Route path="/auth/login" element={<CheckValidation><Login /></CheckValidation>} />

        {/* Dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<IsPrivate><DashboardPage /></IsPrivate>} />

        {/* Features */}
        <Route path="/income" element={<IsPrivate><Income /></IsPrivate>} />
        <Route path="/expense" element={<IsPrivate><Expense /></IsPrivate>} />
        <Route path="/balance" element={<IsPrivate><Balance /></IsPrivate>} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/calculator/fixed-deposit' element={<FixedDeposit />} />
      </Routes>
      <Footer />
    </div >

  );
}

export default App;