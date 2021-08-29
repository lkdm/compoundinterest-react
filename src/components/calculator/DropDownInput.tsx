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
        <option value="1">Annually</option>
        <option value="2" selected>Monthly</option>
        <option value="3">Fortnightly</option>
        <option value="3">Weekly</option>
        <option value="3">Daily</option>
      </select>
    </div>
  )
}

export default DropDownInput
