import React from "react";

const MySelect = ({ option, defaultValue, value, onChange }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="value1">
        {defaultValue}
      </option>
      {option.map((option) => {
        return (
          <option value={option.value} key={option.id}>
            {option.name}
          </option>
        );
      })}
    </select>
  );
};

export default MySelect;
