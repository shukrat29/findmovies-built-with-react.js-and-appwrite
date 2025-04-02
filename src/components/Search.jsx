import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div className="flex items-center justify-center">
        <IoSearch className="text-white" />
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
