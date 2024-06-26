import React from "react";

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        className=" outline-none border-b-2 border-redR2R py-1 lg:w-[500px] "
        type={type}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
