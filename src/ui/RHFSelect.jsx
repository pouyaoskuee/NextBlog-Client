function RHFSelect({ label, name, register, options = [], isRequired, errors }) {
  const error = errors?.[name];
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {isRequired && <span className="text-error">*</span>}
      </label>
      <select {...register(name)} id={name} className="textField__input">
          <option disabled  value={''}>یک گزینه را انتخاب کنید</option>
        {options.map((option) => (
          <option className="bg-red-300" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="mt-2 block text-xs text-red-600">{error.message}</span>}
    </div>
  );
}
export default RHFSelect;
