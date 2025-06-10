import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/contex'
import ProductItem from '../ProductItem'
import { assets } from '../forever-assets/assets/frontend_assets/assets'
import RelatedProduct from '../RelatedProduct'

function Product() {
  const {productId} = useParams()
  const {products,currency, addToCart}= useContext(ShopContext)
  const [productData,setProductData]=useState(false)
  const [image,setImage]=useState('')
  const [size,setSizes]=useState('')
  
  const fetchProduct=()=>{
    products.map((v,i)=>{
      if(productId === v._id){
        setProductData(v)
        setImage(v.image[0])
        return null
      }
    })
  }
  useEffect(()=>{
    fetchProduct()

  },[productId,products])
  return productData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'> 
    <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

      <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>

        
    {productData.image.map((v,i)=>{
    return <img onClick={()=>setImage(v)} key={i} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' src={v} alt=''/>
    })}
    </div>
    <div className='w-full sm:w-[80%]'>
      <img className='w-full h-auto' src={image} alt=''/>

    </div>
    </div>
    <div className='flex-1'>
      <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
      <div className='flex items-center gap-1 mt-2'>
        <img src={assets.star_icon} alt='' className='w-3 '/>
        <img src={assets.star_icon} alt='' className='w-3 '/>
        <img src={assets.star_icon} alt='' className='w-3 '/>
        <img src={assets.star_icon} alt='' className='w-3 '/>
        <img src={assets.star_dull_icon} alt='' className='w-3 '/>
        <p className='pl-2'>(122)</p>

      </div>
      <p className='mt-5 text-3xl font-med'>{currency}{productData.price}</p>
      <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
        <div  className='flex flex-col gap-4 my-8'>
          <p>Select Size</p>
          <div className='flex gap-2'>
            {
              productData.sizes.map((v,i)=>{
                return <button onClick={()=>setSizes(prev=>prev===v?"":v)} className={`border py-2 px-4 bg-gray-100 ${v === size ? 'border-orange-500':""}`} key={i}>{v}</button>

              })
            }
          </div>
        </div>
        <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
        <hr className='mt-8 sm:w-4/5'/>
        <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
          <p>100% original product.</p>
          <p>Cash on delivery is avilable on this product.</p>
          <p>Easy return and exchange policy within 7 days.</p>

        </div>
    </div>
    </div>
    <div className='mt-20'>
      <div className='flex'>
        <b className='border px-5 py-3 text-sm'>Description</b>
        <b className='border px-5 py-3 text-sm'>Reviews(122)</b>
      </div>
      <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
        <p>An e-commerce website is an online platform that facilitates the buying and selling for the customers</p>
        <p>E-commerce website typically display products or services along with detailed</p>
      </div>
    </div>

    <div>
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
    </div>
  )
  :<div className='opacity-0'></div>
}

export default Product
