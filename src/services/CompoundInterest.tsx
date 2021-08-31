import { Frequency, Strategy, YearResult } from '../store/types'
/*
Calculate Compound Interest

*/

/*
  initialDeposit: number,
  regularDeposit: number,
  depositFrequency: Frequency,
  compoundFrequency: Frequency,
  numberOfYears: number,
  annualInterestRate: number
*/

// Find new principal each compound:
// newPrincipal = currentPrincipal * (1 + r)
// Find interest rate per compound (where f is compound)
// r/f

// Calculate interest rate for each compound, given annual rate and compounds/year
const ratePerCompound = (annualInterestRate: number, compoundFrequency: Frequency): number => annualInterestRate/frequencyPerYear(compoundFrequency)

const sumDepositsForPeriod = (amount: number, depositFrequency: Frequency, compoundFrequency: Frequency): number => {
  /*
   * Calculate the sum of deposits made per compound period
   * Given: Deposit amount, deposits per year, and compounds per year
   */
  if (compoundFrequency == "Monthly")
    return amount * frequencyPerYear(depositFrequency) / 12 // <-----
  // Yearly
  return amount * frequencyPerYear(depositFrequency)
}

const frequencyPerYear = (frequency: Frequency): number => {
  /*
   * Convert a frequency string into a _number_ of times per year
   */
  enum convertFrequencyStringToNumber {
    Annually = 1,
    Monthly = 12,
    Fortnightly = 26.0714,
    Weekly = 52.1429,
    Daily = 365,
  }
  return convertFrequencyStringToNumber[frequency]
}



export const calculateCompoundInterest = (strategy: Strategy) => {

  // Definitions
  const initialDeposit = strategy.initialDeposit
  const depositFrequency = strategy.depositFrequency
  const compoundFrequency = strategy.compoundFrequency // "Annually", "Monthly", ...
  const annualInterestRate: number = strategy.annualInterestRate // Annual interest rate

  // Determine the interest rate per compound
  const rate = ratePerCompound(annualInterestRate, compoundFrequency)/10000
  
  // Goes inside FOR LOOP
  // sumDepositsForPeriod(initialDeposit, depositFrequency, compoundFrequency) // Add the deposits for period

  /*
   * Perform calculations per compound frequency
   */

  let results: Array<YearResult> = []

  let P: number = initialDeposit
  let I: number = 0
  for (let n:number = 0; n < frequencyPerYear(compoundFrequency); n++) {
    // For each compound period

    // SUM deposits made during period, and add to (P)rincipal
    P = P + sumDepositsForPeriod(initialDeposit, depositFrequency, compoundFrequency)

    // Calculate interest based on the rate
    const i: number = P * (1 + rate) - P
    I = I+i // Cumulative interest
    
    // Add the interest to the principal
    P = P + I

    results.push({
      yearNumber: n+1,
      cumulativeRegularDeposits: P-initialDeposit, // Principal less initial deposit
      cumulativeInterest: I,
      cumulativeTotal: P
    })
  }

  return results
}