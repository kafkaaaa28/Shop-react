import React from 'react';
import Cardsproduct from './Cardproduct';
import { Products } from '../../data/Product';
import Carousel from './Corousel';
const Cards = ({ addCount }) => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center">
      <div className="h-[300px] sm:h-[400px] w-full flex justify-center ">
        <Carousel baseWidth={600} autoplay={true} autoplayDelay={3000} pauseOnHover={true} loop={true} round={false} />
      </div>

      <div className=" w-full grid grid-cols-1 sm:grid-cols-3 mt-3">
        {Products.map((produk) => {
          return <Cardsproduct key={produk.id} nama={produk.nama} addCount={addCount} deskripsi={produk.deskripsi} imageURL={produk.imageURL} Price={produk.Price} />;
        })}
      </div>
    </div>
  );
};

export default Cards;
