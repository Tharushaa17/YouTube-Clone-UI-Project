import React from 'react'

const truncateText = (text, limit) => {
  const words = text.split(" ");
  if (words.length <= limit) {
    return text;
  }
  return words.slice(0, limit).join(" ") + "...";
};

const ProductCard = ({ id, title, image, price, description }) => {
  const truncatedDescription = truncateText(description, 10);
  const truncatedTitle = truncateText(title, 5);

  return (
    <div key={id} className="max-w-sm flex flex-col items-center rounded overflow-hidden shadow-lg bg-white">
      <div className="p-10 font-bold text-xl mb-2 text-center">
        {truncatedTitle}
      </div>
      <img className="p-2 w-40 h-50" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="p-2 font-bold text-xl mb-2">USD {price}</div>
        <p className="text-gray-700 text-base">{truncatedDescription}</p>
      </div>
    </div>
  );
};

export default ProductCard