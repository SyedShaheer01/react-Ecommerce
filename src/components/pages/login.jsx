import React, { useState } from 'react'

function Login() {

  const [currState,setCurrState]=useState("Login")
  return (
      <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>
        {currState === "Signup"? <input type='text' className='w-full px-3 py-2 border border-gray-800'  placeholder='Name' required/>
          :''}
        <input type='email' className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
        <input type='password' className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>
        <div className='w-full flex justify-between text-sm mt-[-8px]'>

          <p className='cursor-pointer'>Forget your password?</p>
          {currState === 'Login'?
          <p onClick={()=>setCurrState("Signup")} className='cursor-pointer'>Create account?</p>
          :
          <p onClick={()=>setCurrState("Login")}  className='cursor-pointer'>Login Here</p>
          }
        </div>
          <button className='bg-black text-white p-2 pl-8 pr-8 rounded mt-5'>Submit</button>
      </form>
      
      
  )
}

export default Login
