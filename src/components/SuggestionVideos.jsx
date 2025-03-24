import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function SuggestionVideos({ video }) {
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex space-x-6 space-y-6 ml-10 ">
          <div className="">
            <div className="relative h-24 md:h-20 xl:h-24 w-45 min-w-[168px] lg:w-32 lg:min-w[128px] xl:w-[168px] md:rounded-xl hover:rounded-none duration-200 overflow-hidden">
              <img
                className="w-full h-full cursor-pointer"
                src={video?.thumbnails[0]?.url}
                alt=""
              />
              {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
            </div>
          </div>
          <div className="flex space-x-2 mt-2">
            <div>
              <span className="text-sm font-semibold line-clamp-2">
                {video?.title}
              </span>
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
      </Link>
    </div>
  );
}

export default SuggestionVideos;
