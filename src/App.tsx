import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import Form from './components/calculator/Form'
import {Strategy, Result} from './types/types'
import {cleanMoney, cleanPercent, cleanYears} from './services/InputCleaners'
import { calculateCompoundInterest } from './services/CompoundInterest'
import ResultChart from './components/result/ResultChart'
import ResultsText from './components/result/ResultsText'

const defaultStrategy: Strategy = {
  initialDeposit: 0, // in cents
  regularDeposit: 2000, // in cents
  depositFrequency: "Annually",
  compoundFrequency: "Annually",
  numberOfYears: 10,
  annualInterestRate: 500
}

const App = () => {
  const [strategy, setStrategy] = useState<Strategy>(defaultStrategy)
  const [result, setResult] = useState<Result>()

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
    // Perform the calculations
    const result = calculateCompoundInterest(strategy)
    // Refine the result for the chart

    // Set the result state, to update the chart
    setResult(result)
    
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
      <hr />
      <div className="row justify-content-center">
        <div className="col-12">
            <h2>Your strategy</h2>
            <Form handleSubmit={handleSubmit} strategy={strategy} />
          
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12">
            <h2>Results</h2>
            {(strategy.numberOfYears > 0) ? <ResultChart data={result} initialDeposit={strategy.initialDeposit} /> : "" }
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12">
            <h3>Your strategy</h3>
            {(strategy.numberOfYears > 0) ? <ResultsText data={result} initialDeposit={strategy.initialDeposit} /> : "" }
        </div>
      </div>
      <hr />
      <div className="row justify-content-center">
        <div className="col-12">
            <h2>About</h2>
            <p>
              This is a compound interest calculator inspired <a href="https://moneysmart.gov.au/budgeting/compound-interest-calculator" target="0">a similar Javascript app</a> made for the Australian Government's Money Smart website. It is made with ReactJS, Typescript, and Bootstrap CSS.
            </p>
            
            <div className="row" id="footer">
              <div className="col-6">
                <a className="btn btn-success" href="https://github.com/lkdm/react-compound-interest-calculator" role="button" target="0">👀 &nbsp; View the sourcecode &nbsp;👀</a>
              </div>
              <div className="col-6">
                <a className="btn btn-warning" href="https://github.com/lkdm" role="button" target="0">🧞 &nbsp; Meet the developer &nbsp;🧞</a>
              </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default App

