import React from 'react';

function Asset({ id, fieldName, onChange }) {
  const handleChange = (e) => {
    const value = parseFloat(e.target.value) || 0; // Default to 0 if NaN
    onChange(id, value);
  };

  return (
    <div className="my-2">
      <label htmlFor={id} className="block text-gray-700">{fieldName}</label>
      <input
        id={id}
        type="number"
        onChange={handleChange}
        className="border border-gray-300 rounded p-2 w-full"
      />
    </div>
  );
}

export default Asset;
