import React from "react";

const InputBox = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="text-black text-lg font-medium mb-1">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-[712px] h-[97px] text-[20px] font-medium border border-gray-400 rounded-lg px-4 bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputBox;
