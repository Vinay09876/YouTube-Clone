import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import SearchResult from "./SearchResult";
import Sidebar from "./Sidebar";

function Search() {
  const [search, setSearch] = useState();
  const { searchQuery } = useParams();

  const fetchSearchQuery = () => {
    fetchData(`search?q=${searchQuery}`).then(({ contents }) => {
      // console.log(contents);
      setSearch(contents);
    });
  };

  useEffect(() => {
    fetchSearchQuery();
  }, [searchQuery]);

  return (
    <div className="">
      <div className="mt-24 flex flex-row h-[calc(100%-56px)]">
        <Sidebar />
        <div className="grow h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
          <div className="grid grid-cols-1 gap-2 p-4">
            {search?.map((item) => {
              if (item?.type !== "video") {
                return false;
              }
              return <SearchResult key={item.id} video={item?.video} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
