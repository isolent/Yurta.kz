import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./ApartmentList.css";

function ApartmentList({ apartments }) {
  const [filterRooms, setFilterRooms] = useState('all');
  const [maxPrice, setMaxPrice] = useState(Number.POSITIVE_INFINITY);
  const [searchText, setSearchText] = useState('');

  const handleFilterChange = (event) => {
    setFilterRooms(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(Number(event.target.value));
  };

  const handleSearch = () => {
    const searchWords = searchText.trim().toLowerCase().split(' ');

    const filteredApartments = apartments.filter((apartment) => {
      const roomMatch = filterRooms === 'all' || apartment.rooms === filterRooms;
      const priceMatch = apartment.price <= maxPrice;

      const searchMatch = searchWords.every((word) =>
        apartment.name.toLowerCase().includes(word) ||
        apartment.address.toLowerCase().includes(word)
      );

      return roomMatch && priceMatch && searchMatch;
    });

    // Теперь filteredApartments содержит результаты фильтрации.
  };

  const filteredApartments = apartments.filter((apartment) => {
    const roomMatch = filterRooms === 'all' || apartment.rooms === filterRooms;
    const priceMatch = apartment.price <= maxPrice;

    const searchWords = searchText.trim().toLowerCase().split(' ');
    const searchMatch = searchWords.every((word) =>
      apartment.name.toLowerCase().includes(word) ||
      apartment.address.toLowerCase().includes(word)
    );

    return roomMatch && priceMatch && searchMatch;
  });

  return (
    <div className="apartment-list">
      <h2>List of apartments for rent</h2>
      <label>
        Filter by number of rooms:
        <select value={filterRooms} onChange={handleFilterChange} className='filterRooms'>
          <option value="all">All</option>
          <option value="1">1 room</option>
          <option value="2">2 rooms</option>
          <option value="3">3 rooms</option>
        </select>
      </label>
      <label className='maxPrice'>
        Max Price:
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => {
            // Убираем ноль в начале, если он там есть
            const value = e.target.value.replace(/^0+/g, '');
            setMaxPrice(value);
          }}
        />
      </label>

      <br />
      <label>
        <input
          type="text"
          value={searchText}
          placeholder='Search by keywords for addresses or names'
          onChange={(e) => setSearchText(e.target.value)}
        />
      </label>


      <div className="apartment-cards">
        {filteredApartments.length > 0 ? (
          filteredApartments.map((apartment) => (
            <div key={apartment.id} className="apartment-card">
              <Link to={`/apartment/${apartment.id}`}>
                <img src={apartment.image} alt={apartment.name} />
              </Link>
              <h3>{apartment.name}</h3>
              <p>Price: {apartment.price} tg. per month</p>
              <Link to={`/apartment/${apartment.id}`}>More</Link>
            </div>
          ))
        ) : (
          <p>Nothing found</p>
        )}
      </div>
    </div>
  );
}

export default ApartmentList;