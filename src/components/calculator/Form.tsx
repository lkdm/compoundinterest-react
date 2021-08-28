import TextInput from './TextInput'
import DropDownInput from './DropDownInput'

interface Props {
  
}

const Form: React.FC<Props> = (props: Props) => {
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
          <DropDownInput label="Deposit frequency" />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <DropDownInput label="Compound frequency" />
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
