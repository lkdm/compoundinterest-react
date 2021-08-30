import {Strategy} from '../store/types'
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
const ratePerCompound = (ratePerAnnum: number, compoundsPerYear: number): number => ratePerAnnum/compoundsPerYear
const simpleInterest = (r: number, p: number): number => p*r


export const calculateCompoundInterest = (strategy: Strategy) => {
  // R = Rate per annum
  const R: number = strategy.annualInterestRate/10000

  let r: number // Rate per compound
  let F: number // Compound frequency
  if (strategy.compoundFrequency === "Monthly") {
    r = ratePerCompound(R, 12)
    F = 12*strategy.numberOfYears // 12 compounds per year
  } else { // Per annum
    r = R
    F = strategy.numberOfYears
  }

  // Principal
  let P = strategy.initialDeposit

  for (let n:number = 0; n< F; n++) {
    P = P * (1 + r)
  }

  return P
}