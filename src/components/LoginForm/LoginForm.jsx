import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Endo} from '../Assets/endo.svg';
import './LoginForm.css';

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle the password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  

    return (
      <div className="container">
         <div className ="first-half">
         <Endo width="300" height="300" />
          <div className ="quote">
            You don't have to be great to start,<br/>But you have to start, to be great.
          </div>
         </div>

         <form action ="">
            <div className="wrapper">
            <h2>LOGIN</h2>
            <div className ="input-box">
                <input type ="email" placeholder="Email" required/>
                
            <div className="password-container">
              <input
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                className="form-control"
                placeholder="Enter password"
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="password-toggle-icon"
                onClick={togglePasswordVisibility}
                style={{ cursor: 'pointer', marginLeft: '-32px' }}
              />
            </div>


               
            </div>
            

            <button type="submit">Sign in</button>

            <div className ="footer">
            <div className ="remember-forgot">
                {/* <label><input type ="checkbox"/>Remember me</label> */}
                <a href ="#">Forgot Password?</a>
            </div>

            <div classname="register-link">
                <a href ="#">Sign up</a>
            </div>
            </div>

            </div>
         </form>
      </div>
    )
}

export default LoginForm;