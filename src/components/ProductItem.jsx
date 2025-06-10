import { ShopContext } from './context/contex'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

function ProductItem({name,id,image,price}) {
  const {currency} = useContext(ShopContext)
  return (
    
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
         <img className='hover:scale-110 tarnsition ease-in-out' src={image[0]} alt=''/>
        </div>
        <p className='pt-3 pb-1 text-[12px]'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
      
    
  )
}

export default ProductItem
