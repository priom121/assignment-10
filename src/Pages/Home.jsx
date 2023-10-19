import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import AllCards from "./AllCards";
import ExtraSection from "./ExtraSection";


const Home = () => {
  const autoMotives =useLoaderData()
return (
<div>
    <div className="max-w-screen-2xl mx-auto">
    <Banner></Banner>  
      </div>
      <div
       className="max-w-screen-xl mx-auto grid py-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {
          autoMotives.map(automotive=><AllCards key={automotive._id} automotive={automotive}>

          </AllCards>)
        }
        </div> 
        <ExtraSection></ExtraSection>                                                                                 
 </div>
 );
};

export default Home;