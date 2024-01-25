
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

export const MapCartItem = ({ title, quantity, total, price, id,img }) => {

  const dispatch = useDispatch();
  const incrementCartItem = () => {
    dispatch(
      cartActions.addToCart({
        title,
        id,
        price,
        img
      })
    );
  };
  const decrementCartItems = () => {
    dispatch(cartActions.removeFromCart(id));
  }



  return (
  
    <div className="flex justify-start  py-4 border-b-4 ">
      <div className="mr-4">
        <img src={img} alt={title} className="w-48 h-48 object-cover rounded" />
      </div>
      <div className='flex flex-col justify-between p-1 w-1/2'>
          <h2 className="text-2xl font-bold text-head font-title">{title}</h2>
          
          <p className="my-4 flex items-center justify-between">
            <span className='text-black-500 text-lg'>Price :</span> 
             <span className='font-bold text-2xl' >${price}</span>
          </p>
          <div className="flex items-center justify-between">
            <p className="font-bold  text-lg">x{quantity}</p>
            <div>
            <button onClick={decrementCartItems} className="px-2  p-1 bg-gray-500 text-black rounded mr-2">
            -
            </button>
            <button onClick={incrementCartItem} className="px-2  p-1 bg-gray-500 text-white rounded">
             +
           </button>
            </div>
         </div>
  
      </div>
     
    </div>
   

  )
}
