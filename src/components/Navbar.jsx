import { IoSearch } from "react-icons/io5";


const Navbar = ({handleSearch,setSearch}) => {
  return (
    <nav className="bg-white h-16 w-full fixed rounded-xl z-20 flex items-center">
    <form onSubmit={handleSearch} className="flex justify-center mx-auto ">
      <div className="bg-[#f0efef] w-[300px] h-9  rounded relative">
        <input
          type="text"
          className="bg-transparent w-full h-full pl-10"
          placeholder="Search here"
          name="search"
        />
        <IoSearch className="absolute top-3 text-gray-400 left-3" />
      </div>
      <input type="submit" value="search" className='bg-blue-500 px-3 py-1 text-white rounded-r'/>
      <button onClick={()=>{setSearch('')}} className="bg-blue-500 ml-2 text-white ">reset</button>
    </form>
    
  </nav>
  );
};

export default Navbar;