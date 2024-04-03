"use client";
import React, { useState } from 'react';


const SearchBar = () => {

  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setLoading] = useState(false);


  return (
    <>
      <div className="flex flex-col lg:flex-row w-full items-start gap-3">
        <input className="w-full text-sm p-3 border-4 border-neutral-200 rounded-lg text-gray-500"
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          placeholder="https://www.random.org/integers"
          disabled
        />

        <div className="flex items-center p-3 justify-center gap-3 ">
          <button disabled={searchPrompt == '' || isLoading} className={`${searchPrompt !== '' && !isLoading ? 'cursor-pointer bg-gray-800 w-fit' : ''}bg-gray-800 w-fit disabled:bg-gray-400 rounded-md px-3 py-1 text-white`}
            onClick={()=>{alert("Scraping is disabled")}}>{isLoading ? 'Scraping...' : "Scrape"}</button>
    
        </div>
      </div>
    </>
  )
}

export default SearchBar