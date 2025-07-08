import type { FC } from "react";
import type { InputProps } from "../types";

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
        chat-input
        ${className}
      `}
    />
  );
};

export default UserInput;
