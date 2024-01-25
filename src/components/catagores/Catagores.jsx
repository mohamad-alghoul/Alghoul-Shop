// import {useState} from 'react'
// import { menu } from "../../data"
// import { CiHeart } from "react-icons/ci";
// import { FaHeart } from "react-icons/fa";


// export const Catagores = () => {

//   const [red,setRed]= useState(true)


//   let breakfast= menu.map((restaurant)=> restaurant.items).flat().filter(((item)=> item.category ==="breakfast"))
//   let dessert = menu.map((restaurant)=> restaurant.items).flat().filter(((item)=> item.category ==="dessert"))
//   let salad = menu.map((restaurant)=> restaurant.items).flat().filter(((item)=> item.category ==="salad"))
//   let lunch = menu.map((restaurant)=> restaurant.items).flat().filter(((item)=> item.category ==="lunch"))



//   return (
//     <div className='h-auto'>
//        <div className='flex  flex-col '>
    
//      <h1 className='mt-10 mb-2 text-4xl font-title'>Breakfast :</h1>
//      <div className='flex justify-between'>
//     {breakfast.slice(0, 6).map((item,index)=>{
//       const { title, img ,} = item
     

//       return  <div className="relative " key={index}>
//               <div>
//                 <img className="h-52 w-56 rounded-xl" src={img} alt={title} />
//               </div>
//               <div className="absolute z-10 top-0 left-2 w-full">
//               {
//                 red ? <CiHeart size={40} onClick={()=> setRed(!red)}  className=" cursor-pointer "/> 
//                     : <FaHeart size={40}  onClick={()=> setRed(!red)}  className=" cursor-pointer text-red-600" />

//               }
               
//               </div>
//               <div className="absolute z-10 top-24 w-full">
//                 <div className="flex gap-3 justify-center items-center w-auto bg-white bg-opacity-60 p-4">
//                   <p className="font-bold ">{title}</p>
//                 </div>
//               </div>
                
                
//                   </div>
//     })}
//     </div>
//       </div>

//       <div className='flex  flex-col '>
    
//     <h1 className='mt-10 mb-2 text-4xl font-title'>Dessert :</h1>
//     <div className='flex justify-between'>
//    {dessert.slice(0, 6).map((item,index)=>{
//      const { title, img ,} = item
//      return  <div className="relative " key={index}>
//              <div>
//                <img className="h-52 w-56 rounded-xl" src={img} alt={title} />
//              </div>
//              <div className="absolute z-10 top-0 left-2 w-full">
//              {
//                red ? <CiHeart size={40} onClick={()=> setRed(!red)}  className=" cursor-pointer "/> 
//                    : <FaHeart size={40}  onClick={()=> setRed(!red)}  className=" cursor-pointer text-red-600" />

//              }
              
//              </div>
//              <div className="absolute z-10 top-24 w-full">
//                <div className="flex gap-3 justify-center items-center w-auto bg-white bg-opacity-60 p-4">
//                  <p className="font-bold ">{title}</p>
//                </div>
//              </div>
               
               
//                  </div>
//    })}
//    </div>
//      </div>
//      <div className='flex  flex-col '>
    
//     <h1 className='mt-10 mb-2 text-4xl font-title'>Salad :</h1>
//     <div className='flex justify-between'>
//    {salad.slice(0, 6).map((item,index)=>{
//      const { title, img ,} = item
//      return  <div className="relative " key={index}>
//              <div>
//                <img className="h-52 w-56 rounded-xl" src={img} alt={title} />
//              </div>
//              <div className="absolute z-10 top-0 left-2 w-full">
//              {
//                red ? <CiHeart size={40} onClick={()=> setRed(!red)}  className=" cursor-pointer "/> 
//                    : <FaHeart size={40}  onClick={()=> setRed(!red)}  className=" cursor-pointer text-red-600" />

//              }
              
//              </div>
//              <div className="absolute z-10 top-24 w-full">
//                <div className="flex gap-3 justify-center items-center w-auto bg-white bg-opacity-60 p-4">
//                  <p className="font-bold ">{title}</p>
//                </div>
//              </div>
               
               
//                  </div>
//    })}
//    </div>
//      </div>
//      <div className='flex  flex-col '>
    
//     <h1 className='mt-10 mb-2 text-4xl font-title'>Lunch :</h1>
//     <div className='flex justify-between'>
//    {lunch.slice(0, 6).map((item,index)=>{
//      const { title, img ,} = item
//      return  <div className="relative " key={index}>
//              <div>
//                <img className="h-52 w-56 rounded-xl" src={img} alt={title} />
//              </div>
//              <div className="absolute z-10 top-0 left-2 w-full">
//              {
//                red ? <CiHeart size={40} onClick={()=> setRed(!red)}  className=" cursor-pointer "/> 
//                    : <FaHeart size={40}  onClick={()=> setRed(!red)}  className=" cursor-pointer text-red-600" />

//              }
              
//              </div>
//              <div className="absolute z-10 top-24 w-full">
//                <div className="flex gap-3 justify-center items-center w-auto bg-white bg-opacity-60 p-4">
//                  <p className="font-bold ">{title}</p>
//                </div>
//              </div>
               
               
//                  </div>
//    })}
//    </div>
//      </div>
   
      
//     </div>
//   )
// }



import { useNavigate } from 'react-router-dom';
import { menu } from "../../data"
import {useItem} from "../../contextApI/itemContext";



export const Catagores = () => {
  const navigate = useNavigate();
  

  const {handleAddItem} = useItem();


  const handleItemClick = (id) => {
    // Use the context to set the selected item ID
    handleAddItem(id);
  };

  const onItemClick = () => {
    navigate("/favorites");
  };


  
  

const renderCategoryItems = (category) => {
  return menu
    .filter((item) => item.category === category)
    .slice(0, 3)
    .map((item) => {
     
      const { id,title, img } = item;

      return (
        <div className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform transform-gpu duration-300 border-4 hover:scale-95"  
           onClick={() => {
          handleItemClick(id);
          onItemClick();
        }}
         key={id}>
        <div >
          <img className="h-96 w-72 object-cover rounded-xl" src={img} alt={title} />
        </div>
        <div className="absolute z-10 top-2 left-2 flex gap-3">
      
        </div>
        <div className="absolute z-10 bottom-0 w-full bg-white bg-opacity-70 p-4">
          <p className="font-bold text-center">{title}</p>
        </div>
      </div>
      
      );
    });
};


  return (
    <div className="h-auto">
      {/* Render Breakfast */}
      <div className="flex flex-col">
        <h1 className="mt-10 mb-2 text-4xl font-title text-head relative py-2">Breakfast :   <span className="absolute -bottom-1 left-0 bg-black h-1 w-36"></span></h1>
        <div className="flex justify-between px-56 border-b-4 pb-2">{renderCategoryItems('breakfast')}</div>
      </div>

      {/* Render Dessert */}
      <div className="flex flex-col">
        <h1 className="mt-10 mb-2 text-4xl font-title  text-head relative py-2">Dessert :  <span className="absolute -bottom-1 left-0 bg-black h-1 w-36"></span></h1>
        <div className="flex justify-between px-56 border-b-4 pb-2">{renderCategoryItems('dessert')}</div>
      </div>

      {/* Render Salad */}
      <div className="flex flex-col">
        <h1 className="mt-10 mb-2 text-4xl font-title  text-head relative py-2">Salad :  <span className="absolute -bottom-1 left-0 bg-black h-1 w-36"></span></h1>
        <div className="flex justify-between px-56 border-b-4 pb-2">{renderCategoryItems('salad')}</div>
      </div>

      {/* Render Lunch */}
      <div className="flex flex-col">
        <h1 className="mt-10 mb-2 text-4xl font-title  text-head relative py-2">Lunch :  <span className="absolute -bottom-1 left-0 bg-black h-1 w-36"></span></h1>
        <div className="flex justify-between px-56 border-b-4 pb-2 ">{renderCategoryItems('lunch')}</div>
      </div>
    </div>
  );
};
