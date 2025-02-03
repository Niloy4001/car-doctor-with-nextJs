import React from 'react'

const Heading = ({top,middle,bottom}) => {
  return (
    <div>
        <h1 className='text-center font-bold text-xl text-[#FF3811] mb-5'>{top}</h1>
        <h1 className='text-center font-bold text-5xl text-[#151515] mb-5'>{middle}</h1>
        <h1 className='text-center font-normal text-base text-[#737373] mb-12'>{bottom}</h1>
    </div>
  )
}

export default Heading