import React from 'react';
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toggleFavorite } from '../redux/favSlice';
import { toast } from 'react-toastify';

function Card({ name, image, id, price, type }) {
  const dispatch = useDispatch();

  // Get favorites from Redux state
  const favorites = useSelector(state => state.favorites);

  // Check if this item is already in favorites
  const isFav = favorites.some(item => item.id === id);

  return (
    <div className='relative w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300'>

      {/* ❤ Favorite toggle button */}
      <button
        className="absolute top-3 right-3 text-2xl"
        onClick={() => dispatch(toggleFavorite({ id, name, image, price, type }))}
      >
        {isFav ? "❤" : "🤍"}
      </button>

      {/* Food image */}
      <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
        <img src={image} alt={name} className='object-cover w-full h-full' />
      </div>

      {/* Food name */}
      <div className='text-2xl font-semibold'>
        {name}
      </div>

      {/* Price and Veg/Non-Veg tag */}
      <div className='w-full flex justify-between items-center'>
        <div className='text-lg font-bold text-green-500'>Rs {price}/-</div>
        <div className='flex justify-center items-center gap-2 text-green-500 text-lg font-semibold'>
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>

      {/* Add to Cart button */}
      <button
        className='w-full p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all'
        onClick={() => {
          dispatch(AddItem({ id, name, price, image, qty: 1 }));
          toast.success("Item added to cart!");
        }}
      >
        Add me!
      </button>
    </div>
  );
}

export default Card;