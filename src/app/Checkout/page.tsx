"use client";

import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { updateQuantity, removeFromCart } from "@/app/redux/cartSlice";

const Checkout = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total: number, item: any) => total + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id: string, type: string) => {
    dispatch(updateQuantity({ id, type }));
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">
          Your cart is empty. <Link href="/products" className="underline underline-offset-2">Click here to back to add items in the Cart.</Link>
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item: any) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <Image
                    width={100}
                    height={100}
                    src={item.imageURL}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      Price: ${item.price}
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, "decrease")}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                      <button
                        onClick={() => handleQuantityChange(item.id, "increase")}
                        className="px-2 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="font-medium text-lg">
                      ${item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Section */}
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="font-medium">${totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Shipping</p>
                <p className="font-medium">Free</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Tax</p>
                <p className="font-medium">Included</p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between font-bold text-lg">
              <p>Total</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>

            <button className="w-full mt-6 px-4 py-2 bg-indigo-500 text-white font-medium rounded hover:bg-indigo-600 transition duration-200">
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
