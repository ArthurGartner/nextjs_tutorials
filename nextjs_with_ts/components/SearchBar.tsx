"use client";
import { useState } from "react";
import React from "react";
import { SearchManufacturer } from ".";
const handleSearch = () => {};

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
