"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories, products } from "@/en/shared/constant/constants";

// ICONS
import MagnifyingGlassIcon from "@/shared/icon/svg/magnifying-glass.svg";
// END ICONS

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isSuggestionsVisible, setSuggestionsVisible] = useState(false);

  useEffect(() => {
    if (query) {
      const filteredSuggestions = [
        ...categories.filter((category) =>
          category.name.toLowerCase().includes(query.toLowerCase())
        ),
        ...products.filter((product) =>
          product.name.toLowerCase().includes(query.toLowerCase())
        ),
      ];
      setSuggestions(filteredSuggestions);
      setSuggestionsVisible(true);
    } else {
      setSuggestions([]);
      setSuggestionsVisible(false);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.name);
    setSuggestions([]);
    setSuggestionsVisible(false);
  };

  return (
    <div className="relative flex flex-col items-center lg:w-[500px] md:w-96 min-w-64">
      <div className="relative w-full">
        <Image
          src={MagnifyingGlassIcon}
          alt="Icon"
          width={25}
          height={25}
          className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2"
        />
        <input
          name="search"
          type="search"
          role="searchbox"
          autoComplete="off"
          className="h-[40px] w-full overflow-hidden rounded-full border border-solid text-[#1c284d] pl-10 pr-3 bg-white focus:outline-none text-[14px]"
          placeholder="Search for products or categories..."
          value={query}
          onChange={handleInputChange}
        />
      </div>
      {isSuggestionsVisible && (
        <div
          className="absolute z-20 top-full w-full bg-white border border-gray-300 rounded-lg mt-2 max-h-[300px] overflow-y-auto"
          aria-live="polite"
        >
          <div className="px-4 py-2 border-b font-bold">Search suggestions:</div>
          {suggestions.map((suggestion, index) => (
            <Link
              href={`/en/${suggestion.name
              .toLowerCase()
              .replace(/ & /g, "-")
              .replace(/ /g, "-")}`}
              key={index}
              className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.bg && (
                <Image
                  src={suggestion.bg}
                  alt={suggestion.name}
                  width={50}
                  height={30}
                  className="rounded-md mr-3 border-[1px] border-black"
                />
              )}
              {suggestion.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
