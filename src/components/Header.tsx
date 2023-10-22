// 
"use client";
import React, { useState } from 'react'
import NavBar from './NavBar'
import Search from './Search'

function Header() {
  const [showSearch, setShowSearch] = useState(false)

  const showSearchHandler = () => {
    setShowSearch(true)
  }

  const hideSearchHandler = () => {
    setShowSearch(false)
  }

  return (
    <div className='z-[10] relative'>
      {showSearch && <Search searchFunc={hideSearchHandler} />}
      <NavBar searchFunc={showSearchHandler}/>
    </div>
  )
}

export default Header