"use client";
import { frContext } from "@/context/FriendContext";
import React, { useContext } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaPhoneVolume, FaVideo } from "react-icons/fa";
import { PiChatCircleTextLight } from "react-icons/pi";

const TimeLinePage = () => {
  const { friendData, setFriendData } = useContext(frContext);
  
  return (
    <div className="grid gap-2 max-w-7xl mx-auto my-5">
      {friendData.map((friend) => (
        <div
          className="border p-2 md:p-4 border-zinc-200 rounded-xl flex items-center md:gap-4 mx-2 lg:mx-0"
          key={friend.id}
        >
          <div>
            {friend.type === "audio" ? (
              <BiSolidPhoneCall className="text-2xl md:text-4xl" />
            ) : friend.type === "text" ? (
              <PiChatCircleTextLight className="text-2xl md:text-4xl" />
            ) : friend.type === "video" ? (
              <FaVideo className="text-2xl md:text-4xl" />
            ) : (
              ""
            )}
          </div>
          <div>
            <p className="flex gap-1">
              <span className="font-bold">{friend.type} </span>
              <span>with</span> 
              <span>{friend?.friend?.name}</span>
            </p>
            <p> {new Date(friend.timestamp).toLocaleDateString('en-US',{
                month: "long",
                day: "numeric",
                year: "numeric",
            })}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimeLinePage;
