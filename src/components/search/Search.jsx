import React from "react";
import SearchCSS from "./Search.module.css";
import { BsSearch } from "react-icons/bs";

function Search() {
  return (
    <div className={SearchCSS.container}>
      <div className={SearchCSS["input-container"]}>
        <input
          className={SearchCSS["search-input"]}
          type="text"
          placeholder="Search for city..."
        />
        <div className={SearchCSS["search-icon"]}>
          <BsSearch size={20} className="icon" />
        </div>
      </div>
      <div className={SearchCSS["drop-down"]}>
        <ul className={SearchCSS["list-datas"]}>
          <li>Phnom Penh</li>
          <li>Phnom Penh</li>
          <li>Phnom Penh</li>
          <li>Phnom Penh</li>
        </ul>
      </div>
    </div>
  );
}

export default Search;
