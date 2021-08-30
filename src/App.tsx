import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import Form from './components/calculator/Form'
import {Strategy} from './store/types'

interface Props {
  strategy: Strategy
}

const defaultStrategy: Strategy = {
  initialDeposit: 0, // in cents
  regularDeposit: 0, // in cents
  depositFrequency: "Monthly",
  compoundFrequency: "Monthly",
  numberOfYears: 10,
  annualInterestRate: 5
}

const cleanNumber = (rawInput: string): number => {
  /*
    Accepts a string and casts it into a number
    - Disallows alpha & special characters
    - Casts the raw string into a number
  */

  // Remove letters and special character (excepting decimal)
  const cleanedInput: string = rawInput.replace(/[^0-9]/g, "")

  // Cast result to number
  const result: number = Number(cleanedInput)

  return result
}
const cleanMoney = cleanNumber
const cleanPercent = (rawInput: string): number => {
  /*
    Accepts a string and returns a valid percent number
    - Cast the raw input as a number
    - Disallow percentage > 100%
    - Disallow percentage < 0%
    - Return percentage *100
  */

  const cleaned: number = cleanNumber(rawInput) // Clean
  let result: number = cleaned
  
  if (cleaned > 10000)
    result = 10000 // Max: 100%
  if (cleaned < 0)
    result = 0 // Min: 0%
    
  return result
}
const cleanYears = (rawInput: string): number => {
  /*
    Accepts a string and returns a valid percent number
    - Cast the raw input as a number
    - Disallow years > 30
    - Disallow years < 0
    - Return years
  */
  
  const cleaned: number = cleanNumber(rawInput) // Clean
  let result: number = cleaned

  if (cleaned > 30)
    result = 30 // Max 30
  if (cleaned < 0)
    result = 0
  
  return result
}

const App = () => {
  const [strategy, setStrategy] = useState<Strategy>(defaultStrategy)

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    // Handles a submit event each time the user changes something in the form

    const name = event.target.name // Form field name

    // Cast frequency as string
    let value: string | number
    if (name === "depositFrequency" || name === "compoundFrequency")
      value = event.target.value
    else if (name === "regularDeposit" || name === "initialDeposit")
      value = cleanMoney(event.target.value)
    else if (name === "annualInterestRate")
      value = cleanPercent(event.target.value)
    else // Number of years
      value = cleanYears(event.target.value)
      

    setStrategy({ // Update state based on form field name and its new value
      ...strategy,
      [name]: value
    })
   
  }

  useEffect(() => {
    // Upon state change
    console.log(strategy)
  }, [strategy])

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h1>Compound interest calculator</h1>
          <p>
            This <mark>compound interest</mark> calculator helps you work out:
            <ul>
              <li>the amount you should save</li>
              <li>how compound interest will affect your savings</li>
              <li>saving now is better than saving later</li>
              <li>how to calculate compound interest</li>
            </ul>
            </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
            <h2>Your strategy</h2>
            <Form handleSubmit={handleSubmit} strategy={strategy} />
          
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
            <h2>Results</h2>
            
          
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12">
            <h2>About</h2>
            
            <h3>Technologies used</h3>

            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>ReactJS</li>
              <li>Redux</li>
              <li>Bootstrap CSS</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default App

