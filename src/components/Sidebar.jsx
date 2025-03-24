import React from "react";
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { BiVideo } from "react-icons/bi";
import { MdWatchLater } from "react-icons/md";
import { GiLinkedRings } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineHistory } from "react-icons/md";
import { CgPlayListSearch } from "react-icons/cg";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { SiYoutubemusic } from "react-icons/si";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { SiStylelint } from "react-icons/si";
import { PiLightbulbLight } from "react-icons/pi";
import { MdPodcasts } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { PiMusicNoteLight } from "react-icons/pi";
import { SiYoutubekids } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { TfiHelpAlt } from "react-icons/tfi";
import { MdOutlineFeedback } from "react-icons/md";

function Sidebar() {
  const sidebarItems1 = [
    {
      id: 1,
      name: "Home",
      icon: <GoHomeFill />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "Subscription",
      icon: <MdOutlineSubscriptions />,
    },
  ];

  const sidebarItems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <CgProfile />,
    },
    {
      id: 2,
      name: "History",
      icon: <MdOutlineHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <CgPlayListSearch />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch later",
      icon: <MdWatchLater />,
    },
    {
      id: 6,
      name: "Liked videos",
      icon: <GiLinkedRings />,
    },
  ];

  const sidebarItems3 = [
    {
      id: 1,
      name: "Trending",
      icon: <SiTrendmicro />,
    },
    {
      id: 2,
      name: "Shopping",
      icon: <HiOutlineShoppingBag />,
    },
    {
      id: 3,
      name: "Music",
      icon: <SiYoutubemusic />,
    },
    {
      id: 4,
      name: "Films",
      icon: <PiFilmSlateLight />,
    },
    {
      id: 5,
      name: "Live",
      icon: <CgMediaLive />,
    },
    {
      id: 6,
      name: "Gaming",
      icon: <SiYoutubegaming />,
    },
    {
      id: 7,
      name: "News",
      icon: <FaRegNewspaper />,
    },
    {
      id: 8,
      name: "Sport",
      icon: <TfiCup />,
    },
    {
      id: 9,
      name: "Courses",
      icon: <SiStylelint />,
    },
    {
      id: 10,
      name: "Fashion & beauty",
      icon: <PiLightbulbLight />,
    },
    {
      id: 11,
      name: "Podcasts",
      icon: <MdPodcasts />,
    },
  ];

  const sidebarItems4 = [
    {
      id: 1,
      name: "YouTube Premium",
      icon: <FaYoutube />,
    },
    {
      id: 2,
      name: "YouTube Studio",
      icon: <SiYoutubestudio />,
    },
    {
      id: 1,
      name: "YouTube Music",
      icon: <PiMusicNoteLight />,
    },
    {
      id: 1,
      name: "YouTube Kids",
      icon: <SiYoutubekids />,
    },
  ];

  const sidebarItems5 = [
    {
      id: 1,
      name: "Settings",
      icon: <CiSettings />,
    },
    {
      id: 2,
      name: "Report history",
      icon: <MdOutlineOutlinedFlag />,
    },
    {
      id: 1,
      name: "Help",
      icon: <TfiHelpAlt />,
    },
    {
      id: 1,
      name: "Send feedback",
      icon: <MdOutlineFeedback />,
    },
  ];

  return (
    <div className="px-6 w-[24%] h-[calc(100vh-6.625rem)] mr-4 overflow-y-scroll overflow-x-hidden ">
      <div className="">
        <div className="space-y-2 ">
          {sidebarItems1.map((item) => {
            return (
              <div className="flex items-center space-x-5 cursor-pointer hover:bg-gray-200 duration-300 rounded-xl p-2">
                <div className="text-xl">{item.icon} </div>
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
        <br />
        <hr />

        {/* {You} */}
        <div>
          <div className="flex items-center ml-2 py-3 space-x-3">
            <span>You</span>
            <FaChevronRight />
          </div>
          <div className="space-y-2 ">
            {sidebarItems2.map((item) => {
              return (
                <div className="flex items-center space-x-5 cursor-pointer hover:bg-gray-200 duration-300 rounded-xl p-2">
                  <div className="text-xl">{item.icon} </div>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
          <br />
          <hr />
        </div>

        {/* {Explore} */}
        <div>
          <div className="items-center ml-2 py-3">
            <span className="font-bold">Explore</span>
          </div>
          <div className="space-y-2 ">
            {sidebarItems3.map((item) => {
              return (
                <div className="flex items-center space-x-5 cursor-pointer hover:bg-gray-200 duration-300 rounded-xl p-2">
                  <div className="text-xl">{item.icon} </div>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
          <br />
          <hr />
        </div>

        <div>
          <div className="items-center ml-2 py-3">
            <span className="font-bold">More from YouTube</span>
          </div>
          <div className="space-y-2 ">
            {sidebarItems4.map((item) => {
              return (
                <div className="flex items-center space-x-5 cursor-pointer hover:bg-gray-200 duration-300 rounded-xl p-2">
                  <div className="text-xl text-red-600">{item.icon} </div>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
          <br />
          <hr />
        </div>

        <div>
          <div className="space-y-2 ">
            {sidebarItems5.map((item) => {
              return (
                <div className="flex items-center space-x-5 cursor-pointer hover:bg-gray-200 duration-300 rounded-xl p-2">
                  <div className="text-xl ">{item.icon} </div>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
          <br />
          <hr />
        </div>

        <span className="text-sm font-semibold text-gray-400">
          About Press Copyright <br /> Contact us Creators <br /> Advertise
          Developers <br />
          <br />
          <p>
            Terms PrivacyPolicy & Safety <br />
            How YouTube worksTest <br />
            new features
          </p>
        </span>
        <p className="text-xs mt-4 text-gray-800">@ 2025 Vinay Ippakayala</p>
      </div>
    </div>
  );
}

export default Sidebar;
