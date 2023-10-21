import { Link } from "react-router-dom";


const DetailsOneCard = ({detail}) => {
const {_id,photo,brand,name,type,description} =detail
return (
<div className="card w-full mt-44 h-96 card-side bg-blue-100 shadow-xl">
  <figure><img className="bg-cover h-[350px]" src={photo} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl font-semibold">{name}</h2>
    <p className="text-xl">{description}</p>
    <div className="card-actions w-full">
      <Link to='/myCart'>
      <button className="btn btn-error">Add to card</button>
      </Link>
    </div>
  </div>
</div>
 );
};

export default DetailsOneCard;