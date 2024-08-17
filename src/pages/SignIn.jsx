import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
const SignIn = () => {
  const [visible, setVisible] = useState(true);
  const { googleSingUp, githubSingUp, signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const togglePassword = () => {
    setVisible(!visible);
  };

  const signInGoogle = () => {
    googleSingUp ()
      .then(() => {
        Swal.fire({
          title: 'Good job!',
          text: 'Sign In Success',
          icon: 'success',
        });
        navigate(location?.state ? location.state : '/');
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Sign In Failed',
        });
      });
  };
  const signInGithub = () => {
    githubSingUp()
      .then(() => {
        setTimeout(() => {
          Swal.fire({
            title: 'Good job!',
            text: 'Sign In Success',
            icon: 'success',
          });
          navigate(location?.state ? location.state : '/');
        }, 2000);
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Sign In Failed',
        });
      });
  };

  const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(() => {
        Swal.fire({
          title: 'Good job!',
          text: 'Sign In Success',
          icon: 'success',
        });

        navigate(location?.state ? location.state : '/');
      })
      .catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Sign In Failed',
        });
      });
  };

  return (
    <section className="min-h-[100vh]   flex items-center justify-center w-full overflow-x-hidden">
      <div className="container mx-auto flex justify-center ">
        <div className="bg-[#E3F2FD] lg:w-[30%] p-10 rounded-lg">
          <h1 className="font-bold text-3xl text-center mb-5">Sign In</h1>
          <form onSubmit={handleSignIn}>
            <div className="relative">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="h-12 w-full pl-12 rounded-lg mt-2 mb-3 text-black"
                placeholder="Enter Your Email "
                required
              />
              <MdEmail className="absolute text-gray-400 top-12 left-4" />
            </div>

            <div className="relative">
              <label htmlFor="email">Password</label>
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

            <h1 className="text-right">Forget Password</h1>
            <input
              type="Submit"
              value="Sign In"
              className="h-12 w-full pl-5 rounded-lg bg-red-500 mt-2 mb-3"
            />
          </form>
          <h1 className="text-center">Or Sign In with</h1>
          <div className="flex justify-center gap-3 mt-5">
            <div
              onClick={signInGoogle}
              className="bg-white text-2xl px-10 py-2 rounded-full cursor-pointer"
            >
              <FcGoogle />
            </div>
            <div
              onClick={signInGithub}
              className="bg-white text-2xl px-10 py-2 rounded-full cursor-pointer"
            >
              <FaGithub className="text-black" />
            </div>
            <div className="bg-white text-2xl px-10 py-2 rounded-full cursor-pointer">
              <FaFacebook className="bg-white text-blue-500" />
            </div>
          </div>
          <h1 className="text-center mt-5">
            Do not have an account yet?{' '}
            <Link to="/signup">
              <span className="font-bold hover:text-blue-500 hover:underline cursor-pointer">
                SignUp
              </span>{' '}
            </Link>
            for free
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
