import styles from './invoice_preview_card.module.scss';


function invoice_preview_card() {
  const { invoicePreviewCard } = styles;

  
  return (
    <>
      <div className={invoicePreviewCard}></div>
    </>
  )
}

export default invoice_preview_card