import styles from './Login_signup.module.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useUrlPathStore } from '../../stores';
import Login from './Login';
import Signup from './Signup';


function Login_signup() {
  const siteUrl = useLocation();
  const { urlPath, setUrlPath } = useUrlPathStore();
  const { loginSignupPage, lsContainer, appName, lsHeroImg, imgWrapper} = styles;

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
          {
            urlPath === '/signup' ?
              <Signup />
            : 
              <Login />
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