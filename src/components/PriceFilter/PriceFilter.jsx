import React, { useState } from 'react';

const PriceFilter = () => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [priceRange, setPriceRange] = useState([0, 100]);

    const handleMinPriceChange = (event) => {
        const value = parseInt(event.target.value);
        setMinPrice(value);
        if (value > priceRange[1]) {
            setPriceRange([value, value]);
        } else {
            setPriceRange([value, priceRange[1]]);
        }
    };

    const handleMaxPriceChange = (event) => {
        const value = parseInt(event.target.value);
        setMaxPrice(value);
        if (value < priceRange[0]) {
            setPriceRange([value, value]);
        } else {
            setPriceRange([priceRange[0], value]);
        }
    };

    return (
        <div className="w-full mx-auto bg-white rounded-md shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Price Range</h2>
            <div className="price_range flex flex-row">
                <label htmlFor="minPrice" className="block mb-2">Min Price:</label>
                <input
                    id="minPrice"
                    type="number"
                    className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                />
                <label htmlFor="maxPrice" className="block mb-2">Max Price:</label>
                <input
                    id="maxPrice"
                    type="number"
                    className="w-full px-3 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                />
            </div>
            <div className="price_range">
                <input
                    id="priceRange"
                    type="range"
                    min="0"
                    max="100"
                    className="w-full h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={priceRange[0]}
                    onChange={handleMinPriceChange}
                />
                <input
                    id="priceRange"
                    type="range"
                    min="0"
                    max="100"
                    className="w-full h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={priceRange[1]}
                    onChange={handleMaxPriceChange}
                />
            </div>

        </div>
    );
};

export default PriceFilter;
