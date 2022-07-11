import React from "react";
import MultipleRows from "../../components/React-Slick/MultipleRowSlick";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import ListPhim from "./ListPhim/ListPhim";
import TabsPhim from "./TabsPhim/TabsPhim";

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <div className="container mx-auto mt-20">
        <ListPhim />
        <TabsPhim />
      </div>
    </div>
  );
}
