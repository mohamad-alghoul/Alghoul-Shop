// ItemContext.js
import { createContext, useContext, useState } from 'react';



const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
 
  
  const [id, setId] = useState(undefined);

function handleAddItem(id){
  setId(id)
}


 

  return (
    <ItemContext.Provider value={{ selectedItemId:id, handleAddItem}}>
      {children}
    </ItemContext.Provider>
  );
};

export const useItem = () => {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error('useItem must be used within an ItemProvider');
  }
  return context;
};





