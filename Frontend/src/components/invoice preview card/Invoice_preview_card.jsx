import styles from './Invoice_preview_card.module.scss';


function Invoice_preview_card(props) {
  const { invoiceUID, invoiceDueDate, clientName, invoicedAmount, invoiceStatus } = props;
  const { invoicePreviewCard, invoiceID, invoicedAmt } = styles;

  
  return (
    <>
      <div className={invoicePreviewCard}>
        <p className={`faint-text ${invoiceID}`}>#<span>{invoiceUID}</span></p>
        <p className='faint-text'>{invoiceDueDate}</p>
        <p className='faint-text'>{clientName}</p>
        <p className={invoicedAmt}>{invoicedAmount}</p>
        <div>
          <div className={invoiceStatus}><ion-icon name="ellipse"></ion-icon>{invoiceStatus}</div>
          <img src="/assets/icon-arrow-right.svg" alt="Right arrow icon" />
        </div>
      </div>
    </>
  )
}

export default Invoice_preview_card