import React from 'react';
import StarRating from './StarRating';

const ProductCard = ({ d }) => {
  return (
    <div className="bg-white p-5 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-xl transition-transform z-10 dark:bg-[#0A101A] dark:border-2 dark:border-white">
      <div className="flex justify-center">
        <img src={d.productImage} className="h-56" />
      </div>
      <div>
        <h1 className="font-bold text-xl">{d.productName}</h1>
        <h1 className="text-gray-400 ">{d.description}</h1>
        <h1 className="font-bold text-lg mt-2">{d.brand}</h1>
        <StarRating rating={d.ratings} />
        <div className="flex justify-between w-full items-center">
          <h1 className="text-gray-400 font-semibold">{d.category}</h1>
          <h1 className="font-bold text-lg text-blue-500">${d.price}</h1>
        </div>
        <div className="flex justify-between w-full gap-5 mt-2">
          <button className="bg-blue-500 text-white px-2 py-1 flex-1">
            Buy Now{' '}
          </button>
          <button className="text-blue-500 font-semibold border-blue-500 border-2 px-4 py-1 flex-1">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
