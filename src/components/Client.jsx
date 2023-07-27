import React from 'react';
import { clients } from '../constants';
import styles from '../style';

const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-1 ${styles.flexCenter}`}>
            <img src={client.logo} alt="client" className='sm:w-[192px] w-[100px]' />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Client
