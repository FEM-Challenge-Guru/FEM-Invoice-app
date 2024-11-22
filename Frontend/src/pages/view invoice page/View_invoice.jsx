import styles from './View_invoice.module.scss'

function View_invoice() {
  const { viewInvoicePage, goBackBtn, invoiceSettings, invStatus, 
          settingsBtns, editBtn, deleteBtn, markPaidBtn, invId,
          invoiceDetails, invNameAndDescrp, senderAddress, idSenderAddrWrapper,
          dateBilltoSendtoWrapper, sendtoWrapper, billtoWrapper,
          createdDueWrapper, itemsWrapper, amountDueWrapper, allItems
        } = styles;

  const invoiceStatus = 'pending';
  const invoiceID = 'RT3080';
  const invoiceDescription = 'Graphic design';
  const senderStreetAddress = '19 Union Terrace';
  const senderCity = 'London';
  const senderPostCode = 'E1 3EZ';
  const senderCountry = 'United Kingdom';

  const dateCreated = '18 Aug 2021';
  const dateDue = '19 sep 2021';

  const clientName = 'Alex Grim';
  const clientEmail = 'janeDoe@gmail.com';
  const clientStreetAddress = '84 Church Way';
  const clientCity = 'Bradford';
  const clientPostCode = 'BD1 9PB';
  const clientCountry = 'United Kingdom';
  const totalAmountDue = '$156.00';


  return (
    <>
      <div className={viewInvoicePage}>
        <div className={goBackBtn} onClick={() => history.back()}><img src="/assets/icon-arrow-left.svg" alt="left arrow icon" />Go back</div>

        <div className={invoiceSettings}>
          <div className={invStatus}>
            <span className='faint-text'>Status</span>
            <div className={invoiceStatus}><ion-icon name="ellipse"></ion-icon>{invoiceStatus}</div>
          </div>

          <div className={settingsBtns}>
            <button className={editBtn}>Edit</button>
            <button className={deleteBtn}>Delete</button>
            <button className={markPaidBtn}>Mark as Paid</button>
          </div>
        </div>

        <div className={invoiceDetails}>
          <div className={idSenderAddrWrapper}>
            <div className={invNameAndDescrp}>
              <h3 className={invId}><span className='faint-text'>#</span>{invoiceID}</h3>
              <p className="faint-text">{invoiceDescription}</p>
            </div>
            <div className={`faint-text ${senderAddress}`}>
              {senderStreetAddress}
              <br />
              {senderCity}
              <br />
              {senderPostCode}
              <br />
              {senderCountry}
            </div>
         </div>

          <div className={dateBilltoSendtoWrapper}>
            <div className={createdDueWrapper}>
              <div>
                <p className="faint-text">Invoice Date</p>
                <p className="bold mrgn-spc">{dateCreated}</p>
              </div>
              <div>
                <p className="faint-text">Payment Due</p>
                <p className="bold mrgn-spc">{dateDue}</p>
              </div>
            </div>

            <div className={billtoWrapper}>
              <p className="faint-text">Bill to</p>
              <p className="bold mrgn-spc">{clientName}</p>
              <p className="faint-text">
                {clientStreetAddress}
                <br />
                {clientCity}
                <br />
                {clientPostCode}
                <br />
                {clientCountry}
              </p>
            </div>
              
            <div className={sendtoWrapper}>
              <p className="faint-text">Sent to</p>
              <p className="bold mrgn-spc">{clientEmail}</p>
            </div>
          </div>

          <div className={itemsWrapper}>

            <div className={allItems}>
              <div className="faint-text">
                <p>Item</p>
                <p>Quantity</p>
                <p>Price</p>
                <p>Total</p>
              </div>
              <div className='bold'>
                <p>Logo Design</p>
                <p className='faint-text'>1</p>
                <p className='faint-text'>$156.00</p>
                <p>$156.00</p>
              </div>
              <div className='bold'>
                <p>Logo Design</p>
                <p className='faint-text'>1</p>
                <p className='faint-text'>$156.00</p>
                <p>$156.00</p>
              </div>
              <div className='bold'>
                <p>Logo Design</p>
                <p className='faint-text'>1</p>
                <p className='faint-text'>$156.00</p>
                <p>$156.00</p>
              </div>
            </div>

            <div className={amountDueWrapper}>
              <p>Amount Due</p>
              <p className="bold big">{totalAmountDue}</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default View_invoice