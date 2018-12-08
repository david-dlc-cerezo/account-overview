export default function formatHour (value) {
  const date = new Date(value)
  return date.toLocaleTimeString()
}
