import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/contex'
import Title from '../Title'
import { useEffect } from 'react'
import ProductItem from '../ProductItem'

function LatestCollection() {
    const { products } = useContext(ShopContext)
    const [latestProduct,setLatestProduct]= useState([])
    useEffect(()=>{
        setLatestProduct(products.slice(0,10))

    },[])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                In this tutorial we will create an eCommerce website / Web App using React JS and Tailwind CSS. 
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

            {latestProduct.map((v,i)=>{
                return <ProductItem key={i} id={v._id} name={v.name} category={v.category} price={v.price} image={v.image}/>
            })}
            </div>


        </div>
    )
}

export default LatestCollection
