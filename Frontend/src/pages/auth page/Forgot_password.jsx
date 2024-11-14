import styles from './Auth_page.module.scss';
import { Link } from 'react-router-dom';
import { usePasswordResetStore } from '../../stores';


function Forgot_password() {
  const { forgotPasswordPage, forgotPasswordForm, title } = styles;
  const { linkSent } = usePasswordResetStore();


  return (
    <>
      <div className={forgotPasswordPage}>
        {linkSent && <p className='success'>A password reset link has been sent to your email</p>}

        <h2 className={title}>Forgot your password</h2>
        <p className='faint-text'>Please enter the email registered to your account to receive a reset link...</p>

        <form action='#' className={forgotPasswordForm}>
          <label>
            <input type="email" name='email' placeholder=' ' aria-label="Email" required />
            <span>Email</span>
          </label>

          <button type="submit">Send reset link</button>
        </form>

        <p>Remembered your password? <Link to="/login">Login</Link></p>
      </div>
    </>
  )
}

export default Forgot_password