function phoneNumberDirectory(phoneNumbers) {
  const map = new Map();
  phoneNumbers.forEach((phoneNumber) => {
    const [name, phone] = phoneNumber.split(':');
    map.set(name, phone);
  });
  return map;
}

module.exports = phoneNumberDirectory;
