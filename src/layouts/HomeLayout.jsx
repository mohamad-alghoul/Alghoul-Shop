import { Navbar } from "../components/navbar/Navbar"
import { Home } from '../pages/Home';
import {useMemo,useState} from 'react'
import { getCurrentUser } from "../API/FirestoreAPI";
import { UserInfo } from "../components/userInfo/UserInfo";



export const HomeLayout = () => {
  const [currentUser,setCurrentUser] = useState({});

  useMemo(()=>{
     getCurrentUser(setCurrentUser)
   },[])

  return (
    <div>
      <Navbar currentUser={currentUser} />
      <UserInfo />
      <Home currentUser={currentUser} />
     
      
    </div>
  )
}
