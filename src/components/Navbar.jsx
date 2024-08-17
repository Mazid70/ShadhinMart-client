import { useContext } from 'react';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineMenu } from 'react-icons/md';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = ({
  handleSearch,
  setSearch,
  hidden,
  setHidden,
  isOpen,
  setOpen,
}) => {
  const handleReset = () => {
    setSearch('');
    setHidden(!hidden);
  };
  const { user,logOut } = useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .the()
  }
  return (
    <nav className="bg-white h-16 w-full fixed rounded-xl z-20 flex items-center shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <MdOutlineMenu
          onClick={() => {
            setOpen(!isOpen);
          }}
          className="lg:hidden text-2xl ml-5"
        />
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
        {user ? (
          <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full border-2 border-black">
              <img
                alt="profile"
                src={user?.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li onClick={handleLogOut}><a>Logout</a></li>
          </ul>
        </div>
          
        ) : (
          <Link to="/signin">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
