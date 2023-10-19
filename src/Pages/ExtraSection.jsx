import FeedBack from "./FeedBack";

const ExtraSection = () => {
 return (
 <div>
     <h3 className="text-3xl py-10 font-semibold  text-center">WHY CHOOSE US</h3> 
<div className=" max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
                              
<div className="card w-72 bg-orange-100 mb-5 ">
  <div className="card-body items-center text-center ">
  <h3 className="text-orange-500 text-3xl">Auto Loan Facility</h3>
   <p>Easy Finance</p>
   <p>How all this mistakens idea off ut denouncing pleasures <br/>
    and praisings ut pain.</p>
    <ul>
       <li> 1. Professional Finance </li>
       <li> 2. Affordable EMI</li>
       <li> 3.  Less Interest Rate </li>                      
    </ul>
  </div>
</div>                                                                                 
     <div className="card w-72 bg-orange-100 mb-5">
  <div className="card-body items-center text-center ">
  <h3 className="text-orange-500 text-3xl">Free Documentation</h3>
   <p>No Hidden Charges</p>
   <p>Denouncing pleasures and ut praisings pains<br/>
    was born work will gives you..</p>
    <ul>
       <li> 1. Quick Documentation </li>
       <li> 2. Very Confidential</li>
       <li> 3.  On Time Processing </li>                      
    </ul>
  </div>
</div>                                                                                 
     <div className="card w-72 bg-orange-100 mb-5">
  <div className="card-body items-center text-center ">
  <h3 className="text-orange-500 text-3xl">Customer Support</h3>
   <p>24/7 Online Support</p>
   <p>Idea of denouncing pleasure ut and praisings pain born<br/>
    and system and expound.</p>
    <ul>
       <li> 1. Experienced Team </li>
       <li> 2. Humble Talk</li>
       <li> 3.  Quick Response</li>                      
    </ul>
  </div>
</div>                            
                              
</div> 
<FeedBack></FeedBack>                                                                                
 </div>
 );
};

export default ExtraSection;