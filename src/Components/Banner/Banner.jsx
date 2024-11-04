import { NavLink } from "react-router-dom";
import BannerImage from "./../../assets/banner.jpg";

const Banner = () => {
    return (
        <div>
            
            <div className="bg-[#9538e2] min-h-[694px]  rounded-b-3xl relative   ">

              


            


                <div className="hero-content text-center text-white container mx-auto">
    <div className="mt-28">
      <h1 className="text-5xl font-bold"> Upgrade Your Tech Accessories with Gadget Heaven</h1>
      <p className="py-6">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
            
      <NavLink to="/shop">
                        <button className="px-6 py-3 rounded-3xl bg-white text-purple-600 hover:bg-purple-200">
                            Shop Now
                        </button>
                    </NavLink>
    </div>
  </div>

                  
              
           
            
                
            
            <div className="bg-purple-500 rounded-3xl w-[1062px] absolute inset-0  ml-56 mt-[450px]  ">
                    <img
                        className="h-[563px] border w-[1062px] p-5 rounded-3xl"
                        src={BannerImage}
                        alt="Banner"
                    />
                   


                    
                </div>
                </div>


              

                </div>
        
    );
};

export default Banner;