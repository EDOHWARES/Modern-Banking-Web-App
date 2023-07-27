import React from 'react';
import { quotes } from '../assets';

const FeedbackCard = ({content, name, title, img, index}) => {
  return (
    <div className={`flex self-center justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 my-5 feedback-card ${index == 0 ? "active" : ""}`}>
      <img src={quotes} alt="" className='w-[42px] h-[24px] object-contain' />
      <p className='font-poppins font-normal leading-[32px] text-[18px] text-white my-10'>
        {content}
      </p>
      <div className='flex flex-row'>
        <img src={img} alt={img} className="w-[48px] h-[48px] rounded-full" />

        <div className='flex flex-col ml-4'>

          <h4 className='font-poppins font-semibold leading-[22px] text-[20px] text-white'>
            {name}
          </h4>

          <p className='font-poppins font-normal leading-[24px] text-[16px] text-dimWhite'>
            {title}
          </p>

        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
