import React from 'react'

interface Props {
  label: string,
  name: string,
  options: Array<String>
}

const DropDownInput: React.FC<Props> = ({label, name, options}) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <select className="form-select" name={name} aria-label="{label}">
        {options.map((option) => {return (
          <option>{option}</option>
        )})}
      </select>
    </div>
  )
}

export default DropDownInput
