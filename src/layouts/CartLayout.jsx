import { Navbar } from "../components/navbar/Navbar"
import {useMemo,useState} from 'react'
import { getCurrentUser } from "../API/FirestoreAPI";
import { UserInfo } from "../components/userInfo/UserInfo";
import { Cart }  from "../pages/Cart";




export const CartLayout = () => {
  const [currentUser,setCurrentUser] = useState({});

  useMemo(()=>{
     getCurrentUser(setCurrentUser)
   },[])

  return (
    <div>
      <Navbar currentUser={currentUser} />
      <UserInfo />
      <Cart />
  
    </div>
  )
}
