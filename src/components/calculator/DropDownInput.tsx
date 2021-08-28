import React from 'react'

interface Props {
  
}

const DropDownInput = (props: Props) => {
  return (
    <div>
      <label>
        Label
      </label>
      <select className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  )
}

export default DropDownInput
