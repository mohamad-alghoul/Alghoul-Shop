import React from 'react'
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";


export const Button = ({ title, img, restaurant, category, price, desc, id }) => {

  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        title,
        id,
        price,
        img,
        restaurant,
        desc
      })
    );
  }

  let navigate = useNavigate();



  return (
    <button
     onClick={()=>{
                        addToCart()
                        navigate("/cart")
                      }}
     className='py-2 px-4 font-title text-xl bg-green text-white rounded shadow hover:bg-greenHover'
     >Buy Now</button>
  )
}
