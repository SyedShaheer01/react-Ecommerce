import React from 'react'

function NewsLetterBox() {
    const SubmitHandler=(e)=>{
    e.preventDefault()

    }
  return (
    <div className='text-center my-10'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vel.</p>
            <form  onSubmit={SubmitHandler}  className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input className='w-full sm:flex-1 outline-none'  required type='email' placeholder='Enter your email'/>
                <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
            </form>
    </div>
  )
}

export default NewsLetterBox
