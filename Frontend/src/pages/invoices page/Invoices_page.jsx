import React from 'react'
import styles from './Invoices_page.module.scss'

function Invoices_page() {
  const {invoicesPage} = styles;

  
  return (
    <>
      <div className={invoicesPage}>This is the invoices page</div>
    </>
  )
}

export default Invoices_page