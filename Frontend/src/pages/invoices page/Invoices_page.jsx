import styles from './Invoices_page.module.scss'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/side bar/SideBar'

function Invoices_page() {
  const {invoicesPage} = styles;

  
  return (
    <>
      <div className={invoicesPage}>
        <aside>
          <SideBar />
        </aside>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default Invoices_page