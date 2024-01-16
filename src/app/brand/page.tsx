/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
//

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spacer from "@/components/Spacer";
import React from "react";
import Image from "next/image";

function Brand() {
  return (
    <main className="box-border overflow-hidden">
      <Header home={"home"} />
      <div className="w-full">
        <img
          src="/amuj-hanger.jpg"
          alt=""
          className="h-[800px] w-full object-cover"
        />
      </div>
      <section className="mt-14 items-center">
        <div className="tablet:w-[840px] w-[90%] m-auto">
          <div className="text-sm">
            <h1 className="test-md text-lg font-bold tablet:text-left text-center">
              MEET JUMAI
            </h1>
            <br />
            <h1 className="tracking-[1px] font-normal text-justify text-xs">
              Jumai launched AMUJ in July 2022. Her goal was simple: Establish a
              continuous-experimentation fashion company that leads in
              innovative designs, quality and value, but has sexiness,
              confidence and the celebration of women as its main medium.
              Jumai’s visionary approach to creativity remains radical and often
              termed “trouble making to conservative society.” Yet, it is
              profoundly sentimental and admired by a broad global audience.
            </h1>
            <br />
            <h1 className="tracking-[1px] font-normal text-justify text-xs">
              Having shuttled between Nigeria and Ghana during her early
              education days and taken sewing lessons for years, Jumai travelled
              to Canada for her foundation, and then to Brunel University in
              London to study Accounting. Despite not pursuing a formal fashion
              education, she did a lot of fashion internships to gain industry
              experience and her passion for design was evident as she had
              design sketches plastered all over her dorm room — an exercise she
              indulged in frequently due to her deep love for design and
              production.
            </h1>
            <br />
            <h1 className="tracking-[1px] font-normal text-justify text-xs">
              In her pursuit of furthering her fashion education, she decided to
              pursue a Master's in International Fashion Design Management at
              the University of Huddersfield, a city known as the home of most
              textile mills in the UK. Since the inception of AMUJ, Jumai has
              been dedicated to translating her wealth of knowledge and
              expertise into a creative system that inspires women and
              celebrates their femininity.
            </h1>
          </div>
        </div>
        {/* <div className="relative h-[320px] w-full mt-10">
          <Image
            src={"/brandfull.png"}
            alt={"brand image"}
            layout="fill"
            // width={"100"}
            objectFit="cover"
            className="object-bottom"
          />
        </div> */}

        <div className="mt-10">
          <img
            src="/amujj.png"
            alt=""
            className="w-full h-[300px] object-cover"
          />
        </div>

        <div className="tablet:w-[840px] w-[90%] m-auto mt-10">
          <div className="text-sm">
            {/* <h1 className="font-bold tablet:text-left text-center">AMUJ</h1> */}
            {/* <br /> */}
            <p className="tracking-[0.5px]">
              Established in 2022, AMUJ creates purposefully-crafted pieces that
              make women feel confident, sexy, and love their bodies more. It
              goes beyond clothing to inspire self-assuredness, esteem, and
              authenticity. AMUJ is also a cultural curator, continually
              exploring and infusing diverse cultural influences into its
              designs. It embraces a curiosity-driven approach, celebrating
              identities and unique experiences.
            </p>
            <br />
            <p className="tracking-[0.5px]">
              AMUJ's role in society is to curate a fashion narrative that not
              only celebrates women, but sparks a transformative journey where
              women discover the power of self-expression through
              purposefully-crafted pieces.
            </p>
          </div>
        </div>
        {/* <div className="relative h-[320px] w-full mt-10">
          <Image
            src={"/brandfull.png"}
            alt={"brand image"}
            layout="fill"
            // width={"100"}
            objectFit="cover"
            className="object-bottom"
          />

        </div> */}
        <div className="mt-10">
          <img src="/creativeHub.gif" alt="" className="w-full object-cover" />
        </div>

        <div className="tablet:w-[840px] w-[90%] m-auto mt-10">
          <div className="mt-16">
            <div className="text-sm">
              {/* <h1 className="font-bold tablet:text-left text-center">
                CREATIVE HUB
              </h1> */}
              {/* <br /> */}
              <p className="tracking-[0.5px]">
                Members of our team are sourced from all over the country to
                find the best individuals who align with the mission and vision
                of the brand. We come together, each expressing creative
                freedom, purposefulness, and craftsmanship, to craft pieces that
                make AMUJ both an empowerment catalyst and a cultural curator.
                With each piece, we pay meticulous attention to the smallest of
                details, ensuring the best fit, feel, and quality. This intimate
                fashion affair takes place in our Lekki design studio, in Lagos,
                Nigeria.
              </p>
            </div>
          </div>
        </div>

        <div className=" tablet:w-[840px] w-[90%] m-auto mt-10">
          <div className="">
            <h1 className="font-bold tracking-[0.5px] tablet:text-left text-center">
              BTS: How its made
            </h1>
            <iframe
              // width="560"
              height="400"
              src="https://www.youtube.com/embed/wdkPJtpTFhQ?si=Js-Gb6MrAuOs4wBa"
              title="YouTube video player"
              className="mt-5 w-full tablet:w-[560px]"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col ml-[290px]">
        {/* <div className="flex mt-16">
          <img
            src="brand.png"
            alt=""
            className="w-[50%] h-[400px] object-cover"
          />
          <img
            src="shop_nav.jpg"
            alt=""
            className="w-[30%] h-[400px] object-cover"
          />
        </div> */}
      </section>
      <Footer />
    </main>
  );
}

export default Brand;
