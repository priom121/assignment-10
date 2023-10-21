import author1 from '../../public/Images/author1.jpg'
import author2 from '../../public/Images/author2.jpg'
const FeedBack = () => {
return (
 <div className="py-10 border ">
     <h2 className="text-orange-500 text-3xl text-center font-bold">
    CUSTOMER FEEDBACK</h2> 
<div className="md:flex   justify-evenly max-w-screen-xl mx-auto">
<div className="card w-72 bg-orange-200 shadow-xl mb-5">
  <div className="card-body items-center text-center ">
   <img src={author1}></img>
  <h3 className="text-orange-500 text-3xl">jimmy marco</h3>
  <p className='text-orange-600 font-bold'>California</p>
   <p>they have got my project with the competation with highly skilled.
    well organized and experienced teams professional mates pashing
   </p>
  </div>
</div>                                                                                     
    <div className="card w-72 bg-orange-200 shadow-xl mb-5">
  <div className="card-body items-center text-center ">
  <img src={author2}></img>
  <h3 className="text-orange-500 text-3xl">Vendana zoe</h3>
  <p className='text-orange-600 font-bold'>Los Angels</p>
   <p>
    How this mistaken ideas denouncing pleasure and pain was born and will
    give you complete account the system expound great.                          
   </p>
  </div>
</div>                            
                              
</div>                                                                                                                                                                      
 </div>
);
};

export default FeedBack;