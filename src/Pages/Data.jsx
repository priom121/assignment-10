
const Data = ({datas}) => {
  const {_id,photo,brand,name} = datas;
return (
 <div>
<div className="card bg-orange-100 card-compact w-72 shadow-xl">
  <figure><img className="bg-cover w-[300px] bg-orange-100" src={photo} alt="Shoes" /></figure>
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