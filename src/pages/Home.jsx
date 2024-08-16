import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import useAxiosPublic from '../CustomHooks/useAxiosPublic';
import Pagination from '../components/Pagination';
import Navbar from '../components/Navbar';

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');
  const [isloading, setLoading] = useState(true);
  const item = 8;
  const handleSearch = e => {
    e.preventDefault();
    const form = e.target;
    setSearch(form.search.value);
    form.search.value = '';
  };
  useEffect(() => {
    axiosPublic
      .get(`/products?page=${currentPage}&size=${item}&search=${search}`)
      .then(res => {setData(res.data);
        setLoading(false)
      });
    axiosPublic.get('/productcount?').then(res => setCount(res.data.count));
   ;
  }, [currentPage, item, search]);
  console.log(count);
  const numberOfPages = Math.ceil(count / item);
  const pages = [...Array(numberOfPages).keys()];

  return (
    <main className="bg-[#F5F5F5]">
      {/* navbar  */}
      <Navbar setSearch={setSearch} handleSearch={handleSearch} />
      <section className="flex ">
        {/* sidebar  */}
        <div className="w-72  p-3 mt-20  min-h-screen">
          <div className="border-2 bg-white h-full w-full"></div>
        </div>
        {/* ProductCard  */}
        <div className="flex-1 ">
          {isloading ? (
            <div className="h-full w-full flex justify-center items-center">
              <span className="loading loading-lg loading-spinner text-info"></span>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-5 p-10 mt-20">
              {data.map(d => (
                <ProductCard key={d.productName} d={d} />
              ))}
            </div>
          )}

          {/* Pagination  */}
          <div className="flex justify-center mb-10">
            <Pagination
              pages={pages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
