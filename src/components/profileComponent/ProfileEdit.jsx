
import { AiOutlineClose } from "react-icons/ai";

export const ProfileEdit = ({onEdit,currentUser}) => {


  return (
    <div className="flex  justify-between bg-logBG opacity-90 p-8 rounded-lg shadow-lg  w-6/12 gap-11">
    <img className="rounded-full w-20 h-20 border-2 border-black  "  src={currentUser?.imageLink} alt="user image" />
    <div>
    <label>Name</label>
        <input
          className=" outline-none  w-full   p-2 border border-gray-300 rounded focus:ring focus:border-blue-300"
          placeholder="Name"
          name="name"
        />
          <label>Email</label>
        <input
          className=" outline-none  w-full   p-2 border border-gray-300 rounded focus:ring focus:border-blue-300"
          placeholder="Email"
          name="email"
        />
        <div className="">
        <button 
    className='py-2 px-4 font-title text-xl bg-green text-white rounded shadow hover:bg-greenHover'>
          Save
        </button>
      </div>
     </div>
     <AiOutlineClose size={40} onClick={onEdit}  />
       </div>

  )
}


