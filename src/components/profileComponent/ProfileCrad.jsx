import { HiOutlinePencil } from "react-icons/hi";


export const ProfileCrad = ({onEdit,currentUser}) => {
  console.log(currentUser)

  return (
  <div className="flex justify-between bg-logBG opacity-90 p-8 rounded-lg  w-6/12  shadow-lg   gap-11">

 <img className="rounded-full w-20 h-20  border-2 border-black "  src={currentUser?.imageLink} alt="user image" />
 <div>
      <h2 className="text-2xl" >{currentUser?.name}</h2>
      <p className="">{currentUser?.email}</p>
  </div>
      <HiOutlinePencil size={20}  onClick={onEdit} />
    </div>
  
  )
}
