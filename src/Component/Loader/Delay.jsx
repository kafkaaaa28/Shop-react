import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CekLogin from '../Ceklogin/CekLogin';
import DelayCars from './DelayCars';
const Delay = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate('/Ceklogin');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen w-full ">
          <DelayCars />
        </div>
      ) : (
        <CekLogin />
      )}
    </div>
  );
};

export default Delay;
