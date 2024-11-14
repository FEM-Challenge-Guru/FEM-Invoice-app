import styles from './Auth_page.module.scss';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useUrlPathStore } from '../../stores';
import Login from './Login';
import Signup from './Signup';
import Forgot_password from './Forgot_password';
import Reset_password from './Reset_password';


function Auth_page() {
  const siteUrl = useLocation();
  const { urlPath, setUrlPath } = useUrlPathStore();
  const { authPage, formsContainer, appName, heroImg, imgWrapper} = styles;

  useEffect(() => {
    setUrlPath(siteUrl.pathname) // stores the current page path to state
  }, [siteUrl])


  return (
    <>
      <div className={authPage}>
        <div className={formsContainer}>
          <h1 className={appName}><img src="/assets/logo.svg" alt="App logo" /> Invoice App</h1>
          {
            urlPath === '/login' ?
              <Login />
            :
              urlPath === '/signup' ?
                <Signup />
              : 
                urlPath === '/forgot-password' ?
                  <Forgot_password />
                : 
                  urlPath === '/reset-password' &&
                    <Reset_password />
          }
        </div>

        <div className={imgWrapper}>
          <img src="/assets/login-signup-img.jpeg" alt="Hero image" className={heroImg}/>
        </div>
      </div>
    </>
  )
}

export default Auth_page