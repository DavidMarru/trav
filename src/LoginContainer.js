import './LoginContainer.css';
import React, { useState } from "react";
import Google from './img/Login icons/(Google) Button.svg';
import Facebook from './img/Login icons/(Facebook) Button.svg';
import Twitter from './img/Login icons/(Twitter) Button.svg';
import { useNavigate } from 'react-router-dom';


const SignInComponent = () => {
	const [isErrors, setErrors] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		passWord: "",
	  });
      const navigate = useNavigate();

      const goBack = () => {
        navigate(-1);
    };


	  const LoginForm = () => {
		const newErrors = {};
	
		// Validate email
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email || !emailPattern.test(formData.email)) {
		  newErrors.email = "**Please enter a valid email address (e.g., example@gmail.com).**";
		}

			// Validate country/region
		if (!formData.passWord) {
		  newErrors.passWord = "**Country/Region is required.**";
		}
		
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0; // Returns true if no errors
	  };

    return (
		<div className='login-overlay'>
        <div className="login-component">
            <div className="sign-up-wrapper">
                <div className="sign-up">Sign up</div>
            </div>
            <div className="frame-parent">
                <div className="sign-in-wrapper">
                    <div className="sign-up">SIGN IN</div>
                </div>
                <div className="one-step-closer-to-your-next-t-wrapper">
                    <div className="one-step-closer">One Step closer to your next trip.</div>
                </div>
                <div className="frame-group">
                    <div className="password-wrapper">
                        <div className="sign-up">Email</div>
                    </div>
                    <input className="email-text-input"
					 type="email"
					/>
                </div>
                <div className="frame-group">
                    <div className="password-wrapper">
                        <div className="sign-up">Password</div>
                    </div>
                    <input className="email-text-input"
					 type="password"
					/>
                </div>
                <div className="rm-fp">
                    <div className="remember-me-group">
                        <div className="toggle-tick-box" />
                        <div className="sign-up">Remember me.</div>
                    </div>
                    <div className="forgot-password-button">Forgot Password</div>
                </div>
                <div className="Login-Button">
                    <div className="login">Login</div>
                </div>
                <div className="sign-up">Or</div>
                <div className="login-options">
                    <img className="icon" alt="" src={Google} />
                    <img className="icon" alt="" src={Facebook} />
                    <img className="icon" alt="" src={Twitter} />
                </div>

            </div>
				<div className="Take-me-back-Button" onClick={goBack}>Take me back</div>
        </div>
		</div>
    );
};

export default SignInComponent;
