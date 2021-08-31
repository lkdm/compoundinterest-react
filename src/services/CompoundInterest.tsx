import { Frequency, Strategy, YearResult, Result } from '../store/types'
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
  const initialDeposit = strategy.initialDeposit/100
  const regularDeposit = strategy.regularDeposit/100
  const depositFrequency = strategy.depositFrequency
  const compoundFrequency = strategy.compoundFrequency // "Annually", "Monthly", ...
  const annualInterestRate: number = strategy.annualInterestRate // Annual interest rate

  // Determine the interest rate per compound
  const rate = ratePerCompound(annualInterestRate, compoundFrequency)/10000
  
  /*
   * Perform calculations per compound frequency
   */
  let results: Result = []

  let P: number = initialDeposit
  let I: number = 0
  let cumulativeDeposits: number = 0
  let cumulativeInterest: number = 0
  for (let n:number = 0; n < frequencyPerYear(compoundFrequency); n++) {
    // For each compound period

    // 1 - All the deposits added up
    // Deposits made this period
    const depositThisPeriod = sumDepositsForPeriod(regularDeposit, depositFrequency, compoundFrequency)
    

    // The principle is initial + cumulativeDeposits + cumulativeInterest
    const P = initialDeposit + cumulativeDeposits + cumulativeInterest

    // Calculate interest based on the rate
    const i: number = P * (1 + rate) - P

    // Save cumulative deposits and interest
    cumulativeDeposits += depositThisPeriod
    cumulativeInterest += i
    

    results.push({
      yearNumber: n+1,
      cumulativeRegularDeposits: cumulativeDeposits, // Principal less initial deposit
      cumulativeInterest: cumulativeInterest,
      cumulativeTotal: P + I
    })

    // Inital deposit
    // Cumulative regular deposits
    // Interest
    // Sub-total
  }

  return results
}