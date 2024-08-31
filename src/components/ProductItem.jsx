import React from "react";

const ProductItem = ({ shoe, handleShoes }) => {
  return (
    <div className="border border-red-500 rounded-md">
      <img
        src={shoe.image}
        alt="product"
        width={300}
        height={200}
        className="cursor-pointer hover:opacity-80"
        onClick={() => {
          handleShoes(shoe);
        }}
      />
      <div className="px-3 pb-4 space-y-2">
        <h3 className="font-bold">{shoe.name}</h3>
        <p>{shoe.price}$</p>
        <button className="py-2 px-5 bg-black text-white rounded-lg hover:opacity-80">
          Add to card
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
