import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Endo } from '../Assets/endo.svg';
import './SignUp.css';

const SignUpForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle the password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container">
      <div className="first-half">
        <Endo width="300" height="300" />
        <div className="quote">
          Believe you can and you're halfway there.
        </div>
      </div>

      <form action="">
        <div className="wrapper">
          <h2>SIGN UP</h2>

          <div className="input-row">
            <div className="input-box">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
            </div>
          </div>

          <div className="input-row">
            <div className="input-box">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Country" required />
            </div>
          </div>

          <div className="input-row">
            <div className="input-box">
              <input type="number" placeholder="Age" required />
            </div>
            <div className="input-box">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                required
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer', marginLeft: '-28px' }}
              />
            </div>
          </div>

          <div className="input-row">
            <div className="input-box">
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Confirm Password"
                required
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer', marginLeft: '-28px' }}
              />
            </div>
            <div className="input-box">
              <select required>
                <option value="" disabled selected hidden>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </div>
          </div>

          <button type="submit">Sign up</button>
          <div className ="user-exists">
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>

        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
