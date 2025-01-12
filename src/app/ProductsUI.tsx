"use client"; // Mark this component as Client

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import Image from "next/image";
import Link from "next/link";

const ProductsUI = ({ productdata }: { productdata: any[] }) => {
  return (
    <section className="text-gray-800 body-font">
      <div className="container px-5 py-16 mx-auto">
        <div className="flex flex-wrap w-full mb-12">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">
              Explore Our Products
            </h1>
            <p className="text-gray-600">
              Browse through our wide range of products with amazing discounts!
            </p>
            <div className="h-1 w-24 bg-indigo-500 rounded mt-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productdata.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: any }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product._id,
        name: product.name,
        price: product.price,
        imageURL: product.imageURL,
        quantity: 1, // Default to 1 when added to the cart
      })
    );
  };

  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="relative">
        <Image
          width={700}
          height={500}
          className="w-full h-80"
          src={product.imageURL}
          alt={product.name}
        />
        <p className="absolute top-2 left-2 bg-indigo-500 text-white text-xs px-2 py-1 rounded">
          ${product.price}
        </p>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {product.description}
        </p>
        <div className="mt-auto flex gap-2 text-[15px]">
          <button className="w-[50%] mt-4 px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600 transition duration-200">
            <Link href={`/products/${product._id}`}>View More</Link>
          </button>
          <button
            onClick={handleAddToCart}
            className="w-[50%] mt-4 px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600 transition duration-200"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsUI;
