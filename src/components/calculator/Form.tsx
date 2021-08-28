import TextInput from './TextInput'
import DropDownInput from './DropDownInput'

interface Props {
  
}

const Form: React.FC<Props> = (props: Props) => {
  return (
    <form>
      <div className="row">
        <div className="col">
          <TextInput label="Initial deposit" />
        </div>
        <div className="col">
          <TextInput label="Regular deposit" />
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
          <TextInput label="Number of years (max 50)" />
        </div>
        <div className="col">
          <TextInput label="Annual interest rate (max 20%)" />
        </div>
      </div>
      
    </form>
  )
}

export default Form
