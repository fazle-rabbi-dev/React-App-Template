export const FormInput = ({
  field: { name, type, label, placeholder },
  register,
  errors
}) => {
  return (
    <div>
      <label className='inline-block text-lg mb-2' for="">{label}</label>
      <input
        {...register(name)}
        className="form-input"
        placeholder={placeholder || label}
        type={type}
      />
      {errors[name] && (
        <p className="error-message mt-2 text-sm">{errors[name].message}</p>
      )}
    </div>
  );
};
