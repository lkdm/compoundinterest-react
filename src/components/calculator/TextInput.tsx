

interface Props {
  label: string,
  prepend?: string,
  append?: string
}

const TextInput: React.FC<Props> = ({label, prepend, append}) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <div className="input-group mb-3">
        {prepend && <span className="input-group-text">{prepend}</span>}
        <input type="text" className="form-control" aria-label="{label}" />
        {append && <span className="input-group-text">{append}</span>}
      </div>
    </div>
  )
}

export default TextInput
