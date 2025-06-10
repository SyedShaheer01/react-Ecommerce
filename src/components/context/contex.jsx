import { createContext, useEffect, useState } from "react";
import { products } from "../forever-assets/assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext()

const ShopProvide=(props)=>{
    const [search ,setSearch]=useState("")
    const [showSearch ,setShowSearch]=useState(false)
    const [cartItems, setCartItems]=useState({})


    let currency= '$'
    let delivery_fee=10
    const navigate=useNavigate()

    const addToCart = async (itemId,size)=>{

        let cartData=structuredClone(cartItems)
        if(!size){
            toast.error("Select the size!")
            return null
        }
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1
            }
            else{
                cartData[itemId][size] =1

            }

        }
        else{
            cartData[itemId]={}
            cartData[itemId][size]=1

        }
        
        setCartItems(cartData)
        toast.success("Product added to cart!")
      
}

// const removeCart=(itemId,size)=>{
//     let cartData=structuredClone(cartItems)
//         if(cartData[itemId]){
//             if(cartData[itemId][size]){
//                 cartData[itemId][size]-=1
//             }
//             // else{
//             //     cartData[itemId][size] =1

//             // }

//         }
//         else{
//             cartData[itemId]={}
//             // cartData[itemId][size]={}

//         }
        
//         setCartItems(cartData)


// }

const updQuantity=(itemId,size,quantity)=>{
let cartData= structuredClone(cartItems)
cartData[itemId][size]=quantity
setCartItems(cartData)
}

const getCartCount=()=>{
    let cartTotal=0
  for(const items in cartItems){
    for(const item in cartItems[items]){
    try {
        if(cartItems[items][item]>0){
            cartTotal+=cartItems[items][item]

        }
        
    } catch (error) {
        console.log(error)
        
    }
    }
  }
  return cartTotal
}

const getTotalAmount = () =>{

    let totalAmount = 0

    for(const items in cartItems){
             let itemInfo = products.find((product) => product._id === items)
             for(const item in cartItems[items]){

             try {
                if(cartItems[items][item]>0){

                    totalAmount += itemInfo && itemInfo.price*cartItems[items][item]
                }
                
             } catch (error) {
                
             }
            }
            //  console.log(itemInfo)
             
             
             
             
            
            
            
        }
        return totalAmount;
}



// useEffect(()=>{
//     console.log(cartItems)
// },[cartItems])


    const value={
        products,
        currency,
        delivery_fee,
        search,
        setSearch,showSearch,setShowSearch,addToCart,cartItems,setCartItems,getCartCount,updQuantity,getTotalAmount,navigate
    }
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopProvide
