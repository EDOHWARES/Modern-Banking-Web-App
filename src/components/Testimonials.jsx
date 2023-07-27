import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] rounded-full blue__gradient'></div>
      <div className={`w-full flex justify-between items-center flex-col md:flex-row sm:mb-16 mb-6 relative z-[1]`}>
        <h1 className={styles.heading2}>
          What are people <br className='hidden md:block' />  saying about us
        </h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everthing you need to accept card payments and grow your 
            business anywhere on the planet.
          </p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row mx-auto w-full feedback-container relative z-[1]'>
        {feedback.map((feed, index) => (
          <FeedbackCard
            key={feed.id}
            {... feed}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
