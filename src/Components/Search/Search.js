import React from "react";
import { useState } from "react";


function Search({setWeather}) {
  const api = {
    key: "e4ec694a4b3e22513a3bc8f3d63be356",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const [searchParameter, setSearchParameter] = useState("");
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}?q=${searchParameter}&units=metric&lang=tr&appid=${api.key}`)
        .then(data => data.json())
        .then(res => {
          setSearchParameter("");
          setWeather(res);
          console.log(res);
          
        });
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="City"
        onChange={(e) => setSearchParameter(e.target.value)}
        value={searchParameter}
        onKeyPress={search}
      />
    </div>
  );
}

export default Search;
