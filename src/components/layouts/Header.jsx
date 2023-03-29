import React, { useEffect, useState } from 'react'
import Logo from '../ui/Logo'
import {FaUserAlt,FaSearch} from 'react-icons/fa'
import {HiShoppingCart} from 'react-icons/hi'
import Search from '../ui/Search'
import {GiHamburgerMenu} from "react-icons/gi"
import {AiFillCloseCircle} from "react-icons/ai"
import useResize from '@/utilities/hooks/useResize'
const {josefinSansClass} = require("../../assets/font")
import { useRouter } from 'next/navigation'


const Header = () => {
  const [isSearchModal, setIsSearchModel] = useState(false)
  const {isMenuModal,setIsMenuModal} = useResize()
  const router = useRouter()
  const onClickForSearchModal = () =>{
    setIsSearchModel(true)
    if(isSearchModal){
      setIsSearchModel(false)
    }
  }
  
  
  return (
    <div className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-secondary" : "bg-transparent"}`}>
     <div className='container mx-auto text-white flex justify-between items-center h-full'>
     <div><Logo/></div>
      <nav className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden z-50  ${
            isMenuModal === true && "!grid place-content-center"
          }`}>
        <ul className={`${josefinSansClass} flex gap-x-2 sm:flex-row flex-col items-center`}>
          <li className={`${josefinSansClass} li-header`}><a href="">Home</a></li>
          <li className='li-header'><a href="">Menu</a></li>
          <li className='li-header'><a href="">About</a></li>
          <li className='li-header'><a href="">Book Table</a></li>
          <a href="#" className="li-header">
          <button className={`${josefinSansClass} btn-primary block sm:hidden xl:hidden lg:hidden`}>Order Online</button>
        </a>
        {isMenuModal && (<button className="absolute top-4 right-4 z-50" onClick={() => setIsMenuModal(false)}>
                <AiFillCloseCircle size={25} className="hover:text-primary block sm:hidden xl:hidden lg:hidden transition-all"/>
        </button>) } 
        </ul>
        
      </nav>
      
        
      <div className='flex gap-x-4 items-center'>
        <a href="#">
          <FaUserAlt className='hover:text-primary transition-all'/>
        </a>
        <a href="#">
          <HiShoppingCart className='hover:text-primary transition-all'/>
        </a>
        <button onClick={onClickForSearchModal}>
          <FaSearch className='hover:text-primary transition-all'/>
        </button>
        <a href="#" className="sm:inline-block hidden">
          <button className={`${josefinSansClass} btn-primary sm:p-2`}>Order Online</button>
        </a>
        <button>
          <GiHamburgerMenu className="block sm:hidden xl:hidden lg:hidden  text-xl hover:text-primary transition-all" onClick={() => setIsMenuModal(true)}/>

        </button>
       
      </div>
     </div>
     {isSearchModal && <Search onClickForSearchModal={onClickForSearchModal}/>}
    </div>
  )
}

export default Header