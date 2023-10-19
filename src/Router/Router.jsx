import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Error from "../Eoor/Error";
import Home from "../Pages/Home";
import AddProDucts from "../Pages/AddProDucts";
import MyCart from "../Pages/MyCart";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
 {
   path:'/',
   element:<MainLayOut></MainLayOut>,
   errorElement:<Error></Error>,
   children:[
          {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/automotive')               
          },
          {
            path:'/addProDucts',
            element:<PrivateRouter><AddProDucts></AddProDucts></PrivateRouter>
          },
          {
            path:'/myCart',
            element:<PrivateRouter><MyCart></MyCart></PrivateRouter>
          },
          {
            path:'/login',
            element:<LogIn></LogIn>
          } ,
          {
            path:'/register',
            element:<Register></Register>
          }                 
   ]
 }                             
])

export default router;