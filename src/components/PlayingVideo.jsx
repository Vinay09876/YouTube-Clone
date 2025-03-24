import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/rapidapi";
import ReactPlayer from "react-player";
import { abbreviateNumber } from "js-abbreviation-number";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import SuggestionVideos from "./SuggestionVideos";

function PlayingVideo() {
  const [video, setVideo] = useState();
  const [relatedVideo, setRelatedVideo] = useState();
  const { id } = useParams();

  const fetchVideoDetails = () => {
    fetchData(`video/details/?id=${id}`).then((res) => {
      // console.log(res);
      setVideo(res);
    });
  };

  const fetchRelaredVideos = () => {
    fetchData(`video/related-contents/?id=${id}`).then((res) => {
      console.log(res);
      setRelatedVideo(res);
    });
  };

  useEffect(() => {
    fetchVideoDetails();
    fetchRelaredVideos();
  }, [id]);

  // lg:w-[1230px]

  return (
    <div className="flex justify-center flex-row mt-16 h-[calc(100%-56px)] overflow-x-hidden">
      <div className="w-full max-w-[1580px] flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-660px)] px-4 py-3 ml-10 lg:py-6">
          <div className="h-[200px] lg:h-[500px] w-400 ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0 playing">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="100%"
              width="50%"
              controls
              playing={true}
            />
          </div>
          <div className="text-[18px] mt-4 font-bold line-clamp-2">
            {video?.title}
          </div>
          <div className="flex justify-between flex-col md:flex-row mt-4">
            <div className="flex">
              <div className="flex items-start">
                <div className="flex h-11 w-11 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                  />
                </div>
              </div>
              <div className="flex space-x-5">
                <div className="flex flex-col ml-3 mt-3">
                  <div className="text-md font-semibold flex items-center">
                    {video?.author?.title}
                    {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                      <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] ml-1" />
                    )}
                  </div>
                  <div className="text-sm">
                    {video?.author?.stats?.subscribersText}
                  </div>
                </div>
                <span className="mt-1 text-center bg-red-500 px-3 py-2 rounded-full text-white cursor-pointer hover:bg-red-700">
                  Subsribe
                </span>
              </div>
            </div>
            <div className="flex mt-4 md:mt-0">
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
                <AiOutlineLike className="text-xl mr-2" />
                {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
              </div>
              <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
                <AiOutlineLike className="text-xl mr-2" />
                {`${abbreviateNumber(video?.stats?.views, 2)} Likes`}
              </div>
            </div>
          </div>
          <div className="p-4 bg-gray-100 rounded-xl mt-4 text-sm">
            {video?.description}
          </div>
          <div className="flex gap-x-6 font-semibold rounded-xl mt-4 text-sm">
            {video?.stats?.comments} <p>Comments</p>
          </div>
        </div>
        <div className="mt-5">
          {relatedVideo?.contents.map((item) => {
            if (item?.type !== "video") {
              return false;
            }
            return <SuggestionVideos key={item.id} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;
