import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { menuItems } from "../../data";



import { Product } from "./Product";


export const OfferComponent = () => {
  let navigate = useNavigate();

  return (
    <div className="py-4 px-6">
      <div className="flex justify-between items-center  gap-10">
        <IoIosArrowRoundBack
          onClick={() => navigate("/home")}
          size={50}
          className=" bg-white rounded-full cursor-pointer  "
        />
        <h1 className="w-full align-center rounded-xl text-center text-4xl p-2 font-title bg-white">
          {" "}
          Today&lsquo;s Offer{" "}
        </h1>
      </div>
      <div className="flex flex-col gap-4  mt-2">
        {menuItems.map((item) => {
          const { title, price, discount, img, id, restaurant, desc } = item;
         

          return (
            <Product 
            key={id}  
            title={title} 
            price={price} 
            discount={discount}
             img={img}
              restaurant={restaurant}
               desc={desc}/>
           
          );
        })}
      </div>
    </div>
  );
};
