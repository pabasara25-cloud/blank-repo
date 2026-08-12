function capitalise(string) {
  return string
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function truncate(string, length) {
  if (string.length <= length) return string;
  return string.slice(0, length) + '...';
}

function camelCase(string) {
  return string
    .toLowerCase()
    .split(/[\s_-]+/)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}

function reverse(string) {
  return string.split('').reverse().join('');
}

function isPalindrome(string) {
  const cleaned = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

export { capitalise, truncate, camelCase, reverse, isPalindrome };