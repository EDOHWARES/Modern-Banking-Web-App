import React from 'react';
import {stats} from "../constants/index.js";
import styles from "../style.js"

const Stats = () => {



  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 text-white`}>
      {stats.map((stat, index) => (
        <div key={stat.id} className='flex font-poppins justify-start  items-center mb-[2rem] md:mb-0 space-x-2 mr-[2rem] '>
          <h1 className='font-bold text-2xl md:text-5xl'>{stat.value}</h1>
          <span className='font-normal text-gradient text-xl md:text-2xl'>{stat.title}</span>
        </div>
        
      ))}
    </section>
  )
}

export default Stats
