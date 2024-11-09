import styles from './Login_signup.module.scss'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useUrlPathStore } from '../../stores/urlLocationStore';


function Login_signup() {
  const { loginSignupPage, lsContainer, appName, lsHeroImg, title, imgWrapper, loginForm, signUpForm, pwValidityChecker, loginPage, signUpPage } = styles;
  const [pwVisible, setPwVisible] = useState(false);
  const siteUrl = useLocation();
  const { urlPath, setUrlPath } = useUrlPathStore();

  const changePwVisibility = () => {
    setPwVisible(!pwVisible);
  }

  useEffect(() => {
    console.log(urlPath);
  }, [urlPath])

  
  useEffect(() => {
    setUrlPath(siteUrl.pathname) // stores the current page path to state
  }, [siteUrl])


  return (
    <>
      <div className={loginSignupPage}>
        <div className={lsContainer}>
          <h1 className={appName}><img src="/assets/logo.svg" alt="App logo" /> Invoice App</h1>

          { urlPath === '/login' ?
            <div className={loginPage}>
              <h2 className={title}>Login to you account</h2>
              <p className='faint-text'>Welcome back! Please enter your details...</p>

              <form action='#' className={loginForm}>
                <label>
                  <input type="email" name='email' placeholder=' ' aria-label="Email" required />
                  <span>Email</span>
                </label>

                <label>
                  <ion-icon name={!pwVisible ? "eye-off-outline" : "eye-outline"} aria-label="Password visibility" onClick={changePwVisibility}></ion-icon>
                  <input type={!pwVisible ? "password" : "text"} name='password' placeholder=' ' aria-label="Password" required />
                  <span>Password</span>
                </label>
                {/* <p className={pwValidityChecker}>Password must contain at least 8 alphanumeric characters</p> */}

                <button type="submit">Login</button>
              </form>

              <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>

            : urlPath === '/signup' ?

            <div className={signUpPage}>
              <h2 className={title}>Create an account</h2>
              <p>Welcome! Please enter your details to sign up...</p> 
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
                  <ion-icon name={!pwVisible ? "eye-off-outline" : "eye-outline"} aria-label="Password visibility" onClick={changePwVisibility}></ion-icon>
                  <input type={!pwVisible ? "password" : "text"} name='password' placeholder=' ' aria-label="Password" required />
                  <span>Create Password</span>
                </label>
                <label>
                  <ion-icon name={!pwVisible ? "eye-off-outline" : "eye-outline"} aria-label="Password visibility" onClick={changePwVisibility}></ion-icon>
                  <input type={!pwVisible ? "password" : "text"} name='password' placeholder=' ' aria-label="Password" required />
                  <span>Confirm Password</span>
                </label>
                {/* <p className={pwValidityChecker}>Password must contain at least 8 alphanumeric characters</p> */}
                <button type="submit">Sign up</button>
              </form>
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
            : 
            null
          }
          </div>

        <div className={imgWrapper}>
          <img src="/assets/login-signup-img.jpeg" alt="Hero image" className={lsHeroImg}/>
        </div>

      </div>
    </>
  )
}

export default Login_signup