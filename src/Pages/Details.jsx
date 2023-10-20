
import { useLoaderData } from "react-router-dom";



const Details = () => {

const cards = useLoaderData();
console.log(cards);

 return (

  <div>

   <div>
   {/* <h2>data:{data.length}</h2>
    {
       data.map(datas=><Data key={datas._id} datas={datas}></Data>)
    } */}

   </div>                                                                             
 </div>
 

 );
};

export default Details;