import React from 'react';
import {card} from "../assets";
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nemo aperiam, dolorum suscipit incidunt natus recusandae similique consequuntur dolor deleniti velit tenetur! Nulla ut architecto fuga porro, consequuntur provident dicta.
        </p>

        <Button
        children="Get Started"
      />
      </div>
      
      <div className={layout.sectionImg}>

        <img src={card} alt="card" className='w[100%] h-[100%]' />

      </div>
    </section>
  )
}

export default CardDeal
