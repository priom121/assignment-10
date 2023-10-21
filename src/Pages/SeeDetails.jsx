import { useLoaderData } from "react-router-dom";
import DetailsOneCard from "./DetailsOneCard";


const SeeDetails = () => {
 const details =useLoaderData()
 console.log(details);
return (
<div className="max-w-screen-xl  justify-center items-center h-[80vh] mx-auto">
 {
details.map(detail=><DetailsOneCard key={detail._id} detail={detail}></DetailsOneCard>)
 }
                                                                                     
 </div>
 );
};

export default SeeDetails;