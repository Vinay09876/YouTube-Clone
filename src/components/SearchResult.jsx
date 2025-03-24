import { abbreviateNumber } from "js-abbreviation-number";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Time from "../loader/Time";
import { Link } from "react-router-dom";

function SearchResult({ video }) {
  // console.log(video);

  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex space-y-6">
          <div className="flex">
            <div className="relative h-46 md:h-54 md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
              <img
                className="w-full h-full cursor-pointer"
                src={video?.thumbnails[0]?.url}
                alt=""
              />
              {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
            </div>
          </div>
          <div className="flex flex-col space-x-2 space-y-3 ml-7">
            <div className="text-[18px] font-semibold line-clamp-1">
              {video?.title}
            </div>
            <div className=" rounded-xl text-sm">
              {video?.descriptionSnippet}
            </div>
            <div className="flex items-center space-x-4 font-bold">
              <div className="items-start">
                <div className="flex h-9 w-9 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full rounded-full overflow-hidden"
                    src={video?.author?.avatar[0]?.url}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <span className="flex items-center mt-2 text-sm text-gray-600">
                  {video?.author?.title}
                  {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                    <BsFillCheckCircleFill className="text-gray-600 ml-2 text-[12px]" />
                  )}
                </span>
                <div>
                  <span className="text-[14px] text-gray-600">
                    {`${abbreviateNumber(video?.stats?.views, 1)} `}
                    <span className="text-base">views</span>
                    <span className="mt-0 ml-1 mb-0 mr-1">•</span>
                    <span>{video?.publishedTimeText}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SearchResult;
