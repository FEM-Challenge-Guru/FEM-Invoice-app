import styles from './Login_signup.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Signup() {
  const [suPwVisible, setSuPwVisible] = useState(false);
  const {signUpForm, signUpPage, title } = styles;

  // password visibility for signup page
  const changeSuPwVisibility = () => {
    setSuPwVisible(!suPwVisible);
  }

  const handleSignupAuth = () => {
    // login auth logic goes here
  }


  return (
    <>
      <div className={signUpPage}>
        <h2 className={title}>Create an account</h2>
        <p className='faint-text'>Welcome! Please enter your details to sign up...</p> 
        <form action='#' className={signUpForm}>
          <label>
            <input type="text" name='full_name' placeholder=' ' aria-label="Full Name" required />
            <span>Full Name</span>
          </label>
          
          <label>
            <input type="email" name='email' placeholder=' ' aria-label="Email" required />
            <span>Email</span>
          </label>

          <label>
            <ion-icon name={!suPwVisible ? "eye-off-outline" : "eye-outline"} aria-label="Password visibility" onClick={changeSuPwVisibility}></ion-icon>
            <input type={!suPwVisible ? "password" : "text"} name='password' placeholder=' ' aria-label="Password" required />
            <span>Create Password</span>
          </label>
          <label>
            <input type={!suPwVisible ? "password" : "text"} name='password' placeholder=' ' aria-label="Password" required />
            <span>Confirm Password</span>
          </label>
          {/* <p className={pwValidityChecker}>Password must contain at least 8 alphanumeric characters</p> */}
          <button type="submit" onClick={handleSignupAuth}>Sign up</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </>
  )
}

export default Signup