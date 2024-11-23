function Input({field,placeholder,type,register}) {
  return (
    <div className="input-container">
      <input
        className="input-field"
        id={field}
        placeholder=" "
        required
        type={type ? type : ''}
        {...register(field, { required: true })}
      />
      <label htmlFor={field} className="input-label">
        {placeholder}
      </label>
    </div>
  );
}

export default Input;
