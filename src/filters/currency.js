export default function formatCurrency (value, currencyCode) {
  const amount = parseFloat(value)
  let options = {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }
  if (currencyCode) {
    options = {
      style: 'currency',
      currency: currencyCode
    }
  }
  return amount.toLocaleString('en-UK', options)
}
