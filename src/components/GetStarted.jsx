import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[100px] h-[100px] md:ml-10 md:w-[140px] md:h-[140px] rounded-full bg-secondary p-[2px] cursor-pointer animate-bounce`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>

        <div className={`${styles.flexStart} flex-col`}>

          <p className='font-poppins flex flex-row font-medium text-[18px] leading-[23px]'>
            <span className='text-secondary'>Get</span>
            <img className='w-[23px] h-[23px]' src={arrowUp} alt="arrow" />
          </p>
          <p className='font-poppins flex flex-row font-medium text-[18px] leading-[23px'>
            <span className='text-secondary'>Started</span>          </p>

        </div>

      </div>
    </div>
  )
}

export default GetStarted
