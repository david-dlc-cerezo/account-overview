export default function formatCurrency (value) {
  const amount = parseFloat(value)
  return amount.toFixed(2)
}
