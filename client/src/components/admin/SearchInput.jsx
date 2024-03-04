/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import search from "../../assets/search-icon.png";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="input-search">
      <img src={search} alt="" style={{ height: "10px" }} />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search by title,location,company,level,type etc..."
      />
    </div>
  );
};

export default SearchInput;
