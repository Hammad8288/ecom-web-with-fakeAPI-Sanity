// "use client"; // Mark this component as a Client Component
// import Image from "next/image";
// import { useDispatch } from 'react-redux';
// import { addToCart } from '@/app/redux/cartSlice'; 
// import { client } from "@/sanity/lib/client";
// import React from "react";
// const Products = async ({ params }: { params: { productdetails: string } }) => {
//   const dispatch = useDispatch(); // Initialize the dispatch function

//   // Fetch data from Sanity
//   const query = `
//     *[_type == "product" && _id == $id][0] {
//       name, description, price,
//       discountPercentage, priceWithoutDiscount,
//       rating, ratingCount, tags, sizes,
//       "imageURL": image.asset->url, _id
//     }
//   `;

//   // Use the product ID from params
//   const productdata = await client.fetch(query, { id: params.productdetails });

//   // Handle missing product data
//   if (!productdata) {
//     return (
//       <div className="container mx-auto py-16 text-center">
//         <h1 className="text-2xl font-bold text-red-500">Product Not Found</h1>
//         <p className="text-gray-600">The requested product does not exist.</p>
//       </div>
//     );
//   }

//   // Add to Cart function
//   const handleAddToCart = () => {
//     dispatch(
//       addToCart({
//         id: productdata._id,
//         name: productdata.name,
//         price: productdata.price,
//         imageURL: productdata.imageURL,
//         quantity: 1, // Default to 1 when added to the cart
//       })
//     );
//   };

//   return (
//     <section className="text-gray-600 body-font overflow-hidden">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//           {/* Product Image */}
//           <div className="lg:w-1/2 w-full">
//             {productdata.imageURL ? (
//               <Image
//                 width={400}
//                 height={800}
//                 src={productdata.imageURL}
//                 alt={productdata.name}
//                 className="rounded"
//               />
//             ) : (
//               <div className="w-full h-96 bg-gray-200 flex items-center justify-center rounded">
//                 <span className="text-gray-500">No Image Available</span>
//               </div>
//             )}
//           </div>

//           {/* Product Details */}
//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//               {productdata.name}
//             </h1>

//             <div className="flex mb-4">
//               <span className="flex items-center">
//                 {/* Example Star Ratings */}
//                 {[...Array(5)].map((_, i) => (
//                   <svg
//                     key={i}
//                     fill={i < productdata.rating ? "currentColor" : "none"}
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     className="w-4 h-4 text-indigo-500"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                   </svg>
//                 ))}
//                 <span className="text-gray-600 ml-3">
//                   {productdata.ratingCount} Reviews
//                 </span>
//               </span>
//             </div>

//             <p className="leading-relaxed">{productdata.description}</p>
//             <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
//               <div className="flex">
//                 <span className="mr-3">Color</span>
//                 <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
//                 <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none" />
//                 <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none" />
//               </div>
//               <div className="flex ml-6 items-center">
//                 <span className="mr-3">Size</span>
//                 <div className="relative">
//                   <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
//                     {productdata.sizes?.map((size: string) => (
//                       <option key={size}>{size}</option>
//                     ))}
//                   </select>
//                   <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
//                     <svg
//                       fill="none"
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       className="w-4 h-4"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M6 9l6 6 6-6" />
//                     </svg>
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex">
//               <span className="title-font font-medium text-2xl text-gray-900">
//                 ${productdata.price}
//               </span>
//               <button
//                 onClick={handleAddToCart}
//                 className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;


import { client } from "@/sanity/lib/client";
import ProductsUI from "../../ProductUIDynamic";

const ProductsPage = async ({ params }: { params: { productdetails: string } }) => {
  // Fetch product data from Sanity
  const query = `
    *[_type == "product" && _id == $id][0] {
      name, description, price,
      discountPercentage, priceWithoutDiscount,
      rating, ratingCount, tags, sizes,
      "imageURL": image.asset->url, _id
    }
  `;

  const productdata = await client.fetch(query, { id: params.productdetails });

  // Pass the data to the Client Component
  return <ProductsUI productdata={productdata} />;
};

export default ProductsPage;
