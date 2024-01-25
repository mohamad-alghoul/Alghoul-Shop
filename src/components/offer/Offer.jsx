import { menuItems } from "../../data";
import { useNavigate } from "react-router-dom";


export const Offer = () => {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <h1 className=" mb-4 text-4xl font-title">Your Location</h1>

      <div onClick={()=>navigate("/offers")} className="flex justify-between cursor-pointer">
        {menuItems.map((item) => {
          const { title, price, discount, img, id } = item;

          return (
            <div className="relative" key={id}>
              <div>
                <img className="h-60 w-96 rounded-xl" src={img} alt={title} />
              </div>
              <div className="absolute z-10 top-0 text-white">
                <p className="text-2xl text-black bg-headHover rounded-xl font-bold">{discount}</p>
              </div>
              <div className="absolute z-10 bottom-0 w-full">
                <div className="flex gap-3 justify-center items-center w-auto bg-white bg-opacity-60 p-4">
                  <p className="text-xl font-bold ">{title}</p>
                  <p className="text-2xl text-head font-bold">{price}$</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
