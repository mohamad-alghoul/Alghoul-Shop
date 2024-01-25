import {useState} from 'react'

export const BuyDitials = ({setNumberBage}) => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    streetNumber: "",
    buildingFloor: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your checkout logic here
    console.log("Form submitted with data:", formData);
  };

  return (
    <form
    className="w-10/12 mx-auto bg-white rounded-lg overflow-hidden shadow-lg my-8 p-6"
    onSubmit={handleSubmit}
  >
    <h2 className="text-2xl font-bold mb-4 font-title text-head">Checkout</h2>
    <div className="mb-4">
      <label htmlFor="name" className="text-gray-700 mb-2 block">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="text-gray-700 mb-2 block">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="phone" className="text-gray-700 mb-2 block">
        Phone Number:
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="streetNumber" className="text-gray-700 mb-2 block">
        Street Number:
      </label>
      <input
        type="text"
        id="streetNumber"
        name="streetNumber"
        value={formData.streetNumber}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="buildingFloor" className="text-gray-700 mb-2 block">
        Building Floor:
      </label>
      <input
        type="text"
        id="buildingFloor"
        name="buildingFloor"
        value={formData.buildingFloor}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />
    </div>
    <div className="mb-4 flex">
      <div className="w-1/2 mr-2">
        <label htmlFor="cardNumber" className="text-gray-700 mb-2 block">
          Card Number:
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleChange}
          className="w-full border p-2"
          required
        />
      </div>
      <div className="w-1/2 ml-2">
        <label htmlFor="expiryDate" className="text-gray-700 mb-2 block">
          Expiry Date:
        </label>
        <input
          type="text"
          id="expiryDate"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          placeholder="MM/YY"
          className="w-full border p-2"
          required
        />
      </div>
    </div>
    <div className="mb-4">
      <label htmlFor="cvv" className="text-gray-700 mb-2 block">
        CVV:
      </label>
      <input
        type="text"
        id="cvv"
        name="cvv"
        value={formData.cvv}
        onChange={handleChange}
        className="w-full border p-2"
        required
      />
    </div>
    <button
      onClick={() => setNumberBage(3)}
      className="py-2 px-4 font-title text-xl bg-green text-white rounded shadow hover:bg-greenHover"
    >
      PROCEED TO BUY
    </button>
  </form>
  );
}
