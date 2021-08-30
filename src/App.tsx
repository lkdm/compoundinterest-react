import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import Form from './components/calculator/Form'
import {Strategy} from './store/types'

interface Props {
  strategy: Strategy
}

const defaultStrategy: Strategy = {
  initialDeposit: 0,
  regularDeposit: 0,
  depositFrequency: "Monthly",
  compoundFrequency: "Monthly",
  numberOfYears: 10,
  annualInterestRate: 5
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
    else // Else cast numbers as numbers
      // And restrict number to two decimal places.
      value = event.target.value.toString().split(".").map((el,i)=>i?el.split("").slice(0,2).join(""):el).join(".")

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

