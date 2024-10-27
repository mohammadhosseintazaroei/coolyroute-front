export function validatePhoneNumber(phoneNumber: string) {
  return phoneNumber?.length === 11 && !!phoneNumber?.startsWith("09");
}
