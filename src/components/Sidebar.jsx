import React, { useState } from 'react';
import { RxCrossCircled } from 'react-icons/rx';

const Sidebar = ({ onFilter, isOpen, setOpen }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const updateMinPrice = e => {
    setMinPrice(e.target.value);
  };

  const updateMaxPrice = e => {
    setMaxPrice(e.target.value);
  };

  const handleBrandChange = e => {
    const { value, checked } = e.target;
    setSelectedBrands(prev =>
      checked ? [...prev, value] : prev.filter(brand => brand !== value)
    );
  };

  const handleCategoryChange = e => {
    const { value, checked } = e.target;
    setSelectedCategories(prev =>
      checked ? [...prev, value] : prev.filter(category => category !== value)
    );
  };

  const applyFilters = e => {
    e.preventDefault();
    onFilter({
      minPrice,
      maxPrice,
      brands: selectedBrands,
      categories: selectedCategories,
    });
  };

  return (
    <section
      className={`z-50 lg:z-0 fixed min-h-screen dark:bg-[#0A101A]   lg:relative top-0 left-0 w-72  bg-white   border-2  transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full '
      } lg:translate-x-0 lg:w-72 lg:static lg:border-0 lg:bg-transparent  lg:px-3 lg:pt-6 lg:mt-24 `}
    >
      <div className="lg:border-2 bg-white dark:bg-[#0A101A]  h-full w-full p-2">
        <form onSubmit={applyFilters}>
          <div className="flex w-full justify-between items-center">
            <h1 className="font-bold text-xl">Filter</h1>
            <RxCrossCircled
              className="lg:hidden text-xl text-red-500"
              onClick={() => {
                setOpen(!isOpen);
              }}
            />
          </div>

          {/* Price Range */}
          <h2 className="text-lg mt-3 font-bold">Price Range</h2>
          <div className="w-full">
            <div className="flex items-center mb-2 dark:text-black">
              <input
                type="number"
                className="w-1/2 px-2 py-1 border rounded"
                min="0"
                value={minPrice}
                onChange={updateMinPrice}
                placeholder="Min Price"
              />
              <span className="mx-2">-</span>
              <input
                type="number"
                className="w-1/2 px-2 py-1 border rounded"
                max="1000"
                value={maxPrice}
                onChange={updateMaxPrice}
                placeholder="Max Price"
              />
            </div>
          </div>

          <hr />

          {/* Brand */}
          <h2 className="text-lg mt-3 font-bold mb-2">Brand</h2>
          <div className="mb-3">
            {['SoundPro', 'GamerX', 'TechWear', 'VisionMax'].map(brand => (
              <div key={brand}>
                <input
                  type="checkbox"
                  value={brand}
                  onChange={handleBrandChange}
                />{' '}
                <span className="font-semibold ml-2">{brand}</span>
              </div>
            ))}
          </div>

          <hr />

          {/* Category */}
          <h2 className="text-lg mt-3 font-bold mb-2">Category</h2>
          <div>
            {[
              'Audio',
              'Electronics',
              'Wearables',
              'Home Entertainment',
              'Accessories',
            ].map(category => (
              <div key={category}>
                <input
                  type="checkbox"
                  value={category}
                  onChange={handleCategoryChange}
                />{' '}
                <span className="font-semibold ml-2">{category}</span>
              </div>
            ))}
          </div>

          <input
            type="submit"
            value="Apply"
            className="bg-blue-500 px-3 py-1 text-white mt-2"
          />
        </form>
      </div>
    </section>
  );
};

export default Sidebar;
