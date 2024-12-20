import styles from './Auth_page.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLoginStore } from '../../stores';


function Login() {
  const {loginForm, loginPage, title, rememberMe, googleLoginBtn, hrOr } = styles;
  const [lgPwVisible, setLgPwVisible] = useState(false);
  const { passwordInCorrect, rememberLogin, setRememberLogin } = useLoginStore();

  // password visibility for login page
  const changeLgPwVisibility = () => {
    setLgPwVisible(!lgPwVisible);
  }

  const handleLoginAuth = (e) => {
    // login auth logic goes here
  }


  return (
    <>
      <div className={loginPage}>

       { passwordInCorrect && <p className="warning">Password is incorrect. Try again</p> }

        <h2 className={title}>Login to you account</h2>

        <button className={googleLoginBtn}> <img src="/assets/google.png" alt="Google logo" /> Continue with Google</button>

        <div className={`${hrOr} faint-text`}>
          <hr />
          <p className=''>or</p>
          <hr />
        </div>

        <p className='faint-text'>Enter your details to login...</p>

        <form action='#' className={loginForm} onSubmit={(e) => handleLoginAuth(e)}>
          <label>
            <input type="email" name='email' placeholder=' ' aria-label="Email" required />
            <span>Email</span>
          </label>

          <label>
            <ion-icon name={!lgPwVisible ? "eye-off-outline" : "eye-outline"} aria-label="Password visibility" onClick={changeLgPwVisibility}></ion-icon>
            <input type={!lgPwVisible ? "password" : "text"} name='password' placeholder=' ' aria-label="Password" required />
            <span>Password</span>
          </label>

          <div className={rememberMe}><input type="checkbox" onClick={() => setRememberLogin(!rememberLogin)} />Remember Me</div>

          <Link to='/forgot-password'>Forgotten Password?</Link>

          <button type="submit" onClick={handleLoginAuth}>Login</button>
        </form>

        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </>
  )
}

export default Login