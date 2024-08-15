import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('./products.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  console.log(data);
  return (
    <main className='bg-[#F5F5F5]'>
      
      <section className="flex gap-5">
        <div className="w-72 bg-red-400 min-h-screen"></div>
        <div className="flex-1 ">
          <nav className='bg-red-400 h-16 w-full fixed rounded-xl z-20'></nav>
          <div className='grid grid-cols-4 gap-5 p-10 mt-10'> 
          {data.map(d=>< ProductCard key={d.productName} d={d} />)}
          </div>
         
        </div>
      </section>
    </main>
  );
};

export default Home;
