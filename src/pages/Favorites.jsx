import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../components/Card';

function Favorites() {
  const favorites = useSelector(state => state.favorites);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-green-600">Your Favorite Dishes ❤</h2>

      {favorites.length === 0 ? (
        <p className="text-gray-600 text-lg">You haven’t added any favorites yet.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {favorites.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              type={item.type}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;