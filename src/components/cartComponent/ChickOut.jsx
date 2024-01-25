import {useState} from 'react'


export const ChickOut = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address : "",     
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission
    console.log("Form submitted with data:", formData);
  };
 
  const handleConfirmation = () => {
    const isConfirmed = window.confirm("Are you sure you want to Buy?");
    
    if (isConfirmed) {
  
      console.log("User confirmed");
    } else {
   
      console.log("User canceled");
    }
  };

 
    return (
      <div className="w-10/12 mx-auto px-6 bg-white">
        <form>
        <h1 className='text-4xl font-title py-4'>Contact Information </h1>
          <div className="mb-4 ">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input 
              value={formData.name}
              onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Alica Ximrson Espana" />
          </div>
          
        
  
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input 
              value={formData.phone}
              onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="+ (799) 000 323 779" />
          </div>
  
          <div className=" mb-4">
            
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                Address
              </label>
              <input
               value={formData.phone}
              onChange={handleChange}
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Enter your delivery address" />
           
            
          </div>
  
         
          <div className="mb-4 flex justify-between">
       <div className=''>
       <span className="text-gray-700 text-sm font-bold mb-2">Order Type</span>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="radio" className="form-radio" name="orderType" value="pickup" checked />
                <span className="ml-2">Pickup</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input type="radio" className="form-radio" name="orderType" value="delivery" />
                <span className="ml-2">Delivery</span>
              </label>
            </div>
       </div>
       <div>
           <button 
              onClick={handleConfirmation}
               className='py-2 px-4 font-title text-xl bg-green text-white rounded shadow hover:bg-greenHover'>
               Confirm
            </button>
       </div>
          </div>
  
        
  
  
        </form>
      </div>
    );
}
