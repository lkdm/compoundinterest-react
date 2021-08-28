import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import Form from './components/calculator/Form'

interface Props {
  
}

const App = (props: Props) => {
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
            

        </div>
      </div>
    </div>
  )
}

export default App

