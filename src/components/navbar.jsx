import React, { useContext, useState } from 'react'
import {assets} from '../components/forever-assets/assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ShopContext } from './context/contex'

function Navbar() {
  const [visible,setVisible]=useState(false)
  const {showSearch,setShowSearch,getCartCount}=useContext(ShopContext)
  const navigate=useNavigate()

  return (
    <div className='flex justify-between items-center py-5 font-medium'>
      <img onClick={()=>navigate('/')} className='w-36 cursor-pointer'  src={assets.logo} alt='img'/>
      
      
        <ul className='hidden sm:flex text-sm text-gray-700 gap-10 items-center cursor-pointer'>
          <NavLink className='flex flex-col gap-1 items-center' to={'/'}>
          <p>Home</p>
          <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink className='flex flex-col gap-1 items-center' to={'/about'}>
          <p>About</p>
          <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink className='flex flex-col gap-1 items-center' to={'/collection'}>
          <p>Collection</p>
          <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
          <NavLink className='flex flex-col gap-1 items-center' to={'/contact'}>
          <p>Contact</p>
          <hr className='w-2/3 border-none h-[1.5px] bg-gray-700 hidden'/>
          </NavLink>
        </ul>

      <div className='flex gap-6 items-center'>
        <img onClick={()=>setShowSearch(!showSearch)} width={20} className='cursor-pointer' src={assets.search_icon} alt="" />
        <Link to={'/cart'} className='relative'>
              <img className='w-5 min-w-5 cursor-pointer' src={assets.cart_icon} alt="" />
              <p className='bg-black text-white absolute right-[-5px] w-4 text-center bottom-[-5px] leading-4 aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>
        <div className='group relative'>
        <Link to={'/login'}><img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" /></Link>
        <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
          <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
            <p className='cursor-pointer hover:text-black'>My Profile</p>
            <NavLink to={'/orders'}><p className='cursor-pointer hover:text-black'>Orders</p></NavLink>
            <p className='cursor-pointer hover:text-black'>Logout</p>
        </div>
        </div>
        </div>
        <img onClick={()=>setVisible(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt=''/>
      </div>
      
      {/* screens for sidebar menu */}
      
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3'>
            <img src={assets.dropdown_icon} alt='' className='h-4 rotate-180'/>
            <p className='cursor-pointer'>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 cursor-pointer border' to={'/'}>Home</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 cursor-pointer border'to={'/about'}>About</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 cursor-pointer border' to={'/collection'}>Collection</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 cursor-pointer border' to={'contact'}>Contact</NavLink>

        </div>
      </div>
    </div>
  )
}

export default Navbar
