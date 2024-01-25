
import { useSelector } from "react-redux";

import { MapCartItem } from './MapCartItem';

export const CartItem = ({setNumberBage}) => {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const totalPrice = useSelector((state) => state.cart.totalPrice);


  return (
  <div className="flex gap-5">
     <ul className="w-full">
     {cartItems.map((item) => {
      return  <li key={item.id} >
        {" "}
        <MapCartItem 
        key={item.id}
          quantity={item.quantity}
          id={item.id}
          price={item.price}
          total={item.totalPrice}
          title={item.title}
          img={item.img}
        />{" "}
      </li>
     })}

   </ul>
   <div className=" flex flex-col justify-between bg-white h-80 p-6 rounded-xl shadow-xl w-80 mt-20 mr-20">
    <h1 className="text-xl font-title font-bold ">Total Price</h1>
    <h1 className="mt-10 text-2xl font-title font-bold text-head" > {totalPrice.toFixed(2)} $</h1>
    <button 
    onClick={()=>setNumberBage(2)}
    className='py-2 px-4 font-title text-xl bg-green text-white rounded shadow hover:bg-greenHover'>
    PROCEED TO BUY 
    </button>
   </div>
  </div>



  );
}
