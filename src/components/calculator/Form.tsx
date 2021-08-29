import TextInput from './TextInput'
import DropDownInput from './DropDownInput'
import {Strategy, Frequency} from '../../store/types'

interface Props {
  
}

const Form: React.FC<Props> = (props: Props) => {
  const frequency: Array<Frequency> = ["Annually", "Monthly", "Fortnightly", "Weekly", "Daily"]
  const depositFrequency = frequency
  const compoundFrequency = depositFrequency.slice(0, 2) // ["Annually", "Monthly"]

  return (
    <form id="compoundInterestForm">
      <div className="row">
        <div className="col">
          <TextInput label="Initial deposit" prepend="$" />
        </div>
        <div className="col">
          <TextInput label="Regular deposit" prepend="$" />
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
          <TextInput label="Number of years" />
        </div>
        <div className="col">
          <TextInput label="Annual interest rate" append="%" />
        </div>
      </div>
      
    </form>
  )
}

export default Form
