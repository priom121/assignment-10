import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Error from "../Eoor/Error";
import Home from "../Pages/Home";
import AddProDucts from "../Pages/AddProDucts";
import MyCart from "../Pages/MyCart";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";

const router = createBrowserRouter([
 {
   path:'/',
   element:<MainLayOut></MainLayOut>,
   errorElement:<Error></Error>,
   children:[
          {
            path:'/',
            element:<Home></Home>                  
          },
          {
            path:'/addProDucts',
            element:<AddProDucts></AddProDucts>
          },
          {
            path:'/myCart',
            element:<MyCart></MyCart>
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