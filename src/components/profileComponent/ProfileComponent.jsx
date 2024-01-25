import {useState} from 'react'
import { ProfileCrad } from "./ProfileCrad"
import { ProfileEdit } from "./ProfileEdit"


export const ProfileComponent = ({currentUser})=> {
  const [isEdit, setisEdit] = useState(false);

  const onEdit = () => {
    setisEdit(!isEdit);
  };


  return (
    <div className="LoginImage bg-[url('./assets/Login.jpeg')] flex items-center justify-center h-screen">
      {isEdit ? (
        <ProfileEdit currentUser={currentUser} onEdit={onEdit} />
      ) : (
        <ProfileCrad currentUser={currentUser}  onEdit={onEdit} />
      )}
    </div>
  );
}