export type Frequency = "Annually" | "Monthly" | "Fortnightly" | "Weekly" | "Daily"

export interface Strategy {
  initialDeposit: number,
  regularDeposit: number,
  depositFrequency: Frequency,
  compoundFrequency: Frequency,
  numberOfYears: number,
  annualInterestRate: number
}