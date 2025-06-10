import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './context/contex';
import ProductItem from './ProductItem';
import Title from './Title';

function BestSeller() {
    const [BestSeller,setBestSeller]=useState([]);
    const {products}=useContext(ShopContext)
    useEffect(()=>{
        const BestProduct= products.filter(item=>item.bestseller)
        setBestSeller(BestProduct.slice(0,5))

    },[])
  return (
    <div className='my-10'>
    <div className='text-center text-3xl py-8'>
    <Title text1={"BEST"} text2={"SELLER"}/>  
  <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
     In this tutorial we will create an eCommerce website / Web App using React JS and Tailwind CSS. 
    </p>
  </div>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
    {
        BestSeller.map((v,i)=>{
            return <ProductItem key={i} id={v._id} name={v.name} price={v.price} image={v.image} ></ProductItem>
        })
    }
    </div>
    </div>
  )
}

export default BestSeller
