
import { useLoaderData } from "react-router-dom";
import Data from "./Data";



const Details = () => {

const cards = useLoaderData();
console.log(cards);

 return (

  <div>

   <div className=" max-w-screen-xl mx-auto gap-5 mt-5 grid grid-cols-2">
   {
      cards.map(card=><Data key={card._id} card={card}></Data>)
   }

   </div>                                                                             
 </div>
 

 );
};

export default Details;