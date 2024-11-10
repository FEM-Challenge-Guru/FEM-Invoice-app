import styles from './Page_not_found.module.scss';
import { Link } from 'react-router-dom';


function Page_not_found() {
  return (
    <>
      <div className={ styles.pageNotFound}>
        <img src="/assets/pnf-img.png" alt="girl on swing vector" />
        
        <div className={styles.infoWrapper}>
          <h1>Opps!</h1>
          <p>The requested page could not be found</p>
          <Link to="/invoices">Go to Home</Link>
        </div>
      </div>
    </>
  )
}

export default Page_not_found