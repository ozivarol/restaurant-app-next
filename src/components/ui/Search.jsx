import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Image from "next/image";
const { dancingClass } = require("../../assets/font");
import { AiFillCloseCircle } from "react-icons/ai";
const Search = ({ onClickForSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[3.125rem] after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-30 grid place-content-center">
      <OutsideClickHandler onOutsideClick={onClickForSearchModal}>
        <div className="w-full h-full grid place-content-center relative">
          <div className="relative z-50 w-[37.5rem] h-[37.5rem] bg-white border-2 p-10 rounded-3xl">
            <Title addClass={`${dancingClass} text-[2.5rem] text-center`}>
              Search
            </Title>
            <input
              type="text"
              placeholder="Search..."
              className="border-2 w-full my-10 rounded-sm hover:border-primary"
            />
            <div>
              <ul>
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all rounded-lg">
                  <div className="relative flex">
                    <Image
                      src="/images/adana2.png"
                      alt=""
                      width={60}
                      height={60}
                    />
                  </div>
                  <span className="font-bold">Adana</span>
                  <span className="font-bold">40TL</span>
                </li>
              </ul>
              <button
                className="absolute  top-4 right-4"
                onClick={onClickForSearchModal}
              >
                <AiFillCloseCircle
                  size={25}
                  className="hover:text-primary transition-all"
                />
              </button>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
