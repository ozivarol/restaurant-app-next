import Link from 'next/link'
import React from 'react'
const {dancingClass} = require('../../assets/font')

export const Logo = () => {
    
  return (
    <Link href="/">
    <span className={`${dancingClass} text-primary text-[2.5rem] font-bold cursor-pointer`}>Logo</span>
    </Link>
    
  )
}

export default Logo
