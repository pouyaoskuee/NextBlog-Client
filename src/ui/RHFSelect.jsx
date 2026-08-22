function RHFSelect({ label, name, register, options, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-secondary-700">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <select defaultValue={''} {...register(name)} id={name} className="textField__input">
          <option disabled  value={''}>یک گزینه را انتخاب کنید</option>
        {options.map((option) => (
          <option className="bg-red-300" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default RHFSelect;
