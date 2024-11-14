import styles from './Auth_page.module.scss';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { handlePasswordStrength } from '../../utils/passwordStrengthValidator'


function Signup() {
  const [suPwVisible, setSuPwVisible] = useState(false);
  const [displayPwStrength, setDisplayPwStrength] = useState(false);
  const [strengthInfo, setStrengthInfo] = useState('');
  const [pwStrengthColor, setPwStrengthColor] = useState('');
  const {signUpForm, signUpPage, title, alertInfo, pwStrength } = styles;
  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false);
  const userPassword = useRef(null);
  const confirmPassword = useRef(null);

  // password visibility for signup page
  const changeSuPwVisibility = () => {
    setSuPwVisible(!suPwVisible);
  }

  // signup auth logic
  const handleSignupAuth = (e) => {
    // check if passwords match and password strength is strong or very strong
    if (!passwordsDontMatch && displayPwStrength && (strengthInfo == 'Strong' || strengthInfo == 'Very Strong')) {
      // signup auth logic goes here
    }
    else {
      e.preventDefault(); // prevent form submission
    }
  }

  // check if passwords match
  const handlePasswordsMatch = () => {
    if (confirmPassword.current.value.length > 0 && userPassword.current.value !== confirmPassword.current.value) {
      setPasswordsDontMatch(true);
    }
    else {
      setPasswordsDontMatch(false);
    }
  }

  // validate password strength
  const validatePassword = () => {
    if (userPassword.current.value.length > 0) {
      const strength = handlePasswordStrength(userPassword.current.value);
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


  return (
    <>
      <div className={signUpPage}>
        <h2 className={title}>Create an account</h2>
        <p className='faint-text'>Welcome! Please enter your details to sign up...</p>

        <form action='#' className={signUpForm} onSubmit={(e) => handleSignupAuth(e)}>
          <label>
            <input type="text" name='first_name' placeholder=' ' aria-label="First Name" required />
            <span>First Name</span>
          </label>

          <label>
            <input type="text" name='last_name' placeholder=' ' aria-label="Last Name" required />
            <span>Last Name</span>
          </label>
          
          <label>
            <input type="email" name='email' placeholder=' ' aria-label="Email" required />
            <span>Email</span>
          </label>

          <label>
            <ion-icon name={!suPwVisible ? "eye-off-outline" : "eye-outline"} aria-label="Password visibility" onClick={changeSuPwVisibility}></ion-icon>
            <input type={!suPwVisible ? "password" : "text"} name='password' placeholder=' ' ref={userPassword} aria-label="Password" onInput={() => { handlePasswordsMatch(); validatePassword() }} required />
            <span>Create Password</span>
          </label>
          { displayPwStrength && <p className={pwStrength}>Password strength: <span className={pwStrengthColor}>{strengthInfo}</span></p> }

          <label>
            <input type={!suPwVisible ? "password" : "text"} name='password' placeholder=' ' ref={confirmPassword} aria-label="Password" onInput={handlePasswordsMatch} required />
            <span>Confirm Password</span>
          </label>
          { passwordsDontMatch && <p className={alertInfo}>Passwords don't match</p> }

          <button type="submit">Sign up</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </>
  )
}

export default Signup