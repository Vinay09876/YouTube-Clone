import React, { useEffect, useState } from "react";
import logo from "/logo.jpg";
import profile from "/profile.png";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddFill } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [searchResult, setSearchresult] = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchResult?.length > 0
    ) {
      navigate(`search/${searchResult}`);
      setSearchresult("");
    }
  };

  const onHomeHandle = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className="flex items-center space-x-4">
        <AiOutlineMenu
          size={"32"}
          className="rounded-full p-1 cursor-pointer hover:bg-gray-200 duration-200"
        />
        <img
          src={logo}
          onClick={onHomeHandle}
          className="w-28 cursor-pointer"
        />
      </div>
      <div className="flex w-[35%]">
        <div className="w-[100%] border border-gray-400 rounded-l-full px-3 py-2">
          <input
            type="text"
            placeholder="Search"
            className="outline-none "
            onChange={(e) => setSearchresult(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchResult}
          />
        </div>
        <button
          className="px-2 py-1 bg-gray-200 rounded-r-full cursor-pointer"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"28px"} />
        </button>
        <IoMdMic
          size={"38px"}
          className="ml-3  rounded-full p-1 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className="flex items-center space-x-5 ">
        <RiVideoAddFill className="text-3xl rounded-full p-1 cursor-pointer hover:bg-gray-200 duration-200" />
        <AiOutlineBell className="text-3xl rounded-full p-1 cursor-pointer hover:bg-gray-200 duration-200" />
        <img src={profile} className="w-8" />
      </div>
    </div>
  );
}

export default Navbar;
