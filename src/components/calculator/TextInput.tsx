import React from 'react'

interface Props {
  
}

const TextInput = (props: Props) => {
  return (
    <div>
      <label>
        Label
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
      </div>
    </div>
  )
}

export default TextInput
