import React from 'react'

const Carousel = ({ children : slideImg, slide }) => {


  return (

 <div className=' overflow-hidden w-full z-0 relative ' >
       <div style={{transform: `translateX(-${slide * 100}% )`}} className='flex w-full transition-transform ease-out duration-500 z-0 relative' > { slideImg } </div>
 </div>
  )
}

export default Carousel