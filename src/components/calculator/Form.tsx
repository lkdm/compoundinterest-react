import TextInput from './TextInput'
import DropDownInput from './DropDownInput'
import {Strategy, Frequency} from '../../types/types'
import { ChangeEventHandler } from 'react'

interface Props {
  handleSubmit: ChangeEventHandler<HTMLInputElement | HTMLSelectElement>,
  strategy: Strategy
}

const Form: React.FC<Props> = ({handleSubmit, strategy}) => {
  const frequency: Array<Frequency> = ["Annually", "Monthly", "Fortnightly", "Weekly", "Daily"]
  const depositFrequency = frequency
  const compoundFrequency = depositFrequency.slice(0, 2) // ["Annually", "Monthly"]

  return (
    <form id="compoundInterestForm">
      <div className="row">
        <div className="col-md">
          <TextInput name="initialDeposit" label="Initial deposit" prepend="$" onSubmit={handleSubmit} value={(strategy.initialDeposit/100).toFixed(2)} />
        </div>
        <div className="col-md">
          <TextInput name="regularDeposit" label="Regular deposit" prepend="$" onSubmit={handleSubmit} value={(strategy.regularDeposit/100).toFixed(2)} />
        </div>
        <div className="col-md">
          <DropDownInput name="depositFrequency" label="Deposit frequency" options={depositFrequency} handleSubmit={handleSubmit} />
        </div>
      </div>

      <div className="row">
        <div className="col-md">
          <DropDownInput name="compoundFrequency" label="Compound frequency" options={compoundFrequency} handleSubmit={handleSubmit} />
        </div>
        <div className="col-md">
          <TextInput name="numberOfYears" label="Number of years" onSubmit={handleSubmit} value={strategy.numberOfYears} append="years" />
        </div>
        <div className="col-md">
          <TextInput name="annualInterestRate" label="Annual interest rate" append="%" onSubmit={handleSubmit} value={(strategy.annualInterestRate/100).toFixed(2)} />
        </div>
      </div>
      
    </form>
  )
}

export default Form
