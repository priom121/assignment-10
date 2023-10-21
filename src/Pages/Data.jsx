/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Data = ({card}) => {
  const {_id,photo,brand,name,price,rating,type} = card;
return (
 <div>
 

<div className="card  bg-orange-100 mb-32 card-compact  shadow-xl">
  <figure><img className="bg-cover w-56 h-36  bg-white" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <p className="text-lg font-medium text-center">Name: {name}</p>
    <p className="text-lg font-medium text-center">Type: {type}</p>
    <h2 className="text-lg font-medium text-center"> Brand Name:{brand}</h2>
    <h2 className="text-lg font-medium text-center"> Price:{price}</h2>
    <h2 className="text-lg font-medium text-center"> Rating:{rating}</h2>
    {/* <h3>description:{description.slice(0,200)}</h3> */}
    <div className="card-actions justify-center">
      <Link to={`/seeDetails/${_id}`}>
      <button  className="btn btn-secondary"> Details</button>
      </Link>
      <button className="btn btn-info"> update</button>
    </div>
  </div>
</div>                                                                                    
  </div>
 );
};

export default Data;