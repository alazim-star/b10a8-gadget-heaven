import { useEffect, useState } from "react";
import Product from "../Product/Product";


const Products = () => {
const [products,setProducts]=useState([])
useEffect(()=>{
fetch('/product.json')
.then(res=>res.json())
.then(data=>setProducts(data))


},[])




    return (

<div className="mt-96 bg-[#f7f7f7] w-full">

<h2 className='text-center lg:text-4xl  mb-20 text-2xl font-bold '>Explore Cutting-Edge Gadgets</h2>
        
        
           

           

            <div className="flex gap-5">

            <div className="h-[500px] w-64 p-3 bg-white rounded-3xl ">
                <button className="btn w-full rounded-3xl mb-5">All Product</button>
                <button className="btn w-full rounded-3xl mb-5">Laptops</button>
                <button className="btn w-full rounded-3xl mb-5">Phones</button>
                <button className="btn w-full rounded-3xl mb-5">Accessories</button>
                <button className="btn w-full rounded-3xl mb-5">Smart Watches</button>
                <button className="btn w-full rounded-3xl mb-5">MacBook</button>
                <button className="btn w-full rounded-3xl mb-5">Iphone</button>
                


            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 ml-14 lg:ml-0">
        {
    products.map(product=><Product key={product.product_id} product={product}></Product>)
}

         
         
         
      
           </div>



            </div>

        </div>
    );
};

export default Products;