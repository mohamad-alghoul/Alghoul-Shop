

import  { useState } from "react";
import { RegisterAPI,GoogleSignInAPI } from "../../API/Auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc"
import { FaRegUser } from "react-icons/fa";
import {ForgotPassword} from "../forgotPassword/ForgotPassword"
import { postUsersData } from "../../API/FirestoreAPI";
import { getUniqueID } from "../../helpers/getUniqueID";

export default function RegisterComponent() {
 let navigate = useNavigate();

  const [credentails, setCredentials] = useState({});

  
  const register = async () => {
    try {
      let res = await RegisterAPI(credentails.email, credentails.password);

      postUsersData({
        name:credentails?.name,
        email:credentails?.email,
        userID:getUniqueID(),
        imageLink:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    })

      localStorage.setItem("userEmail",res.user.email);
      navigate("/home");
    } catch (err) {
      console.log(err);
      toast.error("Cannot Create your Account");
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

   
   <h1 className="text-4xl font-title font-bold mb-8 text-center">Create a new Account</h1>
       <p className="text-stone-400 font-title mb-8 text-center -mt-8 ">Food for All </p>
      <div className="flex flex-col justify-center space-y-4 mb-6">
   
  
     <button onClick={googleSignIn} className= " bg-white py-2 px-4 font-title  text-black  hover:text-white rounded shadow hover:bg-blue">
      <span className="flex justify-center gap-4 font-semibold text-xl "> <FcGoogle size={30} /> Google </span>
    </button>
   
   </div>
   <hr className="hr-text mb-6" data-content="or Create a new one"></hr>
   <div className="mb-4 flex items-center" >
      <FaRegUser className="mr-2" size={25} />
        <input
          onChange={(event) =>
            setCredentials({ ...credentails, name: event.target.value })
          }
          type="name"
          className=" outline-none  w-full   p-2 border border-gray-300 rounded focus:ring focus:border-blue-300"
          placeholder="Name"
        />
        </div>
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

      <button onClick={register} className="w-full text-xl font-title py-2 px-4 bg-blue text-white rounded shadow hover:bg-blueHover">
        Sign Up
      </button>
    
  
  
    <p className="mt-2">
     
       <span className="text-sm text-blue cursor-pointer" onClick={()=> navigate("/")}>
         log in
       </span>
     </p>

     </div>
    
  </div>
  );
}
