export default function capitalizeFirstLetter (value) {
  const _capitalizeFirstLetter = (word) =>
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

  if (value && typeof value === 'string') {
    return value.split(' ')
      .map(_capitalizeFirstLetter)
      .join(' ')
  } else {
    return value
  }
}
