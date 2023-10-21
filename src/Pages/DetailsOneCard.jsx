import { Link } from "react-router-dom";


const DetailsOneCard = ({detail}) => {
  console.log(detail);
  const {_id,photo,brand,name,type,description} =detail
  const handleDetail =()=>{
  const  cart = {_id,photo,brand,name,type,description}
    console.log('handle delete');
    fetch('https://automotive-server-gray.vercel.app/myCart',{
 method:'POST',
 headers:{
   'content-type':'application/json'
 },
 body:JSON.stringify(cart)
})
 .then(res=>res.json())
 .then(data=>{
  console.log(data);
  })
    
  }



return (
<div className="card p-5 w-full mt-44 h-96 md:card-side bg-blue-100 shadow-xl">
  <figure><img className="bg-cover h-[250px] md:h-[350px]" src={photo} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title md:text-3xl font-semibold">{name}</h2>
    <p className="md:text-xl">{description.slice(0,200)}</p>
    <div className="card-actions w-full">
      <Link to='/myCart'>
      <button onClick={handleDetail} className="btn btn-error">Add to cart </button>
      </Link>
    </div>
  </div>
</div>
 );
};

export default DetailsOneCard;