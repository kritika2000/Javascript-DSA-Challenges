function formatPhoneNumber(numbers) {
  /*
  const part1 = numbers.slice(0, 3).join('');
  const part2 = numbers.slice(3, 6).join('');
  const part3 = numbers.slice(6).join('');
  return `(${part1}) ${part2}-${part3}`;
  */
  const formattedString = numbers.join('');
  return `(${formattedString.substring(0, 3)}) ${formattedString.substring(
    3,
    6
  )}-${formattedString.substring(6)}`;
}

module.exports = formatPhoneNumber;
