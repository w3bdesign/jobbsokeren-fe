import React from "react";

interface TextInputProps {
  id: string;
  name: string;
  autoComplete?: string;
  type: string;
  placeholder: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  autoComplete,
  type,
  placeholder,
  value,
  pattern,
  minLength,
  maxLength,
  onChange,
  required,
  label,
}) => {
  return (
    <div className="mt-6">
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <input
        id={id}
        name={name}
        autoComplete={autoComplete}
        type={type}
        placeholder={placeholder}
        value={value}
        pattern={pattern}
        onChange={onChange}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        className="block mt-2 w-full px-5 py-2.5 rounded-md ext-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-indigo-600/40 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
};

export default React.memo(TextInput);
