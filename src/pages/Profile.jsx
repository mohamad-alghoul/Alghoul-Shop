import { useEffect,useState } from "react"
import { ProfileComponent } from '../components/profileComponent/ProfileComponent'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Loader } from "../helpers/Loader";

export const Profile = ({currentUser}) => {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

  useEffect(()=>{
    // It checks whether there is no access token in the response. If this condition is true, it means the user is not authenticated, and it navigates to the "/" route.
    onAuthStateChanged(auth, (res)=>{
      if(!res?.accessToken){
        navigate("/")
      }else{
        // If there is an access token, it sets the loading state to false.
        setLoading(false)
      }
    });
  },[])
  

  return (loading ? <Loader /> : <ProfileComponent  currentUser={currentUser} />)
}
