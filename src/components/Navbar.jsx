import { IoSearch } from 'react-icons/io5';
import { MdOutlineMenu } from 'react-icons/md';

const Navbar = ({ handleSearch, setSearch, hidden, setHidden ,isOpen,setOpen}) => {
  const handleReset = () => {
    setSearch('');
    setHidden(!hidden);
  };
  console.log(hidden);
  return (
    <nav className="bg-white h-16 w-full fixed rounded-xl z-20 flex items-center">
      <div className="container mx-auto flex items-center ">
      <MdOutlineMenu onClick={()=>{setOpen(!isOpen)}} className='lg:hidden text-2xl ml-5' />
        <h1 class="text-3xl hidden lg:block font-extrabold bg-gradient-to-r from-red-600  to-green-400 text-transparent bg-clip-text">
          Shadhin Mart
        </h1>
        <form onSubmit={handleSearch} className="flex justify-center mx-auto ">
          <div className="bg-[#f0efef] lg:w-[300px] h-9  rounded relative">
            <input
              type="text"
              className="bg-transparent w-full h-full pl-10"
              placeholder="Search here"
              name="search"
              onChange={() => setHidden(false)}
            />
            <IoSearch className="absolute top-3 text-gray-400 left-3" />
          </div>
          <input
            type="submit"
            value="search"
            className="bg-blue-500 px-3 py-1 text-white rounded-r"
          />
          <button
            onClick={handleReset}
            className={
              hidden ? 'hidden' : 'bg-blue-500 ml-2 px-2 text-white rounded'
            }
          >
            reset
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
