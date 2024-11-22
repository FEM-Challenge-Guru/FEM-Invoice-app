import styles from './Overview.module.scss';
import Invoice_preview_card from '../../components/invoice preview card/Invoice_preview_card';
import { useRef, useState } from 'react';


function Overview() {
  const {overviewPage, pageNameAndInfoWrapper, filterBoxAndNewBtnWrapper, filter,
         filterBox, newInvoiceBtn, statusFilterDropdown, invoicesPreviewContainer,
         noCreatedInvoice, dropdown
  } = styles;
  const [createdInvoices, setCreatedInvoices] = useState([1, 2, 3]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const checkbx = useRef([]);

  const handleDropdown = () => {
    setIsDropdownOpen(curState => !curState);
  }

  // Check which checkbox is clicked
  const check = (e) => {
    if (checkbx.current[0].contains(e.target)) {
      setCheckbox1(curState => !curState);
    } else if (checkbx.current[1].contains(e.target)) {
      setCheckbox2(curState => !curState);
    } else if (checkbx.current[2].contains(e.target)) {
      setCheckbox3(curState => !curState);
    }
  }

  return (
    <>
      <div className={overviewPage}>
        <header>
          <div className={pageNameAndInfoWrapper}>
            <h1>Invoices</h1>
            <p className='faint-text'>
              { createdInvoices.length > 0 ?
                  `There are ${createdInvoices.length} total invoices`
                :
                  'No invoices'
              }
            </p>
          </div>

          <div className={filterBoxAndNewBtnWrapper}>
            <div className={filterBox}>
              <div className={filter} onClick={handleDropdown}>Filter by status <img src={isDropdownOpen ? "/assets/icon-arrow-up.svg" : "/assets/icon-arrow-down.svg" } alt="arrow down icon" /></div>

              <ul className={`${statusFilterDropdown} ${isDropdownOpen ? dropdown : ''}`} onClick={(e) => check(e)}>
                <li ref={(el) => checkbx.current[0] = el}> 
                  <div role="checkbox" className={`checkbox ${checkbox1 ? 'checked' : ''}`} tabIndex="0" aria-checked={checkbox1}>
                    { checkbox1 && <img src="/assets/icon-check.svg" alt="Check icon" />}
                  </div>
                  <span>Draft</span>
                </li>
                <li ref={(el) => checkbx.current[1] = el}> 
                  <div role="checkbox" className={`checkbox ${checkbox2 ? 'checked' : ''}`} tabIndex="0" aria-checked={checkbox2}>
                    { checkbox2 && <img src="/assets/icon-check.svg" alt="Check icon" />}
                  </div>
                  <span>Pending</span>
                </li>
                <li ref={(el) => checkbx.current[2] = el}> 
                  <div role="checkbox" className={`checkbox ${checkbox3 ? 'checked' : ''}`} tabIndex="0" aria-checked={checkbox3}>
                    { checkbox3 && <img src="/assets/icon-check.svg" alt="Check icon" />}
                  </div>
                  <span>Paid</span>
                </li>
              </ul>
            </div>
            <button className={newInvoiceBtn}> <img src="/assets/icon-plus.svg" alt="plus icon" /> New Invoice</button>
          </div>
        </header>

        <div className={invoicesPreviewContainer}>
          { createdInvoices.length > 0 ?
          <>
              <Invoice_preview_card 
                invoiceUID='RT3080'
                invoiceDueDate='Due 19 Aug 2021'
                clientName='Jensen Huang'
                invoicedAmount='£ 1,800.90'
                invoiceStatus='pending'
              />
              <Invoice_preview_card 
                invoiceUID='RT3080'
                invoiceDueDate='Due 19 Aug 2021'
                clientName='Jensen Huang'
                invoicedAmount='£ 8,300'
                invoiceStatus='paid'
              />
              <Invoice_preview_card 
                invoiceUID='RT3080'
                invoiceDueDate='Due 19 Aug 2021'
                clientName='Jensen Huang'
                invoicedAmount='£ 1,800.90'
                invoiceStatus='draft'
              />
              <Invoice_preview_card 
                invoiceUID='RT3080'
                invoiceDueDate='Due 19 Aug 2021'
                clientName='Jensen Huang'
                invoicedAmount='£ 6,900'
                invoiceStatus='paid'
              />
              <Invoice_preview_card 
                invoiceUID='RT3080'
                invoiceDueDate='Due 19 Aug 2021'
                clientName='Jensen Huang'
                invoicedAmount='£ 800.90'
                invoiceStatus='due'
              />
              <Invoice_preview_card 
                invoiceUID='RT3080'
                invoiceDueDate='Due 19 Aug 2021'
                clientName='Jensen Huang'
                invoicedAmount='£ 1,800.90'
                invoiceStatus='draft'
              />

               <Invoice_preview_card 
                invoiceUID='RT3080'
                invoiceDueDate='Due 19 Aug 2021'
                clientName='Jensen Huang'
                invoicedAmount='£ 1,800.90'
                invoiceStatus='pending'
              />
          </>
            :
              <div className={noCreatedInvoice}>
                <img src="/assets/illustration-empty.svg" alt="Empty illustration" />
                <h2>There is nothing here</h2>
                <p className='faint-text'>Create a new invoice by clicking the <br /> <strong>New Invoice</strong> button and get started</p>
              </div>
          }
        </div>
      </div>
    </>
  )
}

export default Overview