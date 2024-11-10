import styles from './Login_signup.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
  const [lgPwVisible, setLgPwVisible] = useState(false);
  const {loginForm, pwValidityChecker, loginPage, title } = styles;

  // password visibility for login page
  const changeLgPwVisibility = () => {
    setLgPwVisible(!lgPwVisible);
  }

  const handleLoginAuth = () => {
    // login auth logic goes here
  }


  return (
    <>
      <div className={loginPage}>
        <h2 className={title}>Login to you account</h2>
        <p className='faint-text'>Welcome back! Please enter your details...</p>

        <form action='#' className={loginForm}>
          <label>
            <input type="email" name='email' placeholder=' ' aria-label="Email" required />
            <span>Email</span>
          </label>

          <label>
            <ion-icon name={!lgPwVisible ? "eye-off-outline" : "eye-outline"} aria-label="Password visibility" onClick={changeLgPwVisibility}></ion-icon>
            <input type={!lgPwVisible ? "password" : "text"} name='password' placeholder=' ' aria-label="Password" required />
            <span>Password</span>
          </label>
          {/* <p className={pwValidityChecker}>Password must contain at least 8 alphanumeric characters</p> */}

          <button type="submit" onClick={handleLoginAuth}>Login</button>
        </form>

        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </>
  )
}

export default Login