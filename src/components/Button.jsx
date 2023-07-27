import React from 'react'

const Button = (props) => {
  return (
    <div>
       <button type='button' className={`py-4 px-6 bg-secondary font-poppins text-black font-bold mt-5 outline-none`}>
          {props.children}
       </button>
    </div>
  )
}

export default Button
