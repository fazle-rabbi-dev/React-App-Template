export const FormInput = ({
  field: { name, type, label, placeholder },
  register,
  errors
}) => {
  return (
    <div>
      <label className='inline-block text-lg mb-2' htmlFor="input">{label}</label>
      <input
        {...register(name)}
        className="form-input"
        placeholder={placeholder || label}
        type={type}
        id="input"
      />
      {errors[name] && (
        <p className="error-message mt-2 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};
