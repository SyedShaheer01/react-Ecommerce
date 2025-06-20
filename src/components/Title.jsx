import React from 'react'

function Title({text1,text2}) {
  return (
    <div className='inline-flex gap-2 items-center mb-3'>
        <p className='text-gray-500 text-[18px] sm:text-3xl'>{text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] lg:text-3xl bg-gray-700'></p>
      
    </div>
  )
}

export default Title
