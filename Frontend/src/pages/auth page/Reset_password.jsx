import styles from './Auth_page.module.scss';
import { Link } from 'react-router-dom';
import { usePasswordResetStore } from '../../stores';
import { useRef, useState, useEffect } from 'react';
import { handlePasswordStrength } from '../../utils/passwordStrengthValidator'


function Reset_password() {
  const { resetPasswordPage, resetForm, title, alertInfo, pwStrength } = styles;
  const { resetSuccessful } = usePasswordResetStore();
  const [rstPwVisible, setRstPwVisible] = useState(false);
  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
  const [strengthInfo, setStrengthInfo] = useState('');
  const [pwStrengthColor, setPwStrengthColor] = useState('');
  const [displayPwStrength, setDisplayPwStrength] = useState(false);
  const newPassword = useRef(null);
  const confirmNewPassword = useRef(null);


  // password visibility for signup page
  const changeRstPwVisibility = () => {
    setRstPwVisible(!rstPwVisible);
  }

  const handlePasswordsMatch = () => {
    if (confirmNewPassword.current.value.length > 0 && newPassword.current.value !== confirmNewPassword.current.value) {
      setPasswordsDontMatch(true);
    }
    else {
      setPasswordsDontMatch(false);
    }
  }

  // validate password strength
  const validatePassword = () => {
    if (newPassword.current.value.length > 0) {
      const strength = handlePasswordStrength(newPassword.current.value);
      setStrengthInfo(strength);
      setDisplayPwStrength(true);
    }
    else {
      setDisplayPwStrength(false);
    }
  }

  useEffect(() => {
    if (strengthInfo == 'Very Weak') {
      setPwStrengthColor('red');
    }
    if (strengthInfo == 'Weak') {
      setPwStrengthColor('pale-red');
    }
    if (strengthInfo == 'POOR') {
      setPwStrengthColor('orange');
    }
    if (strengthInfo == 'Strong') {
      setPwStrengthColor('lemon');
    }
    if (strengthInfo == 'Very Strong') {
      setPwStrengthColor('green');
    }
  }, [strengthInfo])

  // password reset auth
  const handleResetAuth = (e) => {
    // check if passwords match and password strength is strong or very strong
    if (!passwordsDontMatch && displayPwStrength && (strengthInfo == 'Strong' || strengthInfo == 'Very Strong')) {
      // reset auth logic goes here
    }
    else {
      e.preventDefault(); // prevent form submission
    }
  }

  return (
    <>
      <div className={resetPasswordPage}>
        { resetSuccessful && <p className='success'>Congrats! Your password has been successfully reset</p> }

        <h2 className={title}>Reset your password</h2>
        <p className='faint-text'>Please enter your new password...</p>

        <form action='#' className={resetForm} onSubmit={(e) => handleResetAuth(e)}>
          <label>
            <ion-icon name={!rstPwVisible ? "eye-off-outline" : "eye-outline"} aria-label="Password visibility" onClick={changeRstPwVisibility}></ion-icon>
            <input type={!rstPwVisible ? "password" : "text"} name='password' placeholder=' ' aria-label="Password" onInput={() => { handlePasswordsMatch(); validatePassword() }} ref={newPassword} required />
            <span>Create New Password</span>
          </label>
          { displayPwStrength && <p className={pwStrength}>Password strength: <span className={pwStrengthColor}>{strengthInfo}</span></p> }

          <label>
            <input type={!rstPwVisible ? "password" : "text"} name='password' placeholder=' ' aria-label="Password" onInput={handlePasswordsMatch} ref={confirmNewPassword} required />
            <span>Confirm New Password</span>
          </label>
          { passwordsDontMatch && <p className={alertInfo}>Passwords don't match</p> }

          <button type="submit">Reset password</button>
        </form>

        <p>Remembered your password? <Link to="/login">Login</Link></p>

        {/* route to /login page once the password has been successfully reset */}
      </div>
    </>
  )
}

export default Reset_password