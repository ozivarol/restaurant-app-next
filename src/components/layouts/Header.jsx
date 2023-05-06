import React, { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import Search from "../ui/Search";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import useResize from "@/utilities/hooks/useResize";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSearchModal, setIsSearchModel] = useState(false);
  const { isMenuModal, setIsMenuModal } = useResize();
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const onClickForSearchModal = () => {
    setIsSearchModel(true);
    if (isSearchModal) {
      setIsSearchModel(false);
    }
  };

  return (
    <div
      className={`h-[5.5rem] z-50 relative ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden z-50  ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li
              className={`px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer ${
                router.asPath === "/" && "text-primary"
              }`}
              onClick={() => setIsMenuModal(false)}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer ${
                router.asPath === "/menu" && "text-primary"
              }`}
              onClick={() => setIsMenuModal(false)}
            >
              <Link href="/menu">Menu</Link>
            </li>
            <li
              className={`px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer ${
                router.asPath === "/about" && "text-primary"
              }`}
              onClick={() => setIsMenuModal(false)}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer ${
                router.asPath === "/reservation" && "text-primary"
              }`}
              onClick={() => setIsMenuModal(false)}
            >
              <Link href="/reservation">Book Table</Link>
            </li>
          </ul>
          {isMenuModal && (
            <button
              className="absolute  top-4 right-4 z-50 hover:text-primary"
              onClick={() => setIsMenuModal(false)}
            >
              <AiFillCloseCircle size={25} className=" transition-all" />
            </button>
          )}
        </nav>

        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
            <span>
              <FaUserAlt className="hover:text-primary transition-all cursor-pointer" />
            </span>
          </Link>
          <Link href="/cart">
            <span className="relative">
              <HiShoppingCart className="hover:text-primary transition-all cursor-pointer" />
              <span className="w-4 h-4 text-xs grid place-content-center rounded-full bg-primary absolute -top-2 -right-3 text-black font-bold">
                {cart.products.length === 0 ? "0" : cart.products.length}
              </span>
            </span>
          </Link>
          <button onClick={onClickForSearchModal}>
            <FaSearch className="hover:text-primary transition-all cursor-pointer" />
          </button>
          <a href="#" className="sm:inline-block hidden">
            <button className={`btn-primary sm:p-2`}>Order Online</button>
          </a>
          <button>
            <GiHamburgerMenu
              className="block sm:hidden xl:hidden lg:hidden  text-xl hover:text-primary transition-all"
              onClick={() => setIsMenuModal(true)}
            />
          </button>
        </div>
      </div>
      {isSearchModal && (
        <Search onClickForSearchModal={onClickForSearchModal} />
      )}
    </div>
  );
};

export default Header;
