import React from "react";
import { GrLinkNext } from "react-icons/gr";
import { PiInstagramLogo } from "react-icons/pi";
import { GrTwitter } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <main>
      <div className="w-[1200px] m-auto flex justify-between">
        <section className="w-[45%]">
          <h1 className="text-[16px] font-black">
            SUBSCRIBE TO OUR NEWSLETTER
          </h1>
          <p className="text-[#676464] font-normal text-[16px] mt-3">
            Be the first to hear about our exclusive releases and offers
          </p>
          {/* subcribe  */}
          <div className="flex items-center border-b border-black mt-10">
            <input
              type="text"
              placeholder="Email Address"
              className="input w-[600px] py-3"
            />
            <button className="border border-black p-2 rounded-full">
              <GrLinkNext size={"17"} className="" />
            </button>
          </div>
          <div className="mt-8 flex justify-between">
            <div className="flex justify-between w-[130px]">
              <button className="border border-black p-1 rounded-full">
                <GrTwitter size={25} />
              </button>
              <button className="border border-black p-1 rounded-full">
                <FaFacebookF size={25} />
              </button>
              <button className="border border-black p-1 rounded-full">
                <PiInstagramLogo size={25} />
              </button>
            </div>
            <h1 className="font-black text-[16px]">© 2023 Amuj Official</h1>
          </div>
        </section>
        <section>aaaa</section>
      </div>
    </main>
  );
}

export default Footer;
