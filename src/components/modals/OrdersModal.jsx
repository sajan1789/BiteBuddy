import React from "react";
import { useSelector } from "react-redux";

const OrdersModal = ({ isOpen, onClose }) => {
  const orders = useSelector((state) => state.orders.orderHistory);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[60%] overflow-y-auto max-h-[90%]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-700">Order History</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 text-2xl font-bold"
          >
            ×
          </button>
        </div>
        {orders.length === 0 ? (
          <p className="text-gray-500 text-center">No orders placed yet.</p>
        ) : (
          orders.map((order, index) => {
            const orderTime = new Date(order.timestamp);
            const deliveryTime = new Date(orderTime.getTime() + 30 * 60000); // Add 30 minutes

            return (
              <div
                key={index}
                className="mb-6 p-6 border rounded-lg shadow-md bg-gray-50"
              >
                {/* Order Timestamp */}
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Order Placed At: </span>
                  {orderTime.toLocaleString()}
                </p>

                {/* Expected Delivery Time */}
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Expected Delivery: </span>
                  {deliveryTime.toLocaleString()}
                </p>

                {/* Delivery Address */}
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Delivery Address: </span>
                  {`${order.address.flatNumber}, ${order.address.street}, ${order.address.city}, ${order.address.state} - ${order.address.pincode}`}
                </p>

                {/* Delivery Charge and Total Amount */}
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Delivery Charge: </span>₹40
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">Total Amount: </span>₹
                  {order.total.toFixed(2)}
                </p>

                {/* Order Status Progress Line */}
                <div className="mb-4">
                  <h3 className="text-gray-700 font-semibold mb-2">
                    Order Status:
                  </h3>
                  <div className="relative flex items-center">
                    {/* Progress Line */}
                    <div className="h-1 bg-gray-300 w-full absolute top-1/2 transform -translate-y-1/2 z-0"></div>
                    {/* Green Circles */}
                    <div className="relative z-10  w-full ">
                      <div className="flex items-start space-x-6 justify-between">
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-green-500 mt-4"></div>
                          <p className="text-sm text-gray-600 ">
                            Order Placed
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-green-500 mt-4" ></div>
                          <p className="text-sm text-gray-600 ">
                            Order Confirme
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-gray-300 mt-4"></div>
                          <p className="text-sm text-gray-600">
                            Out for Delivery
                          </p>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 rounded-full bg-gray-300 mt-4"></div>
                          <p className="text-sm text-gray-600 ">
                            Delivered
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Items */}
                <h3 className="text-gray-700 font-semibold mb-2">Items:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {order.cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center border rounded-lg p-3 bg-white shadow-sm"
                    >
                      {/* Food Image */}
                      <img
                        src={item.photo}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md mr-4"
                      />
                      <div>
                        <p className="text-gray-800 font-semibold">
                          {item.name}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {item.description}
                        </p>
                        <p className="text-gray-700 text-sm">
                          Quantity: {item.qnty}
                        </p>
                        <p className="text-gray-700 text-sm">
                          Price: ₹{item.price*40} x {item.qnty} = ₹
                          {(item.price *40* item.qnty).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default OrdersModal;
