import { NavLink } from "react-router-dom";

const DashCard = ({dashCard}) => {
    const {product_image,product_title,price,productId}= dashCard||{}
console.log(dashCard);
    return (
        <div>
            

<div className="m grid grid-cols-3 w-[800px] mb-5 gap-10 card bg-base-100  shadow-xl p-5">
    
  <figure className='bg-[#f7f7f7] py-8 rounded-2xl '>
    <img className='h-36'
      src={product_image}
      alt="" />
  </figure>
  <div className="card-body">
   
 <div>
    
 <h2 className="card-title"></h2>
 <p className='card-title text-lg'> {product_title}</p>
 <p className="card-title text-sm ">Price:{price}</p>
 
 <div className="border mt-5 border-dashed "></div>

<NavLink to={`/products/${productId}`}>
     <button className="  outline rounded-3xl mt-5  bg-white text-purple-600 hover:bg-purple-200">
        View Details
   </button>
   </NavLink>

 </div>

 </div>

  
  </div>
</div>
            
     
    );
};

export default DashCard