/*
  InputCleaners
    Accepts raw input strings from the user 
      - Disallows alpha & special characters
      - Casts raw string into a number
    Specifies upper and lower bounds for different formats

*/

export const cleanNumber = (rawInput: string, min?: number, max?: number): number => {
  /* Accept raw string and cast as number, with optional max and min bounds */

  // Remove letters and special character (excepting decimal)
  const cleanedInput: string = rawInput.replace(/[^0-9]/g, "")

  // Cast result to number
  let result: number = Number(cleanedInput)

  if (min && result < min)
    result = min // Min
  if (max && result > max)
    result = max // Max

  return result
}

// Money min of 0 (stored in .01s/cents)
export const cleanMoney = (rawInput: string): number => cleanNumber(rawInput, 0)
// Percent 0-100% (stored in .01s)
export const cleanPercent = (rawInput: string): number => cleanNumber(rawInput, 0, 10000)
// Years 0-30
export const cleanYears = (rawInput: string): number => cleanNumber(rawInput, 0, 30)