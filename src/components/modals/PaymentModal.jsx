import React, { useState } from "react";

const PaymentModal = ({ isOpen, onClose, onPayment }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cvv: "",
    expiryDate: "",
  });
  const [upiNumber, setUpiNumber] = useState("");
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validateCardDetails = () => {
    const newErrors = {};
    const { cardNumber, cvv, expiryDate } = cardDetails;

    // Validate card number (16 digits with spaces)
    if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits.";
    }

    // Validate CVV (3 digits)
    if (!/^\d{3}$/.test(cvv)) {
      newErrors.cvv = "CVV must be 3 digits.";
    }

    // Validate expiry date (MM/YY format)
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      newErrors.expiryDate = "Expiry date must be in MM/YY format.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateUPI = () => {
    const newErrors = {};
    // Validate UPI ID format
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+$/.test(upiNumber)) {
      newErrors.upiNumber = "Please enter a valid UPI ID (e.g., username@bank).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = () => {
    if (paymentMethod === "card" && !validateCardDetails()) {
      return;
    }

    if (paymentMethod === "upi" && !validateUPI()) {
      return;
    }

    // Pass payment info to the parent
    onPayment({ paymentMethod, cardDetails, upiNumber });
    onClose();
  };

  const formatCardNumber = (value) => {
    // Remove all non-digit characters
    const rawValue = value.replace(/\D/g, "");
    // Insert spaces every 4 digits
    const formattedValue = rawValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    return formattedValue.trim();
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setCardDetails({ ...cardDetails, cardNumber: formatted });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Select Payment Method</h2>

        <div className="space-y-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Cash on Delivery
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            Card Payment
          </label>

          {paymentMethod === "card" && (
            <div className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Card Number (1234 5678 9101 1121)"
                  value={cardDetails.cardNumber}
                  onChange={handleCardNumberChange}
                  maxLength={19} // 16 digits + 3 spaces
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
                    errors.cardNumber ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="CVV"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value.replace(/\D/g, "") })}
                  maxLength={3}
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
                    errors.cvv ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Expiry Date (MM/YY)"
                  value={cardDetails.expiryDate}
                  onChange={(e) =>
                    setCardDetails({
                      ...cardDetails,
                      expiryDate: e.target.value.replace(/[^0-9/]/g, "").slice(0, 5),
                    })
                  }
                  maxLength={5}
                  className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
                    errors.expiryDate ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  }`}
                />
                {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate}</p>}
              </div>
            </div>
          )}

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="upi"
              checked={paymentMethod === "upi"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            UPI
          </label>

          {paymentMethod === "upi" && (
            <div>
              <input
                type="text"
                placeholder="Enter UPI ID (e.g., username@bank)"
                value={upiNumber}
                onChange={(e) => setUpiNumber(e.target.value)}
                className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${
                  errors.upiNumber ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {errors.upiNumber && <p className="text-red-500 text-sm">{errors.upiNumber}</p>}
            </div>
          )}
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
            onClick={handlePayment}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
