import { useState } from "react";
import { CartItem } from "./CartItem";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BuyDitials } from "./BuyDitials";
import { ChickOut } from "./ChickOut";

export const CartComponent = () => {
  let navigate = useNavigate();
  const [numberbage, setNumberBage] = useState(1);

  let renderBage;

  if (numberbage == 1) {
    renderBage = <CartItem setNumberBage={setNumberBage} />;
  } else if (numberbage == 2) {
    renderBage = <BuyDitials setNumberBage={setNumberBage} />;
  } else if (numberbage == 3) {
    renderBage = <ChickOut setNumberBage={setNumberBage} />;
  }
 

  return (
    <div className="py-6 px-10 flex flex-col justify-between w-auto">
      <div>
        <div className="flex justify-between items-center  gap-10">
          <IoIosArrowRoundBack
            onClick={() => navigate("/home")}
            size={50}
            className=" bg-white rounded-full cursor-pointer  "
          />
          <h1 className="w-full align-center rounded-xl text-center text-4xl p-2 font-title bg-white">
            Your Card
          </h1>
        </div>

        <div className="flex w-1/2 justify-between ml-96 my-10 relative ">
     
        <button
        onClick={() => setNumberBage(1)}
        className={`py-2 px-4 font-title text-xl bg-green text-white rounded shadow hover:bg-greenHover ${
          numberbage === 1 ? "  bg-greenHover " : ""
        }`}
      >
        1
      </button>
      <button
        onClick={() => setNumberBage(2)}
        className={`py-2 px-4 font-title text-xl bg-green text-white rounded shadow hover:bg-greenHover ${
          numberbage === 2 ? "  bg-greenHover " : ""
        }`}
      >
        2
      </button>
      <button
        onClick={() => setNumberBage(3)}
        className={`py-2 px-4 font-title text-xl bg-green text-white rounded shadow hover:bg-greenHover ${
          numberbage === 3 ? " bg-greenHover  " : ""
        }`}
      >
        3
      </button>
        </div>
      </div>
      {renderBage}
    </div>
  );
};
