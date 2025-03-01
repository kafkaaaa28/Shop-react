import './App.css';
import Jumbotron from './Component/Jumbotron/Jumbotron';
import Navbars from './Component/Navbars/Navbars';
import Delay from './Component/Loader/Delay';
import { useState, useEffect } from 'react';
import Fotter from './Component/Fotter/Fotter';
import Carstok from './Component/CarStok/Carstok';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DelayCards from './Component/Loader/DelayCards';
import Dashboard from './Component/Dashboard/Dashboard';

const App = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 h-screen">
        <Navbars count={count} />
        <Routes>
          <Route path="/" element={<Jumbotron />} />
          <Route path="/cards" element={<DelayCards addCount={addCount} />} />
          <Route path="/datacars" element={<Carstok />} />
          <Route path="/Ceklogin" element={<Delay />} />

          <Route path="/Dashboard" element={localStorage.getItem('sebagai') === 'admin' ? <Dashboard /> : <Navigate to="/" />} />
        </Routes>
        <Fotter />
      </div>
    </Router>
  );
};

export default App;
