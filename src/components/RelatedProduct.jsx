import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from './context/contex'
import ProductItem from './ProductItem'
import Title from './Title'

function RelatedProduct({category,subCategory}) {
const {products}=useContext(ShopContext)
const [related,setRealted]=useState([])

useEffect(()=>{
    if(products.length>0){

        let CopyProduct = products.slice()
        CopyProduct=CopyProduct.filter((item)=> category === item.category)
        setRealted(CopyProduct.slice(0,5))
    }
},[products])
  return (
    <div className='my-24'>

    <div className='text-center text-3xl py-2'>
        <Title text1={"RELATED"} text2={"PRODUCTS"}/>
    </div>
         <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 my-5'>
        {
            related.map((v,i)=>{
                return <ProductItem key={i} id={v._id} price={v.price} image={v.image} name={v.name}/>
                    
            })
        }
            
      
    </div>
    </div>
  )
}

export default RelatedProduct
