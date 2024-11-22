import styles from './SideBar.module.scss';
import { useState, useEffect, useRef } from 'react';


function SideBar() {
  const { sideBar, logoWrapper, themeUserWrapper, themeIconWrapper, userAvatarWrapper } = styles;
  // Checks if user has a saved theme preference. If not, sets default theme to light mode.
  const [isLightMode, setIsLightMode] = useState(() => {
    if (localStorage.getItem('userThemeChoice') === null) {
      localStorage.setItem('userThemeChoice', true);
      return true;
    }
    else {
      return localStorage.getItem('userThemeChoice') === 'true' ? true : false;
    }
  });
  const themeIconRef = useRef(null);

  // Saves user's theme preference to local storage
  useEffect(() => {
    localStorage.setItem('userThemeChoice', isLightMode);
  }, [isLightMode])

  useEffect(() => {
    // On page load, sets site theme based on user's currently saved theme.
    if (isLightMode) {
      themeIconRef.current.src = "/assets/icon-moon.svg";
      document.documentElement.classList.remove('dark-theme');
    } else {
      themeIconRef.current.src = "/assets/icon-sun.svg";
      document.documentElement.classList.add('dark-theme');
    }
  }, []);

  // Handles theme switch
  const toggleTheme = () => {
    themeIconRef.current.src = themeIconRef.current.src.endsWith("icon-moon.svg") ? "/assets/icon-sun.svg" : "/assets/icon-moon.svg";
    document.documentElement.classList.toggle('dark-theme');
    setIsLightMode(curVal => !curVal);
  }


  return (
    <>
      <div className={sideBar}>
        <div className={logoWrapper}>
          <div></div>
          <div></div>
          <img src="/assets/logo.svg" alt="App logo"/>
        </div>

        <div className={themeUserWrapper}>
          <div className={themeIconWrapper}>
            <img src="/assets/icon-moon.svg" alt="Moon icon" ref={themeIconRef} onClick={toggleTheme}/>
          </div>
          <div className={userAvatarWrapper}>
            <img src="/assets/image-avatar.jpg" alt="User avatar" data-tooltip-id="info-tooltip" data-tooltip-content="Sarah"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideBar