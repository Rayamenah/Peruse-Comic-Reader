import Image from "next/image";
import React, { useState, useEffect } from "react";
import Search from "./Search";
//import searchIcon from "../.././assets/search-icon.svg";

const SearchBar = ({ clickable }) => {
  const [search, setSearch] = useState();
  const [searchTerm, setSearchTerm] = useState([]);

  const handleChange = (e) => {
    setTimeout(() => {
      setSearch(e.target.value);
    }, 2000);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "51606b3161mshff04d80ff4ccb5ep183a71jsn85b9422ae84e",
        "X-RapidAPI-Host": "manga-scrapper.p.rapidapi.com",
      },
    };

    const timer = setTimeout(() => {
      fetch(`https://manga-scrapper.p.rapidapi.com/search/${search}/`, options)
        .then((response) => response.json())
        .then((response) => setSearchTerm(response))
        .catch((err) => console.error(err));
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  console.log(search);
  console.log(searchTerm);
  return (
    <>
      <div className="relative p-2 bg-slate-700">
        {/* <Image
          className="absolute top-2 left-2 w-8 h-8 p-2"
          src={searchIcon}
          alt=""
          width={20}
          height={20}
        /> */}
        <input
          className="pl-8 w-full h-8 rounded-md px-4 bg-transparent border-2 border-slate-800 text-slate-100 text-sm "
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
        {search &&
          searchTerm.data?.result.map((item) => (
            <Search title={item.MangaTitle} key={item._id} MangaId={item._id} />
          ))}
      </div>
    </>
  );
};

export default SearchBar;
