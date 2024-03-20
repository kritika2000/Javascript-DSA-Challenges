function validateEmail(email) {
  /*const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegEx.test(email);*/
  if (!email.includes('@') || !email.includes('.')) return false;
  const [localPart, domain] = email.split('@');
  return localPart && domain ? true : false;
}

module.exports = validateEmail;
