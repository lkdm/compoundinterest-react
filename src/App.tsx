import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import Form from './components/calculator/Form'

type Frequency = "Annually" | "Monthly" | "Fortnightly" | "Weekly" | "Daily"

interface Strategy {
  initialDeposit: number,
  regularDeposit: number,
  depositFrequency: Frequency,
  compoundFrequency: Frequency,
  numberOfYears: number,
  annualInterestRate: number
}

interface Props {
  strategy: Strategy
}

const App = () => {
  const [strategy, setStrategy] = useState({})

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
            <Form />
          
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

