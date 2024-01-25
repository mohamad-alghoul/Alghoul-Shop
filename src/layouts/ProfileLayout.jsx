import { Navbar } from "../components/navbar/Navbar"
import { Profile } from "../pages/Profile"
import {useMemo,useState} from 'react'
import { getCurrentUser } from "../API/FirestoreAPI";

export const ProfileLayout = () => {
  const [currentUser,setCurrentUser] = useState({});

  useMemo(()=>{
     getCurrentUser(setCurrentUser)
   },[])

   
  
    return (
      <div>
        <Navbar currentUser={currentUser}  />
        <Profile  currentUser={currentUser} />
      </div>
    )
  }
  