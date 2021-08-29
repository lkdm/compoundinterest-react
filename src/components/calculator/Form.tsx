import TextInput from './TextInput'
import DropDownInput from './DropDownInput'
import {Strategy, Frequency} from '../../store/types'
import { ChangeEventHandler } from 'react'

interface Props {
  handleSubmit: ChangeEventHandler<HTMLInputElement>,
  strategy: Strategy
}

const Form: React.FC<Props> = ({handleSubmit, strategy}) => {
  const frequency: Array<Frequency> = ["Annually", "Monthly", "Fortnightly", "Weekly", "Daily"]
  const depositFrequency = frequency
  const compoundFrequency = depositFrequency.slice(0, 2) // ["Annually", "Monthly"]

  return (
    <form id="compoundInterestForm">
      <div className="row">
        <div className="col">
          <TextInput label="Initial deposit" prepend="$" onSubmit={handleSubmit} />
        </div>
        <div className="col">
          <TextInput label="Regular deposit" prepend="$" onSubmit={handleSubmit} />
        </div>
        <div className="col">
          <DropDownInput label="Deposit frequency" options={depositFrequency} />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <DropDownInput label="Compound frequency" options={compoundFrequency} />
        </div>
        <div className="col">
          <TextInput label="Number of years" onSubmit={handleSubmit} />
        </div>
        <div className="col">
          <TextInput label="Annual interest rate" append="%" onSubmit={handleSubmit} />
        </div>
      </div>
      
    </form>
  )
}

export default Form
