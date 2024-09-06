import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Endo } from '../Assets/endo.svg';

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle the password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col items-center justify-center w-1/2 h-full bg-cover bg-center text-white text-center" style={{ backgroundImage: "url('https://cloud.appwrite.io/console/_app/immutable/assets/login-dark-mode.CXyYQeDN.png')" }}>
        <Endo width="300" height="300" />
        <div className="mt-4 text-2xl font-semibold leading-relaxed">
          You don't have to be great to start,<br />But you have to start, to be great.
        </div>
      </div>

      <form className="flex flex-col justify-center items-center w-1/2 h-full bg-black">
        <div className="flex flex-col items-start w-96">
          <h2 className="text-white text-2xl font-semibold mb-6">LOGIN</h2>
          <div className="w-full flex flex-col gap-6 mb-4">
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full p-3 bg-transparent border border-white/30 text-white focus:outline-none focus:ring-0 transition duration-300 hover:shadow-neon"
            />
            <div className="relative w-full">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                placeholder="Enter password"
                className="w-full p-3 bg-transparent border border-white/30 text-white focus:outline-none focus:ring-0 transition duration-300 hover:shadow-neon"
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="absolute right-3 top-4 cursor-pointer text-white/70"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <a
            href='/dashboard'
            className="w-full flex justify-center items-center p-3 bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-300"
          >
            Sign in
          </a>
          <div className="flex justify-between items-center w-full mt-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition duration-300">Forgot Password?</a>
            <a href="/signup" className="hover:text-white transition duration-300">Sign up</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
