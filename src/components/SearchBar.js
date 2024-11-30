import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border rounded"
      placeholder="Search by name or email"
    />
  );
};

export default SearchBar;
