"use client";

import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

type SearchBarProps = {};

type SearchButtonProps = {
  otherClasses: string;
};

const SearchButton = ({ otherClasses }: SearchButtonProps) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = (props: SearchBarProps) => {
  const [manufacturer, setManufacture] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please fill in search bar");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.replace(newPathName, { scroll: false });
  };

  return (
    <form onSubmit={handleSearch} className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacture}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-5 h-5 ml-4"
        />
        <input
          type="text"
          className="searchbar__input"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
