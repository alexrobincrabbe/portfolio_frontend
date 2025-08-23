interface InputProps  {
  value: string;
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e:React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

function UserInput (props:InputProps) {
     const {value, onChange, onKeyDown, placeholder = "", className = ""} = props
  return (
    <input
      type="text"
      value={value}
      onKeyDown={onKeyDown}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        chat-input
        ${className}
      `}
    />
  );
};

export default UserInput;
