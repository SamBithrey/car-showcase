"use client";

import React, { useState } from "react";
import { SearchManufacturer } from ".";

type Props = {};

const SearchBar = (props: Props) => {
  const [manufacturer, setManufacture] = useState("");
  const handleSearch = () => {};

  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacture}
        />
      </div>
    </form>
  );
};

export default SearchBar;
