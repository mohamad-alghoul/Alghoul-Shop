import { useState } from "react";
import {  LoginAPI,GoogleSignInAPI } from "../../API/Auth"; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc"
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import {ForgotPassword} from "../forgotPassword/ForgotPassword"


export default function LoginComponent() {
  let navigate = useNavigate();
  const [credentails, setCredentials] = useState({});

  const login = async () => {
    try {
      let res = await LoginAPI(credentails.email, credentails.password);

      localStorage.setItem("userEmail",res.user.email);
     
      toast.success("Signed In to ALGHOUL SHOP!");
        navigate("/home")
    } catch (err) {
      console.log(err);
      toast.error("Please Check your Credentials");
    }
  };
  
  const googleSignIn = () => {
    try {
    let res =  GoogleSignInAPI();
    navigate("/home");
      toast.success("Sigined In ! with Google!");
      console.log(res);
    } catch (err) {
      console.log(err);
      toast.error("Cannot Sign with google ");
    }
  }

 
 

  return (
    <div className="LoginImage bg-[url('./assets/Login.jpeg')] bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-logBG opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">

     
     <h1 className="text-4xl font-title font-bold mb-8 text-center">Log in to Account</h1>
         <p className="text-stone-400 font-title mb-8 text-center -mt-8 ">Welcome back! Select methed to log in :</p>
        <div className="flex flex-col justify-center space-y-4 mb-6">
     
    
       <button onClick={googleSignIn} className= " bg-white py-2 px-4 font-title  text-black  hover:text-white rounded shadow hover:bg-blue">
        <span className="flex justify-center gap-4 font-semibold text-xl "> <FcGoogle size={30} /> Google </span>
      </button>
     
     </div>
     <hr className="hr-text mb-6" data-content="or continue with email"></hr>
        <div className="mb-4 flex items-center" >
        <MdOutlineEmail className="mr-2" size={25} />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, email: event.target.value })
            }
            type="email"
            className=" outline-none  w-full   p-2 border border-gray-300 rounded focus:ring focus:border-blue-300"
            placeholder="Email or Phone"
          />
          </div>
          <div className="mb-6 flex items-center">
          <RiLockPasswordLine className="mr-2"size={25} />
          <input
            onChange={(event) =>
              setCredentials({ ...credentails, password: event.target.value })
            }
            type="password"
            className="w-full p-2 outline-none border border-gray-300 rounded focus:ring focus:border-blue-300"
            placeholder="Password"
          />
      </div>
       
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <input id="remember_me" type="checkbox" className="h-4 w-4 text-blue-600" />
          <label htmlFor="remember_me" className="ml-2 text-sm text-gray-600">Remember me</label>
        </div>
        <ForgotPassword />
      </div>

        <button onClick={login} className="w-full text-xl font-title py-2 px-4 bg-blue text-white rounded shadow hover:bg-blueHover">
          Log in
        </button>
      
    
    
      <p className="mt-2">
       
         <span className="text-sm text-blue cursor-pointer" onClick={()=> navigate("/register")}>
           Join now
         </span>
       </p>
 
       </div>
      
    </div>
  );
}
