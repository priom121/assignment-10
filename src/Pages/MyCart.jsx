import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const myCart = useLoaderData()
    console.log(myCart);
return (
 <div>
     <h3>my cart</h3>                                                                                     
 </div>
 );
};

export default MyCart;