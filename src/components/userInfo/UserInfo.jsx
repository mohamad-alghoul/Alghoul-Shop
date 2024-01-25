import {useMemo,useState} from 'react'
import { getCurrentUser } from "../../API/FirestoreAPI";
import { FaLocationDot } from "react-icons/fa6";

export const UserInfo = () => {
  const [currentUser,setCurrentUser] = useState({});

  useMemo(()=>{
     getCurrentUser(setCurrentUser)
   },[])


  return (
    <div className='flex justify-start items-center gap-10 px-6 py-4'>
     <img className="rounded-full w-20 h-20  border-2 border-black "  src={currentUser?.imageLink} alt="user image" />

   <div>
   <h2 className='text-4xl font-title'>{currentUser?.name}</h2>
    <span> <FaLocationDot className='inline' /> Location: Belin (this location is static)</span>
   </div>
  </div>
  )
}
