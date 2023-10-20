

const Data = ({card}) => {
  const {_id,photo,brand,name} = card;
return (
 <div>
{/* slider start */}

{/* slider end */}

<div className="card  bg-orange-100  card-compact  shadow-xl">
  <figure><img className="bg-cover w-56 h-36  bg-white" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <p className="text-lg font-medium text-center">{name}</p>
    <h2 className="text-lg font-medium text-center">{brand}</h2>
    <div className="card-actions justify-center">
      <button className="btn btn-secondary"> Details</button>
    </div>
  </div>
</div>                                                                                    
  </div>
 );
};

export default Data;