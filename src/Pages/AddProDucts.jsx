
const AddProDucts = () => {
return (
 <div className="bg-orange-200 rounded-xl py-10 mt-5 mb-5 max-w-screen-xl mx-auto">
   <form >
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
        <label className="input-group">
       <input type="text" placeholder="brand  Name" name="name" className="input input-bordered w-full" />
        </label>
        </div>
        <div className="w-1/2 mx-auto mt-5 ">
        <span className="label-text text-base">Type</span>
        <label className="input-group">
       <input type="text" placeholder="type" name="name" className="input input-bordered w-full" />
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


      {/* <form >
                                 
   <div className="md:flex gap-5 lg:w-1/2 md:w-1/2 mx-auto">
                                 
               <div className="form-control">
               <label className="label">
                     <span className="label-text">Coffee Name</span>
                      </label>
                         <label className="input-group">
                             <input type="text" placeholder="coffee Name" name="name" className="input input-bordered w-full" />
        </label>
       </div>
 <div className="form-control lg:w-1/2 md:w-1/2 mx-auto">
           <label className="label">
           <span className="label-text">Available Quantity</span>
                 </label>
           <label className="input-group">
               <input type="text" placeholder="quantity" name="quantity" className="input input-bordered w-full" />
             </label>
                  </div>
               </div>
                               
         <div className="md:flex gap-5 lg:w-1/2 md:w-1/2 mx-auto">
                                 
     <div className="form-control">
         <label className="label">
         <span className="label-text">Supplier Name</span>
         </label>
       <label className="input-group">
           <input type="text" placeholder="supplier Name" name="supplier" className="input input-bordered w-full" />
           </label>
          </div>
                                 
   <div className="form-control lg:w-1/2 md:w-1/2 mx-auto">
             <label className="label">
             <span className="label-text">Taste</span>
         </label>
             <label className="input-group">
                     <input type="text" placeholder="taste" name="taste" className="input input-bordered w-full" />
                 </label>
                 </div>
           </div>
           <div className="md:flex gap-5 lg:w-1/2 md:w-1/2 mx-auto">
                                 
       <div className="form-control">
                       <label className="label">
           <span className="label-text">Category Name</span>
             </label> <label className="input-group">
                                     <input type="text" placeholder="Category" name="category" className="input input-bordered w-full" />
             </label>
               </div>
           <div className="form-control lg:w-1/2 md:w-1/2 mx-auto">
             <label className="label">
         <span className="label-text">Details</span>
         </label>
                   <label className="input-group">
         <input type="text" placeholder="details" name="details" className="input input-bordered w-full" />
       </label>
   </div>
          </div>
         <div className="md:flex gap-5 lg:w-1/2 md:w-1/2 mx-auto">
                                 
 <div className="form-control w-full">
           <label className="label">
           <span className="label-text">Photo</span>
           </label>
              <label className="input-group w-full">
                <input type="text" placeholder="Photo" name="photo" className="input input-bordered w-full " />
           </label>
                </div>
                                 
           </div>
                           
          <button className="btn mx-auto btn-primary bg-black mt-5 w-1/2 text-white">book</button> 
           </form>                                                                                        */}
 </div>
  );
};

export default AddProDucts;