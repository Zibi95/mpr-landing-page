const Input = ({ type, name, label, id, rows }) => {
  return (
    <div className="relative w-full">
      {rows ? (
        <textarea
          className="w-full p-1 text-gray-900 placeholder-transparent border-2 rounded-lg focus:outline-none peer focus:border-rose-600"
          rows={rows}
          type={type}
          name={name}
          placeholder={label}
          id={id}
        />
      ) : (
        <input
          className="w-full h-12 p-1 text-gray-900 placeholder-transparent border-2 rounded-lg focus:outline-none peer focus:border-rose-600"
          type={type}
          name={name}
          placeholder={label}
          id={id}
        />
      )}
      <label
        htmlFor={id}
        className="absolute text-white transition-all select-none -top-6 left-1 peer-focus:text-white peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-placeholder-shown:text-lg peer-focus:text-lg ">
        {label}
      </label>
    </div>
  );
};

export default Input;
