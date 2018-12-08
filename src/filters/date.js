export default function formatDate (value) {
  const date = new Date(value)
  return date.toLocaleDateString()
}
