import { Navbar } from "../components/navbar/Navbar"
import {useMemo,useState} from 'react'
import { getCurrentUser } from "../API/FirestoreAPI";
import { UserInfo } from "../components/userInfo/UserInfo";
import{Favorites} from "../pages/Favorites"




export const FavoritesLayout = () => {
  const [currentUser,setCurrentUser] = useState({});

  useMemo(()=>{
     getCurrentUser(setCurrentUser)
   },[])

  return (
    <div>
      <Navbar currentUser={currentUser} />
      <UserInfo />
     <Favorites />
  
    </div>
  )
}
