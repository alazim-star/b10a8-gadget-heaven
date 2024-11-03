

const Product = ({product}) => {
const {product_image}= product

    return (
        <div>
            

<div className="  card bg-base-100 w-full  shadow-xl p-6 ">
    
  <figure className='bg-[#f7f7f7] py-8 rounded-2xl '>
    <img className='h-[166px]'
      src={product_image}
      alt="" />
  </figure>
  <div className="card-body">
   
      <div className='flex gap-20'>
      <div className="badge bg-[#f4fcf3] text-[#23be0a] ">Young Adult</div>
      <div className="badge bg-[#f4fcf3] text-[#23be0a] ">Identity</div>
      </div>
 <div>
    
 <h2 className="card-title">{}</h2>
 <p className='card-title text-lg'>By : {}</p>
 <p className="card-title text-sm ">Total Page :   {}</p>
 
 <div className="border mt-5 border-dashed "></div>
 <div className='flex mt-10 justify-between'>
    <p>{}</p>
    <p>{} <div className="rating ml-2">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
   
    defaultChecked />
 
</div></p>
 </div>

 </div>

  
  </div>
</div>
            
        </div>
    );
};

export default Product;