import react, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Ceklogin.css';
const CekLogin = () => {
  const [Open, setOpen] = useState(false);
  const [UserLog, setUSerLog] = useState('');
  const [PassLog, setPassLog] = useState('');
  const [UserRegis, setUserRegis] = useState('');
  const [PassRegis, setPassRegis] = useState('');
  const navigate = useNavigate();
  const Register = (e) => {
    e.preventDefault();
    if (UserRegis && PassRegis) {
      localStorage.setItem('sebagai', 'username');
      localStorage.setItem('username', UserRegis);
      localStorage.setItem('password', PassRegis);
      alert('Registration successful');
    } else {
      alert('Please fill out both fields');
    }
  };
  const Login = (e) => {
    e.preventDefault();
    if (UserLog.trim().toLowerCase() === 'admin' && PassLog.trim() === 'admin123') {
      localStorage.setItem('sebagai', 'admin');
      localStorage.setItem('username', UserLog);
      localStorage.setItem('password', PassLog);
      alert('Admin login successful');
      navigate('/');
      window.location.reload();
    } else if (localStorage.getItem('username') === UserLog.trim() && localStorage.getItem('password') === PassLog.trim()) {
      alert(`login sebagai ${UserLog} berhasil`);
      navigate('/');
      window.location.reload();
    } else {
      alert('User or password is incorrect');
    }
  };

  const Toggler = () => {
    setOpen(!Open);
    let paragraf = document.getElementById('paragraf');
    let header = document.getElementById('header');
    let yet = document.getElementById('yet');
    if (!Open) {
      header.innerHTML = 'Come join us!';
      yet.textContent = 'Already have account? Signin';
      paragraf.innerHTML = 'We are so excited to have you here if you havent already, create an account to get access to exlusive offers, rewards and discounts';
    } else {
      paragraf.innerHTML = ' Welcome Back! We are so happy to have you here.its great to see you again. We hope you had a safe and enjoyable time away';
      header.innerHTML = 'Welcome Back';
      yet.textContent = 'No account Yet? signup';
    }
  };

  const TypePassword = () => {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  };

  const TypePasswordRegis = () => {
    const passwordInput = document.getElementById('passwordRegis');
    const confirmPasswordInput = document.getElementById('ComfrimPassword');
    if (passwordInput.type === 'password' && confirmPasswordInput.type === 'password') {
      passwordInput.type = 'text';
      confirmPasswordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
      confirmPasswordInput.type = 'password';
    }
  };

  return (
    <div className="w-full ">
      <div className="bg-white p-2 dark:bg-gray-900 flex w-full flex-wrap lg:flex-nowrap justify-center h-screen">
        <div className="w-full max-w-sm p-4 z-20 bg-white border  border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={Login} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to Kafka</h5>
            <label for="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <i className="fa-solid fa-user"></i>
                </div>
                <input
                  type="text"
                  name="username"
                  value={UserLog}
                  onChange={(e) => setUSerLog(e.target.value)}
                  id="LogUsername"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <input
                  type="password"
                  value={PassLog}
                  onChange={(e) => setPassLog(e.target.value)}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    onClick={TypePassword}
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  See Password
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            <p className="ms-2 text-center text-sm font-medium text-gray-900 dark:text-gray-300">or sign with</p>
            <div className="flex justify-center gap-5">
              <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=in&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-805085264%3A1739812579910656&ddm=1">
                <i class="fa-brands text-2xl fa-google"></i>
              </a>
              <a href="https://www.facebook.com/login.php/">
                <i class="fa-brands text-2xl fa-facebook"></i>
              </a>
              <i class="fa-brands text-2xl fa-linkedin"></i>
            </div>
          </form>
        </div>
        <div className="w-full max-w-sm p-4 z-20 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col justify-center items center h-full">
            <h1 className=" text-2xl text-black dark:text-white font-bold text-center " id="header">
              Welcome Back
            </h1>
            <p className="font-medium text-center text-black dark:text-white" id="paragraf">
              Welcome Back! We are so happy to have you here.its great to see you again. We hope you had a safe and enjoyable time away
            </p>
            <button
              type="button"
              id="yet"
              onClick={Toggler}
              class="text-black mt-6  bg-transparent border border-solid border-black dark:text-white dark:border-white hover:bg-sky-50 dark:hover:bg-gray-900 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
            >
              No account Yet? signup
            </button>
          </div>
        </div>
        <div
          className={`Regis w-full max-w-sm p-4 bg-white border border-gray-200 transition-transform  ${Open ? 'translate-x-0' : '-translate-x-full'}
        }  rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700`}
        >
          <form onSubmit={Register} className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Register</h5>
            <label for="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
              />
            </div>
            <div>
              <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <i className="fa-solid fa-user"></i>
                </div>
                <input
                  value={UserRegis}
                  onChange={(e) => setUserRegis(e.target.value)}
                  type="text"
                  name="username"
                  id="LogUsername"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <input
                  type="password"
                  value={PassRegis}
                  onChange={(e) => setPassRegis(e.target.value)}
                  name="password"
                  id="passwordRegis"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Comfrim password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <i className="fa-solid fa-lock"></i>
                </div>
                <input
                  type="password"
                  name="password"
                  id="ComfrimPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    onClick={TypePasswordRegis}
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  See Password
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CekLogin;
