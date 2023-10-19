import Swal from "sweetalert2";

const AddProDucts = () => {
const handleAdd =(e)=>{
  e.preventDefault()
  const form = e.target
  const photo = form.photo.value;
  const name = form.name.value;
  const brand = form.brand.value;
  const type = form.type.value;
  const price =form.price.value;
  const description =form.description.value;
  const rating =form.rating.value;
  const user ={photo ,name,brand,type,price,description,rating};
  const details = {photo ,name,brand,type,price,description,rating}
  console.log(user);

  // send data to server
  fetch('http://localhost:5000/automotive',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(user)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    if(data.insertedID){
      Swal.fire({
        icon: 'success',
        title: 'success',
        text: ' user added successfully',
      })
    }
  })

  fetch('http://localhost:5000/details',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(details)
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
       if(data.insertedID){
      Swal.fire({
        icon: 'success',
        title: 'success',
        text: ' user added successfully',
      })
    }
  })

}
return (
 <div className="bg-orange-200 rounded-xl py-10 mt-5 mb-5 max-w-screen-xl mx-auto">
   <form onSubmit={handleAdd} >
   <label className="">
     <span className=" text-2xl mt-4 font-medium">Add Products </span>
        </label>
        <div className="">
        <div className="mx-auto w-1/2">
           <label className="label">
           <span className="label-text text-base">Photo</span>
           </label>
              <label className="input-group w-full">
                <input type="text" placeholder="Photo" name="photo" className="input input-bordered w-full " />
           </label>
                </div>
        <div className="w-1/2 mx-auto mt-5 ">
        <span className="label-text text-base">Name</span>
        <label className="input-group">
       <input type="text" placeholder=" Name" name="name" className="input input-bordered w-full" />
        </label>
        </div>
        <div className="w-1/2 mx-auto mt-5 ">
        <span className="label-text text-base">Brand Name</span>
        <label className="input-group  ">
        <select placeholder="brand Name" name="brand"
         className="w-full select select-bordered  ">
            <option selected>Toyota</option>
            <option>Ford</option>
            <option>BMW</option>
            <option>Mercedes-Benz</option>
            <option>Tesla</option>
            <option>Honda</option>
</select>
       {/* <input type="text" placeholder="brand Name" name="brand" className="input input-bordered w-full" /> */}
        </label>
       
        </div>
        <div className="w-1/2 mx-auto mt-5 ">
        <span className="label-text text-base">Type</span>
        <label className="input-group">
       <input type="text" placeholder="type" name="type" className="input input-bordered w-full" />
        </label>
        </div>
        <div className="w-1/2 mx-auto mt-5 ">
        <span className="label-text text-base">price</span>
        <label className="input-group">
       <input type="text" placeholder="price" name="price" className="input input-bordered w-full" />
        </label>
        </div>
        <div className="w-1/2 mx-auto mt-5 ">
        <span className="label-text text-base">description</span>
        <label className="input-group">
       <input type="text" placeholder="description" name="description" className="input input-bordered w-full" />
        </label>
        </div>
        <div className="w-1/2 mx-auto mt-5 ">
        <span className="label-text text-base">rating</span>
        <label className="input-group">
       <input type="text" placeholder="Rating" name="rating" className="input input-bordered w-full" />
        </label>
        </div>
      <div className="text-center mt-5">
      <button className="btn btn-info ">Add products</button>
      </div>
        </div>



   </form>   
 </div>
  );
};

export default AddProDucts;