export const handlePasswordStrength = (inputEl) => {
  const hasLower = /[a-z]/.test(inputEl);
  const hasUpper = /[A-Z]/.test(inputEl);
  const hasDigit = /\d/.test(inputEl);
  const hasSpecialChar = /[@$!%*?&]/.test(inputEl);
  const minLength = inputEl.length >= 8;

  // Check conditions in the specified order
  if (hasLower && !hasUpper && !hasDigit && !hasSpecialChar && !minLength) {
    return 'Very Weak';
  }
  if (hasLower && hasUpper && !hasDigit && !hasSpecialChar && !minLength) {
    return 'Weak';
  }
  if (hasLower && hasUpper && hasDigit && !hasSpecialChar && !minLength) {
    return 'POOR';
  }
  if (hasLower && hasUpper && hasDigit && !hasSpecialChar && minLength) {
    return 'Strong';
  }
  if (hasLower && hasUpper && hasDigit && hasSpecialChar && minLength) {
    return 'Very Strong';
  }

  return 'Very Weak';
}