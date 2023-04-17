import React from "react";
const { dancingClass, josefinSansClass } = require("../../assets/font");
import Carousel from "@/components/ui/Carousel";
import Campaigns from "@/components/ui/Campaigns";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "../../components/About";
import Reservation from "@/components/ui/Reservation";
import { Customers } from "../../components/customers";
const Home = () => {
  return (
    <React.Fragment>
      <Carousel fonts={[dancingClass, josefinSansClass]} />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Home;
