import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

export const routes=createBrowserRouter([{
  path:'/',
  element:<App />,
  children:[
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/signin',
      element:<SignIn/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    }
  ]
}])