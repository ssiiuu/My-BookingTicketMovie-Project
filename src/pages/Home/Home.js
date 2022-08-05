import React from "react";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import ListPhim from "./ListPhim/ListPhim";
import News from "./News/News";
import TabsPhim from "./TabsPhim/TabsPhim";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div className="pt-20">
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
