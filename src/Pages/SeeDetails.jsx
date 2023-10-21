import { useLoaderData } from "react-router-dom";
import DetailsOneCard from "./DetailsOneCard";


const SeeDetails = () => {
 const details =useLoaderData()
 console.log(details);
 fetch('https://automotive-server-gray.vercel.app/myCart',{
 method:'POST',
 headers:{
   'content-type':'application/json'
 },
 body:JSON.stringify(details)
})
 .then(res=>res.json())
 .then(data=>{
  console.log(data);
  })
return (
<div className="max-w-screen-xl  justify-center items-center h-[80vh] mx-auto">
 {
details.map(detail=><DetailsOneCard key={detail._id} detail={detail}></DetailsOneCard>)
 }
                                                                                     
 </div>
 );
};

export default SeeDetails;