import { MdEmail } from 'react-icons/md';
import { FaLock, FaUser, FaPhoneAlt } from 'react-icons/fa';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';


const SignUp = () => {
 
  const [visible, setVisible] = useState(true);
  const togglePassword = () => {
    setVisible(!visible);
  };
  const navigate = useNavigate();
  const onform = '/';
  const { createUser, updateUser } = useContext(AuthContext);
  const handleSignUp = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const phone = form.get('phone');
    const image = form.get('photo');
    const password = form.get('password');

    createUser(email, password)
      .then(result => {
        updateUser(name, image, phone);
        console.log(result.user)


        if (result.user) {
         
          Swal.fire({
            title: 'Good job!',
            text: 'Sign Up Success',
            icon: 'success',
          });
          navigate(onform);
        
        }
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Sign Up Failed',
        });
      });
  };
  return (
    <section className="min-h-[100vh]  flex items-center justify-center w-full">
       <div className="container mx-auto flex  justify-center ">
        <div className=" bg-[#E3F2FD] lg:w-[32%] p-10 rounded-lg">
          <h1 className="font-bold text-3xl text-center mb-5">Sign Up</h1>
          <form onSubmit={handleSignUp}>
            <div className="relative">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="h-12 w-full pl-12 rounded-lg mt-2 mb-3 text-black"
                placeholder="Enter Your Name "
                required
              />
              <FaUser className="absolute text-gray-400 top-12 left-4" />
            </div>
            <div className="relative">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="h-12 w-full pl-12 rounded-lg mt-2 mb-3 text-black"
                placeholder="Enter Your Email "
                required
              />
              <MdEmail className="absolute text-gray-400 top-12 left-4" />
            </div>
            <div className="relative">
              <label htmlFor="photo">Photo URL</label>
              <input
                type="link"
                name="photo"
                className="h-12 w-full pl-12 rounded-lg mt-2 mb-3 text-black"
                placeholder="Enter Your Photo URL "
                required
              />
              <FaUser className="absolute text-gray-400 top-12 left-4" />
            </div>
            <div className="relative">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                name="phone"
                className="h-12 w-full pl-12 rounded-lg mt-2 mb-3 text-black"
                placeholder="Enter Your Phone Number "
                required
              />
              <FaPhoneAlt className="absolute text-gray-400 top-12 left-4" />
            </div>
            <div className="relative">
              <label htmlFor="password">Password</label>
              <input
                type={visible ? 'password' : 'text'}
                name="password"
                className="h-12 w-full pl-12 rounded-lg mt-2  text-black"
                placeholder="Enter Your Password "
                required
              />
              {visible ? (
                <BsFillEyeFill
                  onClick={togglePassword}
                  className="text-black text-2xl absolute top-11 right-7"
                />
              ) : (
                <BsFillEyeSlashFill
                  onClick={togglePassword}
                  className="text-black text-2xl absolute top-11 right-7"
                />
              )}
              <FaLock className="absolute text-gray-400 top-12 left-4" />
            </div>

            <input
              type="Submit"
              value="Sign Up"
              className="h-12 w-full rounded-lg bg-red-500 mt-4 mb-3 "
            />
          </form>

          <h3 className="mt-5 text-center">
            Already have an account?{' '}
            <Link
              className="font-semibold hover:text-blue-500 hover:underline"
              to="/signin"
            >
              Sign In
            </Link>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
