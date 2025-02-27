import './App.css';
import Jumbotron from './Component/Jumbotron/Jumbotron';
import Navbars from './Component/Navbars/Navbars';
import Delay from './Component/Loader/Delay';
import { useState } from 'react';
import Fotter from './Component/Fotter/Fotter';
import Carstok from './Component/CarStok/Carstok';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import DelayCards from './Component/Loader/DelayCards';

const App = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Router>
        <div className="bg-white dark:bg-gray-900 h-screen">
          <Navbars count={count} />
          <div className="flex flex-col w-full bg-white dark:bg-gray-900 sm:flex-col sm:justify-center sm:items-center md:flex-row md:justify-center md:items-center lg:flex-row">
            <Routes>
              <Route path="/" element={<Jumbotron />} />
              <Route path="/cards" element={<DelayCards addCount={addCount} />} />
              <Route path="/datacars" element={<Carstok />} />
              <Route path="/Ceklogin" element={<Delay />} />
            </Routes>
          </div>
          <Fotter />
        </div>
      </Router>
    </>
  );
};

export default App;
