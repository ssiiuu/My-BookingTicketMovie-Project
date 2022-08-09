import React from "react";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import ListPhim from "./ListPhim/ListPhim";
import News from "./News/News";
import TabsPhim from "./TabsPhim/TabsPhim";
import "./HomeResponesvie.css";

export default function Home() {
  return (
    <div>
      <div className="">
        <HomeCarousel />
      </div>
      <div className="home__content container mx-auto mt-20">
        <ListPhim />
        <TabsPhim />
        <News />
      </div>
    </div>
  );
}
