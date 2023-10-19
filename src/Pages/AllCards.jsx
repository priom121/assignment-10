import { Link } from "react-router-dom";



const AllCards = ({automotive}) => {
 const {_id,photo,brand} = automotive;
 return (
 <div>
  <Link to='/details'>
  <div className="card bg-orange-100 card-compact w-72 shadow-xl">
  <figure><img className="bg-cover w-[300px] bg-orange-100" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-lg font-medium text-center">{brand}</h2>
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div> 
  </Link>
                                                                                     
  </div>
 );
};

export default AllCards;