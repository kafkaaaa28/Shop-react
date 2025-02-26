import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Cardsproduct = ({ addCount, nama, deskripsi, imageURL, Price }) => {
  const [Jumlahproduk, Setjumlahproduk] = useState(0);
  const [isLogin, setisLogin] = useState(false);
  const [Open, setOpen] = useState(false);
  const [isOn, setIsOn] = useState(false);
  const Toggler = () => {
    setOpen(!Open);
  };

  const tambahproduk = () => {
    Setjumlahproduk(Jumlahproduk + 1);
  };

  const kurangproduk = () => {
    Setjumlahproduk(Jumlahproduk - 1);
  };

  useEffect(() => {
    const Userdata = localStorage.getItem('username');
    const Admin = localStorage.getItem('sebagai');
    if (Userdata && Admin) {
      setisLogin(true);
    } else {
      setisLogin(false);
    }
  }, []);
  const close = () => {
    setIsOn(!isOn);
    if (addCount) {
      addCount(isOn);
      Toggler();
    }
  };
  const Navigate = useNavigate();

  const handleclickNavigate = () => {
    Navigate('/Ceklogin');
    window.location.reload();
  };

  useEffect(() => {
    if (Open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [Open]);

  return (
    <div className="flex justify-center ">
      <div className="w-[85%] lg:w-[60%] bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 mb-4">
        <a href="#">
          <img className="rounded-t-lg" src={imageURL} alt={imageURL} />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{nama}</h5>
          </a>
          <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">{deskripsi}</p>
          <span class="text-xl font-bold text-gray-900 dark:text-white">${Price}</span>
        </div>
        <div className="flex">
          {Jumlahproduk > 0 ? (
            <>
              <div className={`${Jumlahproduk > 0 ? 'bg-white' : 'bg-blue-700 text-white'} flex justify-center w-full mr-2 ml-2 mb-2 rounded border border-blue-700 p-2 `}>
                <button onClick={kurangproduk}>-</button>
                <div className="mx-4">{Jumlahproduk}</div>
                <button onClick={tambahproduk}>+</button>
              </div>
            </>
          ) : (
            <div className={`${Jumlahproduk > 0 ? 'bg-white' : 'bg-blue-700 text-white'} text-sm mr-2 p-1 ml-2 mb-2 w-full rounded text-center`} onClick={tambahproduk}>
              + Buy
            </div>
          )}
          {Jumlahproduk > 0 ? (
            <>
              <button onClick={Toggler} type="button" className="text-white mb-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                Buy
              </button>

              <div id="default-modal" className={`overflow-y-auto overflow-x-hidden ${Open ? 'block' : 'hidden'} fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50`}>
                <div class="relative p-4 w-full max-w-2xl max-h-full">
                  <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Beli</h3>
                      <button
                        type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal"
                        onClick={Toggler}
                      >
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                      </button>
                    </div>
                    <div class="p-4 md:p-5 space-y-4">
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        sure you buy {Jumlahproduk} {nama} ?
                      </p>
                    </div>
                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                      {isLogin ? (
                        <>
                          <button
                            onClick={close}
                            data-modal-hide="default-modal"
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Buy
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={handleclickNavigate}
                            data-modal-hide="default-modal"
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Buy
                          </button>
                        </>
                      )}

                      <button
                        onClick={Toggler}
                        data-modal-hide="default-modal"
                        type="button"
                        class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Cardsproduct;
