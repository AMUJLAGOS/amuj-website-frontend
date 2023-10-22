// 
'use client';
import React from 'react'
import { RiSearchLine, RiSearch2Line } from 'react-icons/ri'
import { RxCross2 } from 'react-icons/rx'
import { slideInUp } from 'react-animations';


function Search({searchFunc}:any) {
  return (
    <section className='absolute w-[100%] z-[150] bg-[#000000ad] h-[100%] top-0'>
      <div className='bg-[#fff]'>
        <div onClick={()=>searchFunc()} className='absolute right-16 mt-10 flex items-center border-[1.8px] border-black p-2 rounded-[50%]'>
          <RxCross2 size={'23'} />
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col items-center py-[120px]'>
            <h1 className='text-[20px] font-bold mb-[60px]'>SEARCH A PRODUCT</h1>
            <div className='flex items-center border-b border-black'>
              <input type="text" placeholder='Type Something Here' className='input w-[600px] py-3' />
              <RiSearch2Line size={'28'}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search