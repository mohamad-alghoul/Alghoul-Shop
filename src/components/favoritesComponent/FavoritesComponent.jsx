// FavoritesLayout.js
import { useEffect, useState } from "react";
import { menu } from "../../data";
import { useItem } from "../../contextApI/itemContext";
import { Footer } from "../footer/Footer";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { Button } from "./Button";

export const FavoritesComponent = () => {
  const [favoriteItem, setFavoriteItem] = useState([]);
  const { selectedItemId } = useItem();
  let navigate = useNavigate();

  const fetchFavoriteItem = () => {
    const foundItem = menu.find((item) => item.id === selectedItemId);

    setFavoriteItem(foundItem);
  };

  useEffect(() => {
    fetchFavoriteItem();
  }, [selectedItemId]);

  if (!favoriteItem) {
    return <div>Item not found in favorites</div>;
  }

  const { title, img, restaurant, category, price, desc, id } = favoriteItem;

  return (
    <>
      <div className="flex justify-between items-center  gap-10">
        <IoIosArrowRoundBack
          onClick={() => navigate("/home")}
          size={50}
          className=" bg-white rounded-full cursor-pointer  "
        />
        <h1 className="w-full align-center rounded-xl text-center text-4xl p-2 font-title bg-white">
          Your Favorite
        </h1>
      </div>
      <div className="mt-20 mb-32 flex items-center flex-col h-full">
        <div className=" bg-white h-10/12 w-8/12 rounded-md overflow-hidden shadow-md flex">
          <div className="w-6/12">
            <img
              className=" object-cover"
              src={img}
              alt={title}
              style={{ width: "400px", height: "410px" }}
            />
          </div>
          <div className="w-full p-10  flex flex-col justify-between">
            <h1 className="bg-greenHover font-bold text-white text-2xl rounded-sm uppercase  p-2">
              {category}
            </h1>
            <h1 className="  text-xl font-bold text-end">{restaurant}</h1>
            <p className="  text-4xl font-bold text-head font-title">
              {title} :
            </p>
            <p className="  text-gray-600 w-auto text-lg">{desc}</p>
            <div className="flex items-center justify-between mt-2 ">
              <span className="text-xl font-bold text-head">${price}</span>
              <Button
                title={title}
                img={img}
                restaurant={restaurant}
                category={category}
                price={price}
                desc={desc}
                id={id}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
