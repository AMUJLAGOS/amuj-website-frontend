/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { PiInstagramLogo } from "react-icons/pi";

function SocialImage() {
  return (
    <div className="w-[25%] relative social">
      <img
        src="/ig_image.jpg"
        alt="social media"
        className="h-[360px] w-[100%] object-cover"
      />
      <div className="absolute w-[100%] h-[100%] bg-[#00000060] flex items-center justify-center insta top-0">
        <PiInstagramLogo className="text-[white]" size={80} />
      </div>
    </div>
  );
}

export default SocialImage;
