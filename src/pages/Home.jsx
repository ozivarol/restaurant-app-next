import React from "react";
const { dancingClass, josefinSansClass } = require("../assets/font");
import Carousel from "@/components/ui/Carousel";
import Campaigns from "@/components/ui/Campaigns";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "../components/About";
import Reservation from "@/components/ui/Reservation";
const Home = () => {
  return (
    <div>
      <Carousel fonts={[dancingClass, josefinSansClass]} />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation/>
    </div>
  );
};

export default Home;
