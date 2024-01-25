

import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { onLogout } from "../../API/Auth";

export const Navbar = () => {
  let navigate = useNavigate();

  return (
    <div className='px-6 py-4 flex items-center justify-between bg-white'>
    <div className="flex items-center gap-8">
    <FaUser 
    className="text-sm  cursor-pointer "
    onClick={()=>navigate("/profile")} size={30} />
    <FaHome 
    className="text-sm cursor-pointer "
    size={30}
     onClick={()=>navigate("/home")} />
   
    </div>
    <h1 className='font-title text-4xl text-head'>ALGHOUL FOOD ...</h1>
    <div className="flex items-center gap-8">
    <button 
    onClick={()=>navigate("/cart")}
    className='py-2 px-4 font-title text-xl bg-green text-white rounded shadow hover:bg-greenHover'>
    YOUR ORDER
    </button>
   <RiLogoutBoxRFill 
   className="text-sm  cursor-pointer "
    onClick={onLogout} 
    size={30} />
    </div>
   
    </div>
  )
}
