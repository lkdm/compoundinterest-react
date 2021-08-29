import React from 'react'

interface Props {
  label: string
  options: Array<String>
}

const DropDownInput: React.FC<Props> = ({label, options}) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <select className="form-select" aria-label="{label}">
        {options.map((option) => {return (
          <option>{option}</option>
        )})}
      </select>
    </div>
  )
}

export default DropDownInput
