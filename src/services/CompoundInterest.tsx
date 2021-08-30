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

export const calculateCompoundInterest = (strategy: Strategy) => {
  const P = strategy.initialDeposit
  const i = 1 + strategy.annualInterestRate/100

  return P*i
}