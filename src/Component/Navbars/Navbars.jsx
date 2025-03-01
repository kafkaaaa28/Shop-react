import React, { useState, useEffect, use } from 'react';
import DarkMode from '../DarkMode/DarkMode';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbars = ({ count }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const [Dropdown, setDropdown] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('sebagai') === 'admin') {
      setisAdmin(true);
      setisLogin(true);
    } else if (localStorage.getItem('sebagai') === 'username') {
      setisLogin(true);
    }
  }, []);

  const handelDropdown = () => {
    setDropdown(!Dropdown);
  };

  const handlelogout = () => {
    localStorage.clear();
    setisLogin(false);
    Navigate('/');
    window.location.reload();
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <nav className="bg-gray-900 border-gray-200 dark:bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
          {isAdmin ? '' : <span className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Kafka</span>}
        </a>
        <div className="mt-4 ml-[100px] flex gap-10 sm:mt-[0px] ">
          <DarkMode />
          {isAdmin ? (
            ''
          ) : (
            <>
              <div>
                <button
                  onClick={handelDropdown}
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-black dark:text-white bg-white hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-800 dark:hover:bg-blue-400 dark:focus:ring-blue-800"
                  type="button"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  {count === 0 ? '' : <p className="ml-2">{count}</p>}
                  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>

                <div
                  id="dropdown"
                  className={`z-10  bg-white  ${Dropdown ? 'scale-up-ver-top' : 'scale-out-ver-top'} divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 absolute mt-2`}
                  style={{ top: '55px', right: '210px' }}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 mt-2" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <Link to="/Dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Sign out
                      </a>
                    </li>
                    <button
                      type="button"
                      class="text-white dark:text-black w-[160px] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-1 ml-2 me-2 mb-2 dark:bg-white dark:hover:bg-gray-300 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      CheckOut
                    </button>
                  </ul>
                </div>
              </div>

              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <i className="fa-solid fa-bars text-2xl"></i>
              </button>
            </>
          )}
        </div>

        <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`} aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <Link to="/" className="flex items-center p-2 text-black hover:text-white rounded-lg dark:text-white dark:hover:text-black hover:bg-gray-900 dark:hover:bg-white group">
                  <i className="fa-solid fa-house"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/datacars" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <svg
                    className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Data Cars</span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                </Link>
              </li> */}
              <li>
                <Link to="/cards" className="flex items-center p-2 text-black hover:text-white rounded-lg dark:text-white dark:hover:text-black hover:bg-gray-900 dark:hover:bg-white group">
                  <i class="fa-solid fa-basket-shopping"></i>
                  <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                </Link>
              </li>
              {isLogin ? (
                <li>
                  <a className="flex items-center p-2 text-black hover:text-white rounded-lg dark:text-white dark:hover:text-black hover:bg-gray-900 dark:hover:bg-white group">
                    <i class="fa-solid fa-right-to-bracket"></i>
                    <span onClick={handlelogout} className="flex-1 ms-3 cursor-pointer whitespace-nowrap">
                      Logout
                    </span>
                  </a>
                </li>
              ) : (
                <li>
                  <Link to="/CekLogin" className="flex items-center p-2 text-black hover:text-white rounded-lg dark:text-white dark:hover:text-black hover:bg-gray-900 dark:hover:bg-white group">
                    <i class="fa-solid fa-right-to-bracket"></i>
                    <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </aside>
      </div>
    </nav>
  );
};

export default Navbars;
