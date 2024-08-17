import React, { useState } from 'react';

const Sidebar = () => {
  const [price, setPrice] = useState(10);

  const updatePrice = value => {
    setPrice(value);
  };

  return (
    <section className="w-72 px-3 pt-6 mt-24 min-h-screen">
      <div className="border-2 bg-white h-full w-full p-2">
        <form>
        <h1 className="font-bold text-xl">Filter</h1>
        {/* price  */}
        <h2 className="text-lg mt-3 font-bold">Price Range</h2>
        <div className=" w-full ">
          <div>
            <input
              type="range"
              id="price-range"
              className="w-full text-blue-500"
              min="0"
              max="1000"
              value={price}
              onChange={e => updatePrice(e.target.value)}
            />
          </div>
          <div className="flex justify-between text-gray-500 mb-2">
            <span>${price}</span>
            <span>$1000</span>
          </div>
        </div>
        <hr />
        {/* brand  */}
        <h2 className="text-lg mt-3 font-bold mb-2">Brand</h2>
        <div className='mb-3'>
          <input type="checkbox" name="" />{' '}
          <span className="font-semibold ml-2">SoundPro</span> <br />
          <input type="checkbox" name="" />{' '}
          <span className="font-semibold ml-2">GamerX</span> <br />
          <input type="checkbox" name="" />{' '}
          <span className="font-semibold ml-2">TechWear</span> <br />
          <input type="checkbox" name="" />{' '}
          <span className="font-semibold ml-2">VisionMax</span> 
        </div>
        <hr />
        {/* Category  */}
        <h2 className="text-lg mt-3 font-bold mb-2">Category</h2>
        <div>
          <input type="checkbox" name="" />{' '}
          <span className="font-semibold ml-2">Audio</span> <br />
          <input type="checkbox" name="" />{' '}
          <span className="font-semibold ml-2">Electronics</span> <br />
          <input type="checkbox" name="" />{' '}
          <span className="font-semibold ml-2">Wearables</span> <br />
          <input type="checkbox" name="" />{' '}
          <span className="font-semibold ml-2">Home Entertainment</span> <br />
          <input type="checkbox" name="" />{' '}
          <span className="font-semibold ml-2">Accessories</span> <br />
        </div>
        <input type="submit" value='Apply'  className='bg-blue-500 px-3 py-1 text-white mt-2'/>
        </form>
      </div>
    </section>
  );
};

export default Sidebar;
