const FormControl = ({ type, name, placeholder, value, onChange, required, className, error }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={className}
      />

      {error && (
        <div className="text-red-600 text-sm bg-red-100 p-2 rounded">
          {error}
        </div>
      )}
    </div>
  );
};

export default FormControl;
