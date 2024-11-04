import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredCartList,addToStoredWishList } from "../../utilities/AddToDb";


const ViewDetails = () => {
    const {productId} =useParams()
    const data=useLoaderData()
    const id=parseInt(productId)
    // console.log(data);
    const product =data.find(product=>product.productId===productId)
    console.log(productId,product);

const {product_image ,product_title,price,description,rating }=product
const { specification } = product;
const features = specification.map(({ feature, value }) => {
    return `${feature}: ${value}`;
  });
  

  features.forEach((feature) => console.log(feature));

const handleAddToCart=(id)=>{
    addToStoredCartList(id)

}
const handleAddToWish=(id)=>{
    addToStoredWishList(id)

}

    return (

<div className="mb-96">
    <div className="bg-[#9538e2] h-[463px]  relative ">

<div className="text-center text-white py-10">
<h1 className="text-3xl font-bold mt-5">Product Details</h1>
<p className="">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
</div>



    </div>


    <div className=" flex w-[1280px] h-[567px] rounded-3xl  absolute inset-0 bg-white mt-64 items-center mx-36 p-10 ">
         <div className=" h-[424px] w-[503px]  rounded-3xl p-10">
        
        <img className=" rounded-3xl h-[424px] w-[503px]" src={product_image}
        alt="" />
        </div>

        <div className="p-10">
            <h2 className="text-2xl font-bold" >{product_title}</h2>
            <p>Price:$ {price}</p>
          
            <button className="btn btn-xs bg-green-300">In Stock</button>
            <button></button>
            <p>{description}</p>
            <h5 className="mt-6 text-lg font-semibold">Specifications:</h5>
                <ul className="list-disc pl-6 mt-2">
                    {specification.map(({ value }, index) => (
                        <li key={index}>{value} </li>
                    ))}
                </ul>
            <h5 className="font-bold mt-5">Rating:</h5>
            <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /><button className="bg-red-50 rounded-full">{rating}</button>
</div>
          <div className="mt-5">
          <button onClick={()=>handleAddToCart(productId)} className="btn bg-purple-500 text-white rounded-3xl">Add to Card    <i className="fa-solid fa-cart-shopping p-4  " aria-label="Shopping Cart"></i></button>
       
                <button onClick={handleAddToWish}>    <i  className="fa-regular fa-heart p-4 rounded-full border ml-3 bg-white" aria-label="Favorites"></i></button>
                
          </div>
            
          

        </div>
        </div>
    </div>
    );
};

export default ViewDetails;
