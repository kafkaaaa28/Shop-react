import react, { useState, useEffect } from 'react';
import Cards from '../Cards/Cards';
import { useNavigate } from 'react-router-dom';
import DelayCars from './DelayCars';
const DelayCards = ({ addCount }) => {
  const Navigate = useNavigate();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      Navigate('/cards');
    }, 3000);
    return () => clearTimeout(timer);
  }, [Navigate]);

  return (
    <div>
      {Loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <DelayCars />
        </div>
      ) : (
        <Cards addCount={addCount} />
      )}
    </div>
  );
};

export default DelayCards;
