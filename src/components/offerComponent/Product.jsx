
import { FaLocationDot } from "react-icons/fa6";
import image from "../../assets/restaurant.jpeg";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";


export const Product = ({ title, price, discount, img, id, restaurant, desc }) => {


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
  };

  let navigate = useNavigate();


  return (
    <div
              className=" bg-white flex justify-between px-3 py-1 rounded-xl"
              key={id}
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2 border-b-2 w-full">
                  <div className="flex justify-start items-center gap-1 ">
                    <img
                      className="rounded-full w-10 h-10  border-2 border-black "
                      src={image}
                      alt={restaurant}
                    />
                    <div>
                      <h2 className="text-xl">{restaurant}</h2>
                      <span>
                        {" "}
                        <FaLocationDot className="inline" /> Location: Belin
                        (this location is static)
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <p> Opening hours : 7h-22h</p>
                  <p> Distance : 3 KM </p>
                </div>
              </div>

              <div className="flex bg-bodyBg gap-4 w-6/12 ">
                <div className="relative ">
                  <div>
                    <img
                      className="h-36 w-60 rounded-xl"
                      src={img}
                      alt={title}
                    />
                  </div>
                  <div className="absolute z-10 bottom-0 w-full">
                    <div className="flex gap-3 justify-center items-center w-auto bg-white bg-opacity-60 p-4">
                      <p className="font-bold ">{title}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-6/12 p-1 m-auto">
                  <div className="flex justify-between">
                    <span>
                      price :
                      <span className="text-xl text-head font-bold">
                        &{price}
                      </span>{" "}
                    </span>
                    <span>
                      Discount :{" "}
                      <span className="text-xl text-head font-bold">
                        {discount}
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="">{desc}</p>
                    <button
                      onClick={()=>{
                        addToCart()
                        navigate("/cart")
                      }}
                      className="m-auto text-center py-2 px-4 font-title text-xl bg-green text-white rounded shadow hover:bg-greenHover"
                    >
                      {" "}
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
  )
}
