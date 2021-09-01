export type Frequency = "Annually" | "Monthly" | "Fortnightly" | "Weekly" | "Daily"

export interface Strategy {
  initialDeposit: number,
  regularDeposit: number,
  depositFrequency: Frequency,
  compoundFrequency: Frequency,
  numberOfYears: number,
  annualInterestRate: number
}

export interface YearResult {
  yearNumber: number,
  initialDeposit: number,
  cumulativeRegularDeposits: number,
  cumulativeInterest: number,
  cumulativeTotal: number
}

export type Result = Array<YearResult> | undefined