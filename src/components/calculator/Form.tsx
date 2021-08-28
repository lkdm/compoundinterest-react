import TextInput from './TextInput'
import DropDownInput from './DropDownInput'

interface Props {
  
}

const Form = (props: Props) => {
  return (
    <form>
      <div className="row">
        <div className="col">
          <TextInput />
        </div>
        <div className="col">
          <TextInput />
        </div>
        <div className="col">
          <DropDownInput />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <DropDownInput />
        </div>
        <div className="col">
          <TextInput />
        </div>
        <div className="col">
          <TextInput />
        </div>
      </div>
      
    </form>
  )
}

export default Form
