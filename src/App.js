import './App.css';
import Jumbotron from './Component/Jumbotron/Jumbotron';
import Navbars from './Component/Navbars/Navbars';
import Delay from './Component/Loader/Delay';
import { useEffect, useState } from 'react';
import Fotter from './Component/Fotter/Fotter';
import Carstok from './Component/CarStok/Carstok';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DelayCards from './Component/Loader/DelayCards';
import Dashboard from './Component/Dashboard/Dashboard';

const App = () => {
  const [count, setCount] = useState(0);
  const [isUser, setisUser] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('sebagai') === 'admin') {
      setisAdmin(true);
    } else if (localStorage.getItem('sebagai') === 'username') {
      setisUser(true);
    }
  }, []);
  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 h-screen">
        <Navbars count={count} />
        <Routes>
          <Route path="/" element={isAdmin ? <Navigate to="/Dashboard" /> : <Jumbotron />} />
          <Route path="/cards" element={isAdmin ? <Navigate to="/Dashboard" /> : <DelayCards addCount={addCount} />} />
          <Route path="/datacars" element={isAdmin ? <Carstok /> : <Navigate to="/" />} />
          <Route path="/Ceklogin" element={isUser ? <Navigate to="/" /> : isAdmin ? <Navigate to="/Dashboard" /> : <Delay />} />
          <Route path="/Dashboard" element={localStorage.getItem('sebagai') === 'admin' ? <Dashboard /> : <Navigate to="/" />} />
        </Routes>
        <Fotter />
      </div>
    </Router>
  );
};

export default App;
