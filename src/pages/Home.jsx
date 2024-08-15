import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import useAxiosPublic from '../CustomHooks/useAxiosPublic';
import Pagination from '../components/Pagination';

const Home = () => {
  const axiosPublic=useAxiosPublic()
  const [data, setData] = useState([]);
  const [count,setCount]=useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const item=8;
  useEffect(() => {
    axiosPublic.get(`/products?page=${currentPage}&size=${item}`)
    .then(res=>setData(res.data))
axiosPublic.get('/productcount?')
.then(res=>setCount(res.data.count))
  }, [currentPage,item]);
  console.log(count);
  const numberOfPages=Math.ceil(count/item);
  const pages=[...Array(numberOfPages).keys()]
  return (
    <main className='bg-[#F5F5F5]'>
      
      <section className="flex gap-5">
        <div className="w-72 bg-red-400 min-h-screen"></div>
        <div className="flex-1 ">
          <nav className='bg-red-400 h-16 w-full fixed rounded-xl z-20'></nav>
          <div className='grid grid-cols-4 gap-5 p-10 mt-10'> 
          {data.map(d=>< ProductCard key={d.productName} d={d} />)}
          </div>
      <div className="flex justify-center mb-10"><Pagination  pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/></div>
          
        </div>
      </section>
      
    </main>
  );
};

export default Home;
