import React from "react";

function InputField({ label, value, setValue }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default InputField;
