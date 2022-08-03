import React from "react";
import Application from "./Application/Application";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import ListPhim from "./ListPhim/ListPhim";
import News from "./News/News";
import TabsPhim from "./TabsPhim/TabsPhim";

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <div className="container mx-auto mt-20">
        <ListPhim />
        <TabsPhim />
        <News />
        {/* <Application /> */}
      </div>
    </div>
  );
}
