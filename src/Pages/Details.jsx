
import { useLoaderData } from "react-router-dom";
import Data from "./Data";
import Slider from "./Slider";



const Details = () => {

const cards = useLoaderData();
// console.log(cards);

 return (

  <div>
  <div className="max-w-screen-xl mt-32 border mx-auto ">
<Slider></Slider>
  </div>
   <div className=" max-w-screen-xl  mb-3 mx-auto gap-5 grid grid-cols-1 md:grid-cols-2">
   {
      cards.map(card=><Data key={card._id} card={card}></Data>)
   }

   </div>                                                                             
 </div>
 

 );
};

export default Details;