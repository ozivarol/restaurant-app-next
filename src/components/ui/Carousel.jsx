import Image from "next/image";
import React from "react";
import Title from "./Title";
import Slider from "react-slick";

const Carousel = ({ ...fonts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };
  let objectFonts = { ...fonts };

  return (
    <div className="h-screen w-full container mx-auto -mt-[5.5rem]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image src="/images/hero-bg.jpg" alt="" fill={true} />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48  text-white flex flex-col items-start gap-y-10">
            <Title addClass={`${objectFonts.fonts[0]} text-6xl`}>
              Bugra Kebap
            </Title>
            <p className={`${objectFonts.fonts[1]} text-xl sm:w-2/5 w-full`}>
              96'dan beri eşek eti satıyoruz kalitemizden ödün vermiyoruz(Has
              Malatya Eşşeği kullanıyoruz..)
            </p>
            <button className={`${objectFonts.fonts[1]} btn-primary`}>Order Now</button>
          </div>
        </div>
        <div>
          <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
            <Title addClass={`${objectFonts.fonts[0]} text-6xl`}>
              Bugra Kebap
            </Title>
            <p className={`${objectFonts.fonts[1]} text-xl sm:w-2/5 w-full`}>
              96'dan beri eşek eti satıyoruz kalitemizden ödün vermiyoruz(Has
              Malatya Eşşeği kullanıyoruz..)
            </p>
            <button className={`${objectFonts.fonts[1]} btn-primary`}>Order Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
