import React, { useState, useEffect } from "react";
import { Search } from "./Search";
import { AiOutlineSearch } from "react-icons/ai";

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
      if (search) {
        fetch(
          `https://manga-scrapper.p.rapidapi.com/search/${search}/`,
          options
        )
          .then((response) => response.json())
          .then((response) => setSearchTerm(response))
          .catch((err) => console.error(err));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <>
      <div className="relative p-2 bg-slate-700">
        <AiOutlineSearch className="fill-slate-300 absolute top-[14px] left-[14px] w-5 h-5" />
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
