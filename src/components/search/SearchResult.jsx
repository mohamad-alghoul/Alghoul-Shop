import {useItem} from "../../contextApI/itemContext";
import { useNavigate } from 'react-router-dom';


export const SearchResult = ({ title,img ,id}) =>{
  const navigate = useNavigate();
  const {handleAddItem} = useItem();



 


  const handleItemClick = (id) => {
    // Use the context to set the selected item ID
    handleAddItem(id);
  };

  const onItemClick = () => {
    navigate("/favorites");
  };



  return (
   


  <div className="relative cursor-pointer" onClick={() => {
    handleItemClick(id);
    onItemClick();
  }}>
              <div>
                <img className="h-56 w-60 rounded-xl" src={img} alt={title} />
              </div>
              <div className="absolute z-10 top-24 w-full">
                <div className="flex gap-3 justify-center items-center w-auto bg-white bg-opacity-60 p-4">
                  <p className="font-bold ">{title}</p>
                </div>
              </div>
    </div>
  );
};

