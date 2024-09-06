import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Endo } from '../Assets/endo.svg';

const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle the password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="flex flex-col items-center justify-center w-1/2 h-full bg-cover bg-center text-white text-center p-5 bg-[url('https://cloud.appwrite.io/console/_app/immutable/assets/login-dark-mode.CXyYQeDN.png')]">
        <Endo width="300" height="300" />
        <div className="text-2xl leading-relaxed font-montserrat mt-4">
          Believe you can and you're halfway there.
        </div>
      </div>

      <form className="flex flex-col justify-center items-center w-1/2 h-full bg-black">
        <div className="flex flex-col items-center text-white">
          <h2 className="font-montserrat font-semibold mb-5 text-lg">SIGN UP</h2>

          <div className="flex flex-row gap-4 w-full mb-4">
            <div className="w-full">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-3 bg-transparent text-white border border-gray-300 focus:border-[rgba(247,69,96,0.8)] focus:shadow-[0_0_8px_rgba(247,69,96,0.5)] rounded outline-none transition duration-300"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-3 bg-transparent text-white border border-gray-300 focus:border-[rgba(247,69,96,0.8)] focus:shadow-[0_0_8px_rgba(247,69,96,0.5)] rounded outline-none transition duration-300"
              />
            </div>
          </div>

          <div className="flex flex-row gap-4 w-full mb-4">
            <div className="w-full">
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full p-3 bg-transparent text-white border border-gray-300 focus:border-[rgba(247,69,96,0.8)] focus:shadow-[0_0_8px_rgba(247,69,96,0.5)] rounded outline-none transition duration-300"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Country"
                required
                className="w-full p-3 bg-transparent text-white border border-gray-300 focus:border-[rgba(247,69,96,0.8)] focus:shadow-[0_0_8px_rgba(247,69,96,0.5)] rounded outline-none transition duration-300"
              />
            </div>
          </div>

          <div className="flex flex-row gap-4 w-full mb-4">
            <div className="w-full">
              <input
                type="number"
                placeholder="Age"
                required
                className="w-full p-3 bg-transparent text-white border border-gray-300 focus:border-[rgba(247,69,96,0.8)] focus:shadow-[0_0_8px_rgba(247,69,96,0.5)] rounded outline-none transition duration-300"
              />
            </div>
            <div className="relative w-full">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                required
                className="w-full p-3 bg-transparent text-white border border-gray-300 focus:border-[rgba(247,69,96,0.8)] focus:shadow-[0_0_8px_rgba(247,69,96,0.5)] rounded outline-none transition duration-300"
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="absolute right-3 top-3 text-gray-400 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          <div className="flex flex-row gap-4 w-full mb-4">
            <div className="w-full">
              <select
                required
                className="w-full p-3 bg-black text-white border border-gray-300 focus:border-[rgba(247,69,96,0.8)] focus:shadow-[0_0_8px_rgba(247,69,96,0.5)] rounded outline-none transition duration-300"
              >
                <option value="" disabled selected hidden>
                  Fitness Level
                </option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div className="w-full">
              <select
                required
                className="w-full p-3 bg-black text-white border border-gray-300 focus:border-[rgba(247,69,96,0.8)] focus:shadow-[0_0_8px_rgba(247,69,96,0.5)] rounded outline-none transition duration-300"
              >
                <option value="" disabled selected hidden>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row gap-4 w-full mb-4">
            <div className="w-full">
              <input
                type="text"
                placeholder="Height (cm)"
                required
                className="w-full p-3 bg-transparent text-white border border-gray-300 focus:border-[rgba(247,69,96,0.8)] focus:shadow-[0_0_8px_rgba(247,69,96,0.5)] rounded outline-none transition duration-300"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                placeholder="Weight (kg)"
                required
                className="w-full p-3 bg-transparent text-white border border-gray-300 focus:border-[rgba(247,69,96,0.8)] focus:shadow-[0_0_8px_rgba(247,69,96,0.5)] rounded outline-none transition duration-300"
              />
            </div>
          </div>

          <a
           href="/dashboard"
           className="w-full p-3 bg-[rgba(247,69,96,0.8)] text-white focus:outline-none focus:shadow-[0_0_8px_rgba(247,69,96,0.5)] transition duration-300 rounded mt-5 text-center"
           >
           Sign up
         </a>


          <div className="mt-6 text-white">
            Already have an account?{' '}
            <a href="/login" className="text-gray-400 hover:text-blue-400 transition duration-300">
              Login
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
