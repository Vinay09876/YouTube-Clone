import React from "react";

function ListItems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
  ];
  return (
    <div className="flex justify-center ml-5 overflow-x-scroll hide-scroll-bar overflow-hidden">
      <div className="flex space-x-4 flex-nowrap ml-[45%]">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex-none text-medium bg-gray-300 hover:bg-gray-400 duration-400 rounded-xl px-4 py-2 mb-2 font-medium cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItems;
