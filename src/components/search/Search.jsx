import { menu } from "../../data"
import {  FaSearch   } from "react-icons/fa";



 export const Search = ({input,setInput,setResult ,setSearchClicked}) => {

  

  

  const fetchFood = (value) => {
    if (value !== "") {
      const searched = menu.filter((item) => item.title.toLowerCase().includes(value.toLowerCase())
    );
    
    console.log(searched)

      setResult(searched)
    } else {
      setResult([])
  }
  };
  


  const handleClick = () => {
    setSearchClicked(true);
    fetchFood(input);
  };
 
  
  const handleChange = (value) => {
    setInput(value);
   
   };


   return (
       <div className="mt-2 flex flex-col gap-2 items-center">
          
           <h1 className="mt-2 text-4xl font-title">Menu</h1>
          <div className="w-6/12 h-18 border-none rounded-lg p-4 shadow-md bg-white flex items-center">
             <FaSearch  size={20} className="cursor-pointer hover:text-blue" onClick={handleClick } />
            <input
             value={input}
             className="bg-transparent border-none h-full w-full text-lg  ml-2 focus:outline-none"
             placeholder="Search Food.."
             onChange={(event) => handleChange(event.target.value)}
            />

     </div>
  

    </div>
   )
 }
 
 