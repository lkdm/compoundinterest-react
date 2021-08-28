import React from 'react'

interface Props {
  label: string
}

const DropDownInput: React.FC<Props> = ({label}) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <select className="form-select" aria-label="{label}">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  )
}

export default DropDownInput
