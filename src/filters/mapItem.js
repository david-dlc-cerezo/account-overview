export default function mapItem (value) {
  const MAP = {
    AUTODEPOSIT: 'Regular deposit',
    CHARGE: 'Fee'
  }

  return MAP[value] || value
}
