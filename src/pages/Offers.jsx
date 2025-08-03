import React from 'react';

function Offers() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-orange-500">Today's Special Offers 🎉</h2>
      <ul className="space-y-4 text-lg text-gray-700">
        <li>🔥 20% off on all pizzas</li>
        <li>🥤 Buy 1 Get 1 Free on Cold Drinks</li>
        <li>🍔 Free fries with any burger</li>
        <li>🆓 Free delivery on orders above ₹499</li>
      </ul>
    </div>
  );
}

export default Offers;