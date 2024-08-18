import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://project2-server-xi.vercel.app',
});

const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
