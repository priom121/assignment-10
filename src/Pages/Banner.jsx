import banner from '../../public/Images/banner.png'
const Banner = () => {
return (
 <div>
     <img className='rounded w-full h-[60vh] shadow-lg' src={banner} alt="" /> 
     <h2 className="text-orange-400 mt-5 text-center text-4xl font-bold">Our Brands</h2>                                                                                    
 </div>
 );
};

export default Banner;