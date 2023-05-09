import React from "react";
import About from "../../components/About";
import Campaigns from "../../components/ui/Campaigns";
import Carousel from "../../components/ui/Carousel";
import Customers from "../../components/customers/Customers";
import MenuWrapper from "../../components/product/MenuWrapper";
import Reservation from "../../components/ui/Reservation";
const {dancingClass,josefinSansClass} = require("../../assets/font")

const Index = () => {
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

export default Index;