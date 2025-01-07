// Input.tsx
import React from "react";

interface InputProps {
  field: string;
  placeholder: string;
  type: string;
  register: any; // Ajuste o tipo conforme necessário (ou use o tipo apropriado do react-hook-form)
}

function Input({ field, placeholder, type, register }: InputProps) {
  return (
    <div className="input-container">
      <input
        className="input-field"
        id={field}
        placeholder=" "
        {...register(field, { required: true })}
        type={type}
      />
      <label htmlFor={field} className="input-label">
        {placeholder}
      </label>
    </div>
  );
}

export default Input;
