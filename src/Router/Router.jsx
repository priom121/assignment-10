import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Layout/MainLayOut";
import Error from "../Eoor/Error";
import Home from "../Pages/Home";
import AddProDucts from "../Pages/AddProDucts";
import MyCart from "../Pages/MyCart";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import PrivateRouter from "./PrivateRouter";
import Details from "../Pages/Details";
import SeeDetails from "../Pages/SeeDetails";

const router = createBrowserRouter([
 {
   path:'/',
   element:<MainLayOut></MainLayOut>,
   errorElement:<Error></Error>,
   children:[
          {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('https://automotive-server-gray.vercel.app/automotive')               
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
          },
          {
            path:'/details/:brand',
            element:<Details></Details>,
            loader: ({params})=>fetch(`https://automotive-server-gray.vercel.app/details/${params.brand}`)
          },
          {
            path:'/seeDetails/:id',
            element:<PrivateRouter><SeeDetails></SeeDetails></PrivateRouter>,
            loader:({params})=>fetch(`https://automotive-server-gray.vercel.app/seeDetails/${params.id}`)
          }                 
   ]
 }                             
])

export default router;