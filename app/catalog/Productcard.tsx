import React from 'react';

interface ProductCard {
  image: string;
  title: string;
}

const ProductCard: React.FC<ProductCard> = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={image} alt={title} className="w-36 h-36 md:w-48 md:h-48 object-cover" />
      <p className="mt-4 text-sm sm:text-md md:text-lg font-medium text-secondary">{title}</p>
    </div>
  );
};

export default ProductCard;
