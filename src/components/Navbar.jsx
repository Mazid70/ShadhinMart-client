import { useContext, useEffect, useState } from 'react';
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
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  const handleLogOut = () => {
    logOut().then(); // Adjusted from .the() to .then()
  };

  const handleReset = () => {
    setSearch('');
    setHidden(!hidden);
  };

  const handleToggle = e => {
    const selectedTheme = e.target.checked ? 'dark' : 'light';
    setTheme(selectedTheme);
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <nav className="bg-white h-16 w-full fixed z-20 flex items-center shadow-md dark:bg-black">
      <div className="container mx-auto flex items-center justify-between">
        <MdOutlineMenu
          onClick={() => {
            setOpen(!isOpen);
          }}
          className="lg:hidden text-2xl ml-5"
        />
        <h1 className="text-3xl hidden lg:block font-extrabold bg-gradient-to-r from-red-600 to-green-400 text-transparent bg-clip-text">
          Shadhin Mart
        </h1>
        <form onSubmit={handleSearch} className="flex justify-center mx-auto">
          <div className="bg-[#f0efef] lg:w-[300px] h-9 rounded relative">
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
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border-2 border-black bg-white">
                <img alt="profile" src={user?.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={handleLogOut}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/signin">Sign In</Link>
        )}

        <label className="flex cursor-pointer gap-2 ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={handleToggle}
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;
