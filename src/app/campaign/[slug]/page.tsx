/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
//
"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GetRequest, imageServer } from "@/utils/urlhandler";
import { useParams } from "next/navigation";

function Collection() {
  const { slug } = useParams() as { slug: string };
  const [campaignImg, setCampaignImg] = useState([]);
  const getImage = async () => {
    const response = await GetRequest(`${slug}/campaigns`);
    // console.log(response.data.campaigns);
    setCampaignImg(response.data.campaigns);
  };

  useEffect(() => {
    getImage();
  }, []);
  return (
    <main className="box-border overflow-hidden">
      <Header />
      {campaignImg?.map((obj: any, index: any) => (
        <div className="w-full " key={index}>
          <img
            src={`${imageServer}${obj}`}
            className="object-cover h-[90vh] w-full"
            alt=""
          />
        </div>
      ))}
      <Footer />
    </main>
  );
}

export default Collection;
