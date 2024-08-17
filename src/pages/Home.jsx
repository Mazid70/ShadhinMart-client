import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import useAxiosPublic from '../CustomHooks/useAxiosPublic';
import Pagination from '../components/Pagination';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const[sort,setSort]=useState('');
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
      .get(`/products?page=${currentPage}&size=${item}&search=${search}&sort=${sort}`)
      .then(res => {setData(res.data);
        setLoading(false)
      });
    axiosPublic.get(`/productcount?search=${search}`).then(res => setCount(res.data.count));
   ;
  }, [currentPage, item, search,sort]);
  console.log(sort);
  const numberOfPages = Math.ceil(count / item);
  const pages = [...Array(numberOfPages).keys()];

  return (
    <main className="bg-[#F5F5F5]">
      {/* navbar  */}
      <Navbar setSearch={setSearch} handleSearch={handleSearch} />
      <section className="flex ">
        {/* sidebar  */}
        <Sidebar />
        {/* ProductCard  */}
        <div className="flex-1 ">
          <select
          onChange={e=>setSort(e.target.value)}
          value={sort}
           className='absolute top-[70px] right-10 p-2  rounded font-semibold' >
            <option value="Sort by Low to High price">Sort by  </option>
            <option value="lth">Sort by Low to High price </option>
            <option value="htl">Sort by High to Low price</option>
            <option value="date">Sort By Added date</option>
          </select>
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
