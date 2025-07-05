import type { ChangeEvent, FC } from "react";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const UserInput: FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  className = "",
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`
        border border-blue-300
        rounded-4xl
        mr-1 px-3 py-1
        focus:outline-none
        focus:ring-2 focus:ring-blue-300 focus:ring-offset-0 focus:ring-inset
        transition duration-150 ease-in-out
        ${className}
      `}
    />
  );
};

export default UserInput;
