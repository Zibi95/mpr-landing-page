const Input = ({ type, name, label, id, rows }) => {
  return (
    <div className="relative w-full">
      {rows ? (
        <textarea
          className="w-full p-1 text-gray-900 placeholder-transparent border-2 rounded-lg bg-slate-200 focus:outline-none peer focus:border-[#780E63]"
          rows={rows}
          type={type}
          name={name}
          placeholder={label}
          id={id}
          required
        />
      ) : (
        <input
          className="w-full h-12 p-1 text-gray-900 placeholder-transparent border-2 rounded-lg bg-slate-200 focus:outline-none peer focus:border-[#780E63]"
          type={type}
          name={name}
          placeholder={label}
          id={id}
          required
        />
      )}
      <label
        htmlFor={id}
        className="absolute text-white pl-2 transition-all select-none -top-6 left-1 peer-focus:text-white peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-placeholder-shown:text-lg peer-focus:text-lg ">
        {label}
      </label>
    </div>
  );
};

export default Input;
