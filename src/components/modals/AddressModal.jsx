import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddress } from "../../redux/addressSlice";


const AddressModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [address, setAddressState] = useState({
    flatNumber: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [error, setError] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressState({ ...address, [name]: value });
  };

  const handleSave = () => {
    const { flatNumber, street, city, state, pincode } = address;
    if (!flatNumber || !street || !city || !state || !pincode) {
      setError("All fields are required!");
      return;
    }
    setError("");
    dispatch(setAddress(address)); // Dispatch the address to Redux
    onClose();
  };

  const handleStateSelect = (state) => {
    setAddressState({ ...address, state });
    setIsDropdownOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Enter Delivery Address</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <div className="space-y-4">
          <input
            type="text"
            name="flatNumber"
            placeholder="Flat Number"
            value={address.flatNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="street"
            placeholder="Street/Locality"
            value={address.street}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="relative">
            <button
              className="w-full border border-gray-300 rounded-md p-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {address.state || "Select State"}
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 left-0 top-12 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-40 overflow-y-auto">
                {states.map((state, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2 hover:bg-blue-100"
                    onClick={() => handleStateSelect(state)}
                  >
                    {state}
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={address.pincode}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
            onClick={handleSave}
          >
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;
