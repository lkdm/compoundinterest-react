import React from 'react'

interface Props {
  label: string,
  name: string,
  options: Array<String>,
  handleSubmit: React.ChangeEventHandler<HTMLSelectElement>
}

const DropDownInput: React.FC<Props> = ({label, name, options, handleSubmit}) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <select className="form-select" name={name} aria-label="{label}" onChange={handleSubmit}>
        {options.map((option) => {return (
          <option>{option}</option>
        )})}
      </select>
    </div>
  )
}

export default DropDownInput
