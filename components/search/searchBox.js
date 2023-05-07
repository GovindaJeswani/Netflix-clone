import React, { useState } from "react";
import Image from "next/image";
import s from "./searchBox.module.css"; // Import the CSS file for styling
import SectionCards from "../card/section-cards";

import { getVideos } from "../../lib/videos";

const SearchBox = ({onSearchValue}) => {
  const [searchTerm, setSearchTerm] = useState(""); // State to store search term

  // Handle input change
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    // console.log(searchTerm);
  };
  const handleSubmitChange = (e)=>{
    e.preventDefault();
    onSearchValue(searchTerm)
    console.log(searchTerm);
  }

  return (
    <>
    <div className={s.searchBox}>
      <input
        type="text"
        className={s.searchInput}
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        />
      <button className={s.searchButton} onClick={handleSubmitChange}>
        <Image
                src={"/static/search_Fi.svg"}
                alt="search icon"
                width="24px"
                height="24px"
                />
      </button>
    </div>

    {/* <SectionCards title="Searched VIdeos" videos={searchTerm} size="small"/> */}
</>
  );
};

export default SearchBox;
