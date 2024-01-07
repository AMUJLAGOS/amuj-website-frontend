/* eslint-disable @next/next/no-img-element */
import { imageServer } from "@/utils/urlhandler";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { PiInstagramLogo } from "react-icons/pi";

function SocialImage({ image }: any) {
  return (
    <div className="relative social">
      <img
        src={`${imageServer}${image}`}
        alt="social media"
        className="md:h-[360px] h-[150px] w-[100%] object-cover"
      />
      <div className="absolute w-[100%] h-[100%] bg-[#00000060] flex items-center justify-center insta top-0">
        <PiInstagramLogo className="text-[white]" size={80} />
      </div>
    </div>
  );
}

export default SocialImage;
