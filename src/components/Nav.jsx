import { useContext, useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; // ✅ NEW
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';


function Nav() {
  let { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext);

  useEffect(() => {
    let newlist = food_items.filter(
      (item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input)
    );
    setCate(newlist);
  }, [input]);

  let items = useSelector(state => state.cart);

  return (
    <div className='w-full h-[100px] flex flex-col md:flex-row justify-between items-center px-5 md:px-8 py-3 bg-white shadow-md'>

      {/* Logo */}
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        <MdFastfood className='w-[30px] h-[30px] text-green-500' />
      </div>

      {/* ✅ NAVIGATION LINKS */}
      <div className='flex gap-6 text-green-600 font-semibold text-md mt-3 md:mt-0'>
        <Link to="/home" className="hover:text-green-800 transition-all"></Link>
        <Link to="/offers" className="hover:text-green-800 transition-all"></Link>
        <Link to="/favorites" className="hover:text-green-800 transition-all"></Link>
        <Link to="/contact" className="text-green-500 font-semibold"></Link>
      </div>

      {/* Search Bar */}
      <form className='w-[90%] md:w-[35%] h-[50px] bg-white flex items-center px-4 gap-4 rounded-md shadow-md mt-3 md:mt-0' onSubmit={(e) => e.preventDefault()}>
        <IoSearch className='text-green-500 w-[20px] h-[20px]' />
        <input
          type="text"
          placeholder='Search Items...'
          className='w-full outline-none text-[16px]'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      {/* Cart Icon */}
      <div
        className='w-[50px] h-[50px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer mt-3 md:mt-0'
        onClick={() => setShowCart(true)}
      >
        <span className='absolute top-0 right-2 text-green-500 font-bold text-[14px]'>{items.length}</span>
        <LuShoppingBag className='w-[24px] h-[24px] text-green-500' />
      </div>
    </div>
  );
}

export default Nav;