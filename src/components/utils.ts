export function removeNonDigitValues(value: string): string {
  return value ? value.replace(/[^\d]/g, '').trim() : value
}
