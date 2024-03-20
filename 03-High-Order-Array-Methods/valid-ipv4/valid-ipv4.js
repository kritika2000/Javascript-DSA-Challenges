function validateIPv4(address) {
  const octet = address.split('.');
  if (octet.length !== 4) return false;
  return octet.every((oc) => {
    if ((+oc > 0 && +oc <= 99 && oc.charAt(0) === '0') || +oc > 255)
      return false;
    return true;
  });
}

module.exports = validateIPv4;
