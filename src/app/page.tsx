/* eslint-disable @next/next/no-img-element */
"use client";
// 
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'
import { RiSearchLine } from 'react-icons/ri'
import styles from '../styles/HeaderFooter.module.css'
import { useState } from 'react'


export default function Home() {
  const [showCurrency, setShowCurrency] = useState(false)
  const showCurrencyHandler = () => {
    setShowCurrency(!showCurrency)
    // console.log('called too')
  }
  const hideCurrencyHandler = () => {
    setShowCurrency(false)
  }


  return (
    <main>
      <header className='text-[12px] font-bold text-white bg-[pink]'>
        <nav>
          <section className='flex justify-between w-[1300px] m-auto  py-4'>
            {/* the dropdown */}
            <div className='cursor-pointer' onClick={() => showCurrencyHandler()}>
              <div className='flex items-center relative px-1' >
                <p>NGN ( ₦ )</p> 
                <IoIosArrowDown size={'18'} />
              </div>
              
             {showCurrency && <div className={`bg-[#fff] absolute flex flex-col items-center text-[black] font-medium mt-3 shadow-lg ${styles.currency_drowpdown}`} >
                <li>NGN ₦</li>  
                <li>USD $</li>  
                <li>GDP £</li>  
                <li>EUR €</li>  
              </div>}
            </div>
            
            {/* amuj logo  */}
            <div>
              {/* <Image alt='amuj logo' src={'amuj-logo.png'} width={100} height={100}></Image> */}
              <img src="/amuj-logo.svg" alt="amuj logo" className='h-[60px]' />
              
            </div>
            <div className='flex items-center'>
              <p className='px-1'>0</p>
              <img src="/cart.svg" alt="cart" className='h-[25px]' />
              <p className='px-3'>-</p>
              <p className='px-1'>NGN</p>
             
              <p className='px-[6px]'>₦0.00</p>
              <RiSearchLine size={'25'} />
            </div>
          </section>
          <br />
          <section  className='w-[1000px] m-auto  py-4'>
            <ul className={`flex justify-between ${styles.nav_list}`}>
              <li ><Link href={''}>NEW IN</Link></li>
              <li><Link href={''}>SHOP</Link></li>
              <li><Link href={''}>BRAND</Link></li>
              <li><Link href={''}>CAMPAIGN</Link></li>
              <li><Link href={''}>COMMUNITY</Link></li>
              <li><Link href={''}>CUSTOMER CARE</Link></li>
            </ul>
          </section>
        </nav>
        <nav>
          
        </nav>
      </header>
    </main>
  )
}
