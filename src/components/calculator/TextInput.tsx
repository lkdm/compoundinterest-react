

interface Props {
  label: string
}

const TextInput: React.FC<Props> = ({label}) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input type="text" className="form-control" aria-label="{label}" />
      </div>
    </div>
  )
}

export default TextInput
