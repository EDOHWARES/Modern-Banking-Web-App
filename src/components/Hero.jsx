import React from 'react';
import styles from "../style.js";
import GetStarted from "./GetStarted.jsx"
import { discount, robot } from '../assets/index.js';

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>

        <div className='flex flex-row items-center py-[16px] px-[16px] bg-gradient-to-r from-gray-600 to-gray-900 rounded-3xl mb-6'>
          <img src={discount} alt="discount" className='w-[32px] h-[32]' />
          <p className={`${styles.paragraph} text-[.7rem] md:text-xl `}>
            <span className='text-white'>20%</span>
            <span className='mx-2'>Discount For</span>
            <span className='text-white mr-2'>1 Month</span>
            <span>Account</span>
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold md:text-[72px] text-[32px] text-white ss:leading-[40px] md:leading-[100px]'>
            The Next 
            <br />
            <span className='text-gradient'>Generation</span> 
            <br />
            Payment Method
          </h1>
          <div className='ss:flex md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} mt-6 md:mt-0 mb-6 md:mb-0`}>
          Our team of experts uses a methodoloy to identify the credit cards 
          most likely to fit your needs. We examine annual percentage rates, annual 
          fees.
        </p>

      </div>

      <div className='relative '>
        <img className='z-[5]' src={robot} alt="robot" />
        <div className='z-[4] mx-auto opacity-[0.5] w-[40%] absolute top-0 h-[35%] pink__gradient'></div>
        <div className='z-[3] mx-auto opacity-[0.3] w-[80%] absolute top-[50%] bottom-[50%] h-[80%] white__gradient'></div>
        <div className='z-[2] mx-auto opacity-[0.1] w-[50%] absolute bottom-0 h-[50%] blue__gradient'></div>
      </div>

    </section>
  )
}

export default Hero
